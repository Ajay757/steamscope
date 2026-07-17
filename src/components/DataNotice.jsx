import { Info } from 'lucide-react'

export function DataNotice({ t }) {
  return (
    <section
      className="rounded-lg border border-steam-blue/30 bg-steam-blue/10 px-4 py-3 text-sm text-steam-muted"
      aria-label={t.dataNoticeTitle}
    >
      <div className="flex gap-3">
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-steam-blue/10 text-steam-blue">
          <Info aria-hidden="true" size={18} />
        </span>
        <div>
          <p className="font-semibold text-white">{t.dataNoticeTitle}</p>
          <p className="mt-1 leading-6">{t.dataNotice}</p>
        </div>
      </div>
    </section>
  )
}
