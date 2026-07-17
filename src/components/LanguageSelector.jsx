export function LanguageSelector({ language, onLanguageChange, labels }) {
  const options = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ]

  return (
    <div className="flex flex-col gap-2" role="group" aria-label={labels.selectorLabel}>
      <span className="text-sm font-medium text-steam-muted">
        {labels.selectorLabel}
      </span>
      <div className="inline-flex rounded-lg border border-steam-border bg-steam-deep p-1">
        {options.map((option) => {
          const isActive = language === option.value

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onLanguageChange(option.value)}
              className={`min-h-11 rounded-md px-4 text-sm font-semibold transition ${
                isActive
                  ? 'bg-steam-blue text-steam-deep'
                  : 'text-steam-muted hover:bg-steam-card hover:text-white focus:bg-steam-card focus:text-white'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steam-teal`}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
