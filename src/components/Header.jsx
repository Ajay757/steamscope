import { BarChart3, LineChart } from 'lucide-react'
import { LanguageSelector } from './LanguageSelector.jsx'

export function Header({ language, onLanguageChange, t }) {
  return (
    <header className="border-b border-steam-border/70 bg-steam-panel/95">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-6 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <h1 className="font-[Avenir_Next] text-4xl font-bold tracking-normal text-white sm:text-5xl">
              SteamScope
            </h1>
            <p className="mt-2 text-xl font-medium text-steam-blue sm:text-2xl">
              {t.dashboardTitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-steam-muted">
              {t.intro}
            </p>
          </div>

          <LanguageSelector
            language={language}
            onLanguageChange={onLanguageChange}
            labels={t.language}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg border border-steam-border/80 bg-steam-deep/70 px-4 py-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-steam-teal/10 text-steam-teal">
              <BarChart3 aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {t.header.popularityTitle}
              </p>
              <p className="text-sm text-steam-muted">
                {t.header.popularityText}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-steam-border/80 bg-steam-deep/70 px-4 py-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-steam-teal/10 text-steam-teal">
              <LineChart aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {t.header.activityTitle}
              </p>
              <p className="text-sm text-steam-muted">{t.header.activityText}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
