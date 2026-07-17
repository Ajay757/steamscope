import { useId, useMemo, useState } from 'react'
import { BarChart3 } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  AVERAGE_PERIOD_OPTIONS,
  GENRE_FILTERS,
  METRIC_OPTIONS,
  getPopularGamesChartData,
} from '../utils/chartData.js'
import { formatCompactNumber, formatNumber } from '../utils/formatters.js'

const chartColors = {
  bar: '#2f89c5',
  highlight: '#66c0f4',
  grid: '#27405f',
  muted: '#9db3c7',
  text: '#f8fafc',
}

export function PopularGamesChart({ games, locale, t }) {
  const titleId = useId()
  const descriptionId = useId()
  const chartSummaryId = useId()
  const [genre, setGenre] = useState('all')
  const [metric, setMetric] = useState('peakPlayers')
  const [averagePeriod, setAveragePeriod] = useState('yearly')

  const chartData = useMemo(
    () => getPopularGamesChartData(games, { genre, metric, averagePeriod }),
    [games, genre, metric, averagePeriod],
  )

  const metricLabel =
    metric === 'averagePlayers'
      ? t.filters.averageMetricLabel(t.filters.averagePeriods[averagePeriod])
      : t.filters.peakMetricLabel
  const metricContext =
    metric === 'averagePlayers'
      ? t.charts.popular.metricContext.averagePlayers[averagePeriod]
      : t.charts.popular.metricContext.peakPlayers

  return (
    <article
      className="rounded-lg border border-steam-border/80 bg-steam-panel p-5 shadow-xl shadow-black/10 sm:p-6"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-steam-teal/10 text-steam-teal">
              <BarChart3 aria-hidden="true" size={21} />
            </span>
            <h2 id={titleId} className="text-xl font-semibold text-white">
              {t.charts.popular.title}
            </h2>
          </div>
          <p id={descriptionId} className="mt-3 text-sm text-steam-muted">
            {t.charts.popular.description}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-steam-muted">
            {t.filters.genre}
          </span>
          <select
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="min-h-11 rounded-lg border border-steam-border bg-steam-deep px-3 text-sm text-white outline-none transition focus-visible:border-steam-blue focus-visible:ring-2 focus-visible:ring-steam-blue/40"
          >
            {GENRE_FILTERS.map((option) => (
              <option key={option} value={option}>
                {t.filters.genres[option]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-steam-muted">
            {t.filters.metric}
          </span>
          <select
            value={metric}
            onChange={(event) => setMetric(event.target.value)}
            className="min-h-11 rounded-lg border border-steam-border bg-steam-deep px-3 text-sm text-white outline-none transition focus-visible:border-steam-blue focus-visible:ring-2 focus-visible:ring-steam-blue/40"
          >
            {METRIC_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {t.filters.metrics[option]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-steam-muted">
            {t.filters.timeFrame}
          </span>
          {metric === 'averagePlayers' ? (
            <select
              value={averagePeriod}
              onChange={(event) => setAveragePeriod(event.target.value)}
              className="min-h-11 rounded-lg border border-steam-border bg-steam-deep px-3 text-sm text-white outline-none transition focus-visible:border-steam-blue focus-visible:ring-2 focus-visible:ring-steam-blue/40"
            >
              {AVERAGE_PERIOD_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {t.filters.averagePeriods[option]}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex min-h-11 items-center rounded-lg border border-steam-border/70 bg-steam-card/70 px-3 text-sm font-medium text-steam-muted">
              {t.filters.allTime}
            </div>
          )}
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-steam-border/70 bg-steam-deep/70 p-3 sm:p-4">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white">
            {t.charts.popular.topGamesLabel}
          </p>
          <p className="text-xs text-steam-muted">{metricLabel}</p>
        </div>

        {chartData.length > 0 ? (
          <div
            className="h-96 w-full"
            role="img"
            aria-label={t.charts.popular.ariaLabel}
            aria-describedby={chartSummaryId}
          >
            <p className="sr-only" id={chartSummaryId}>
              {t.charts.popular.screenReaderSummary(metricLabel)}
            </p>
            <div className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 8, right: 16, bottom: 16, left: 8 }}
                  barCategoryGap={10}
                >
                  <CartesianGrid
                    horizontal={false}
                    stroke={chartColors.grid}
                    strokeDasharray="3 3"
                    opacity={0.45}
                  />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => formatCompactNumber(value, locale)}
                    stroke={chartColors.muted}
                    tick={{ fill: chartColors.muted, fontSize: 12 }}
                    axisLine={{ stroke: chartColors.grid }}
                    tickLine={false}
                    label={{
                      value: metricLabel,
                      position: 'insideBottom',
                      offset: -10,
                      fill: chartColors.muted,
                      fontSize: 12,
                    }}
                  />
                  <YAxis
                  type="category"
                  dataKey="name"
                  width={96}
                  interval={0}
                  stroke={chartColors.muted}
                  tick={{ fill: chartColors.text, fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(102, 192, 244, 0.08)' }}
                    content={
                      <PopularGamesTooltip
                        locale={locale}
                        metricLabel={metricLabel}
                        t={t}
                      />
                    }
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {chartData.map((game, index) => (
                      <Cell
                        key={game.id}
                        fill={index === 0 ? chartColors.highlight : chartColors.bar}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="grid min-h-72 place-items-center px-6 text-center">
            <p className="text-sm font-medium text-steam-muted">
              {t.charts.popular.emptyState}
            </p>
          </div>
        )}

        <details
          open
          className="mt-4 rounded-lg border border-steam-blue/20 bg-steam-blue/10"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-steam-blue marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steam-teal">
            <span>{metricContext.title}</span>
            <span className="text-lg leading-none" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="border-t border-steam-blue/20 px-4 pb-4 pt-3 text-sm leading-6 text-steam-muted">
            {metricContext.description}
          </p>
        </details>
      </div>
    </article>
  )
}

function PopularGamesTooltip({ active, payload, locale, metricLabel, t }) {
  if (!active || !payload?.length) {
    return null
  }

  const game = payload[0].payload

  return (
    <div className="rounded-lg border border-steam-border bg-steam-card px-4 py-3 text-sm shadow-xl shadow-black/30">
      <p className="font-semibold text-white">{game.name}</p>
      <p className="mt-1 text-steam-muted">
        {metricLabel}: {formatNumber(game.value, locale)}
      </p>
      <p className="mt-1 text-xs text-slate-400">
        {t.filters.genre}: {t.filters.genres[game.genre]}
      </p>
    </div>
  )
}
