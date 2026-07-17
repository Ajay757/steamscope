export const GENRE_FILTERS = [
  'all',
  'Shooter',
  'RPG',
  'Action',
  'Strategy',
  'Simulation',
  'Sandbox',
]

export const METRIC_OPTIONS = ['peakPlayers', 'averagePlayers']

export const AVERAGE_PERIOD_OPTIONS = ['weekly', 'monthly', 'yearly']

export const ACTIVITY_PERIOD_OPTIONS = ['monthly', 'yearly']

const monthOrder = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function getPopularGamesChartData(games, { genre, metric, averagePeriod }) {
  return games
    .filter((game) => genre === 'all' || game.genre === genre)
    .map((game) => ({
      id: game.id,
      name: game.name,
      genre: game.genre,
      value:
        metric === 'averagePlayers'
          ? getAveragePlayersByPeriod(game, averagePeriod)
          : game[metric],
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8)
}

function getAveragePlayersByPeriod(game, period) {
  const latestMonth = game.monthlyPlayers.at(-1).players

  if (period === 'weekly') {
    return Math.round(latestMonth * 0.96)
  }

  if (period === 'monthly') {
    return latestMonth
  }

  return game.averagePlayers
}

export function getPlayerActivityChartData(game, { period, t }) {
  if (period === 'yearly') {
    return getYearlyPlayerActivityData(game)
  }

  return game.monthlyPlayers.map((entry) => ({
    label: t.months.short[entry.month],
    tooltipLabel: t.months.full[entry.month],
    players: entry.players,
  }))
}

export function getPlayerComparisonChartData(games, { period, t }) {
  const gameSeries = games.map((game) => ({
    ...game,
    chartKey: getGameChartKey(game.id),
    points: getPlayerActivityChartData(game, { period, t }),
  }))
  const labels = [
    ...new Set(gameSeries.flatMap((game) => game.points.map((point) => point.label))),
  ].sort((a, b) =>
    period === 'yearly'
      ? Number(a) - Number(b)
      : getMonthLabelIndex(a, t) - getMonthLabelIndex(b, t),
  )

  return labels.map((label) => {
    const row = { label, tooltipLabel: label }

    gameSeries.forEach((game) => {
      const point = game.points.find((entry) => entry.label === label)

      if (point) {
        row.tooltipLabel = point.tooltipLabel
        row[game.chartKey] = point.players
      }
    })

    return row
  })
}

function getMonthLabelIndex(label, t) {
  return monthOrder.findIndex((month) => t.months.short[month] === label)
}

export function getGameChartKey(gameId) {
  return `game_${gameId.replaceAll('-', '_')}`
}

function getYearlyPlayerActivityData(game) {
  const endYear = 2026
  const startYear = Math.max(game.releaseYear, endYear - 5)
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index,
  )

  return years.map((year, index) => {
    const phase = years.length === 1 ? 1 : index / (years.length - 1)
    const launchCurve = 1.35 - phase * 0.35
    const retentionCurve = 0.85 + phase * 0.3
    const variation = 1 + (((game.name.length + year) % 13) - 6) / 100

    return {
      label: String(year),
      tooltipLabel: String(year),
      players: Math.round(game.averagePlayers * launchCurve * retentionCurve * variation),
    }
  })
}

export function getPlayerActivityScale(values) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(max - min, 10000)
  const padding = range * 0.15
  const domainMin = Math.max(0, roundDown(min - padding))
  const domainMax = roundUp(max + padding)
  const step = Math.max(roundUp((domainMax - domainMin) / 4), 10000)
  const ticks = Array.from({ length: 5 }, (_, index) => domainMin + step * index)

  return {
    domain: [domainMin, ticks.at(-1)],
    ticks,
    min,
    max,
  }
}

function roundDown(value) {
  return Math.floor(value / 10000) * 10000
}

function roundUp(value) {
  return Math.ceil(value / 10000) * 10000
}
