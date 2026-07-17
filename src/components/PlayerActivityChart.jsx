import { useId, useMemo, useState } from 'react'
import { LineChart as LineChartIcon, X } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ACTIVITY_PERIOD_OPTIONS,
  getGameChartKey,
  getPlayerComparisonChartData,
  getPlayerActivityScale,
} from '../utils/chartData.js'
import { formatCompactNumber, formatNumber } from '../utils/formatters.js'

const chartColors = {
  grid: '#27405f',
  muted: '#9db3c7',
  text: '#f8fafc',
}

const lineColors = ['#7ee7d6', '#66c0f4', '#fbbf24', '#f472b6']
const maxSelectedGames = 4

export function PlayerActivityChart({ games, locale, t }) {
  const titleId = useId()
  const descriptionId = useId()
  const chartSummaryId = useId()
  const [selectedGameIds, setSelectedGameIds] = useState(
    games.slice(0, 3).map((game) => game.id),
  )
  const [period, setPeriod] = useState('monthly')

  const selectedGames = useMemo(
    () => games.filter((game) => selectedGameIds.includes(game.id)),
    [games, selectedGameIds],
  )
  const availableGames = useMemo(
    () => games.filter((game) => !selectedGameIds.includes(game.id)),
    [games, selectedGameIds],
  )
  const chartData = useMemo(
    () => getPlayerComparisonChartData(selectedGames, { period, t }),
    [selectedGames, period, t],
  )
  const yAxisScale = useMemo(
    () =>
      getPlayerActivityScale(
        chartData.flatMap((entry) =>
          selectedGames
            .map((game) => entry[getGameChartKey(game.id)])
            .filter((value) => Number.isFinite(value)),
        ),
      ),
    [chartData, selectedGames],
  )

  function addGame(gameId) {
    if (!gameId) {
      return
    }

    setSelectedGameIds((currentIds) => {
      if (currentIds.includes(gameId)) {
        return currentIds
      }

      return currentIds.length >= maxSelectedGames
        ? currentIds
        : [...currentIds, gameId]
    })
  }

  function removeGame(gameId) {
    setSelectedGameIds((currentIds) =>
      currentIds.length === 1 ? currentIds : currentIds.filter((id) => id !== gameId),
    )
  }

  return (
    <article
      className="rounded-lg border border-steam-border/80 bg-steam-panel p-5 shadow-xl shadow-black/10 sm:p-6"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg bg-steam-teal/10 text-steam-teal">
            <LineChartIcon aria-hidden="true" size={21} />
          </span>
          <h2 id={titleId} className="text-xl font-semibold text-white">
            {t.charts.activity.title}
          </h2>
        </div>
        <p id={descriptionId} className="mt-3 text-sm text-steam-muted">
          {t.charts.activity.description}
        </p>
      </div>

      <div className="mt-5 rounded-lg border border-steam-border bg-steam-deep p-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_12rem]">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-steam-muted">
              {t.filters.addGame}
            </span>
            <select
              value=""
              onChange={(event) => addGame(event.target.value)}
              disabled={selectedGameIds.length >= maxSelectedGames}
              className="min-h-11 rounded-lg border border-steam-border bg-steam-card px-3 text-sm text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-steam-blue focus-visible:ring-2 focus-visible:ring-steam-blue/40"
            >
              <option value="">
                {selectedGameIds.length >= maxSelectedGames
                  ? t.filters.maxGamesReached
                  : t.filters.chooseGame}
              </option>
              {availableGames.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-steam-muted">
              {t.filters.timePeriod}
            </span>
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="min-h-11 rounded-lg border border-steam-border bg-steam-card px-3 text-sm text-white outline-none transition focus-visible:border-steam-blue focus-visible:ring-2 focus-visible:ring-steam-blue/40"
            >
              {ACTIVITY_PERIOD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {t.filters.activityPeriods[option]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-white">
              {t.filters.selectedGames}
            </p>
            <p className="text-xs text-slate-400">
              {t.filters.selectedCount(selectedGames.length, maxSelectedGames)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedGames.map((game, index) => {
              const color = lineColors[index % lineColors.length]
              const canRemove = selectedGames.length > 1

              return (
                <span
                  key={game.id}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-steam-border/80 bg-steam-card px-3 py-2 text-sm text-white"
                >
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span className="max-w-44 truncate">{game.name}</span>
                  <button
                    type="button"
                    onClick={() => removeGame(game.id)}
                    disabled={!canRemove}
                    className="grid size-6 shrink-0 place-items-center rounded-full text-steam-muted transition hover:bg-steam-border/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steam-teal"
                    aria-label={t.filters.removeGame(game.name)}
                  >
                    <X aria-hidden="true" size={14} />
                  </button>
                </span>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-steam-border/70 bg-steam-deep/70 p-3 sm:p-4">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white">
            {t.charts.activity.compareLabel(selectedGames.length)}
          </p>
          <p className="text-xs text-steam-muted">{t.charts.activity.yAxis}</p>
        </div>

        <div
          className="h-96 w-full overflow-x-auto"
          role="img"
          aria-label={t.charts.activity.ariaLabel}
          aria-describedby={chartSummaryId}
        >
          <p className="sr-only" id={chartSummaryId}>
            {t.charts.activity.screenReaderSummary(selectedGames.length)}
          </p>
          <div className="h-full min-w-[38rem]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 12, right: 18, bottom: 16, left: 8 }}
              >
                <CartesianGrid
                  stroke={chartColors.grid}
                  strokeDasharray="3 3"
                  vertical={false}
                  opacity={0.45}
                />
                <XAxis
                  dataKey="label"
                  interval={0}
                  stroke={chartColors.muted}
                  tick={{ fill: chartColors.text, fontSize: 12 }}
                  axisLine={{ stroke: chartColors.grid }}
                  tickLine={false}
                  label={{
                    value: t.charts.activity.xAxis[period],
                    position: 'insideBottom',
                    offset: -10,
                    fill: chartColors.muted,
                    fontSize: 12,
                  }}
                />
                <YAxis
                  domain={yAxisScale.domain}
                  ticks={yAxisScale.ticks}
                  tickFormatter={(value) => formatCompactNumber(value, locale)}
                  stroke={chartColors.muted}
                  tick={{ fill: chartColors.muted, fontSize: 12 }}
                  axisLine={{ stroke: chartColors.grid }}
                  tickLine={false}
                  width={62}
                />
                <Tooltip
                  cursor={{ stroke: '#66c0f4', strokeDasharray: '4 4' }}
                  content={<PlayerActivityTooltip locale={locale} t={t} />}
                />
                {selectedGames.map((game, index) => {
                  const color = lineColors[index % lineColors.length]

                  return (
                    <Line
                      key={game.id}
                      type="monotone"
                      dataKey={getGameChartKey(game.id)}
                      name={game.name}
                      stroke={color}
                      strokeWidth={3}
                      connectNulls={false}
                      dot={{
                        r: 4,
                        fill: '#07111f',
                        stroke: color,
                        strokeWidth: 2,
                      }}
                      activeDot={{
                        r: 6,
                        fill: color,
                        stroke: '#07111f',
                        strokeWidth: 2,
                      }}
                    />
                  )
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </article>
  )
}

function PlayerActivityTooltip({ active, payload, locale, t }) {
  if (!active || !payload?.length) {
    return null
  }

  const point = payload[0].payload

  return (
    <div className="rounded-lg border border-steam-border bg-steam-card px-4 py-3 text-sm shadow-xl shadow-black/30">
      <p className="font-semibold text-white">{point.tooltipLabel}</p>
      <p className="mt-1 text-xs text-slate-400">
        {t.charts.activity.tooltipPlayers}
      </p>
      <div className="mt-2 space-y-1">
        {payload.map((entry) => (
          <p key={entry.dataKey} className="flex items-center gap-2 text-steam-muted">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
              aria-hidden="true"
            />
            <span className="text-white">{entry.name}:</span>
            <span>{formatNumber(entry.value, locale)}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
