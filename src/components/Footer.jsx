export function Footer({ t }) {
  return (
    <footer className="mt-4 border-t border-steam-border/70 bg-steam-panel/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-steam-muted sm:px-6 lg:px-8">
        <p>{t.dataNotice}</p>
        <p>{t.footerNote}</p>
      </div>
    </footer>
  )
}
