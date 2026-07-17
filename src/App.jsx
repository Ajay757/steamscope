import { useEffect, useMemo, useState } from 'react'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { PlayerActivityChart } from './components/PlayerActivityChart.jsx'
import { PopularGamesChart } from './components/PopularGamesChart.jsx'
import { StatCard } from './components/StatCard.jsx'
import { games } from './data/games.js'
import { translations } from './translations/translations.js'
import { buildSummaryCards } from './utils/summaryStats.js'

function App() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]
  const locale = language === 'fr' ? 'fr-CA' : 'en-CA'

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const stats = useMemo(() => buildSummaryCards(games, t, locale), [locale, t])

  return (
    <div className="min-h-screen bg-steam-deep text-slate-100">
      <Header language={language} onLanguageChange={setLanguage} t={t} />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section
          aria-label={t.stats.sectionLabel}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <PopularGamesChart games={games} locale={locale} t={t} />
          <PlayerActivityChart games={games} locale={locale} t={t} />
        </section>
      </main>

      <Footer t={t} />
    </div>
  )
}

export default App
