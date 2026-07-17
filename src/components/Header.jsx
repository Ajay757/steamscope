import { DataNotice } from './DataNotice.jsx'
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

        <DataNotice t={t} />
      </div>
    </header>
  )
}
