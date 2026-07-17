import { BarChart3, CircleDollarSign, Star, Trophy } from 'lucide-react'
import { formatCurrency, formatNumber, formatRating } from './formatters.js'

export function getGameSummary(games) {
  const mostPopular = getMaxBy(games, 'peakPlayers')
  const highestRated = getMaxBy(games, 'rating')
  const averagePrice =
    games.reduce((total, game) => total + game.priceCAD, 0) / games.length

  return {
    gamesAnalyzed: games.length,
    mostPopular,
    highestRated,
    averagePrice,
  }
}

export function buildSummaryCards(games, t, locale) {
  const summary = getGameSummary(games)

  return [
    {
      label: t.stats.gamesAnalyzed,
      value: formatNumber(summary.gamesAnalyzed, locale),
      detail: t.stats.gamesAnalyzedDetail,
      icon: BarChart3,
    },
    {
      label: t.stats.mostPopular,
      value: summary.mostPopular.name,
      detail: t.stats.byPeakPlayers(
        formatNumber(summary.mostPopular.peakPlayers, locale),
      ),
      icon: Trophy,
    },
    {
      label: t.stats.highestRated,
      value: summary.highestRated.name,
      detail: t.stats.ratingDetail(formatRating(summary.highestRated.rating, locale)),
      icon: Star,
    },
    {
      label: t.stats.averagePrice,
      value: formatCurrency(summary.averagePrice, locale),
      detail: t.stats.priceDetail,
      icon: CircleDollarSign,
    },
  ]
}

function getMaxBy(items, key) {
  return items.reduce((leader, item) => (item[key] > leader[key] ? item : leader))
}
