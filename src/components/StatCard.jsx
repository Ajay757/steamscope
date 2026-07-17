export function StatCard({ label, value, detail, icon: Icon }) {
  return (
    <article className="rounded-lg border border-steam-border/80 bg-steam-card p-5 shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-steam-muted">{label}</p>
          <p className="mt-3 break-words text-2xl font-semibold leading-tight text-white">
            {value}
          </p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-steam-blue/10 text-steam-blue">
          <Icon aria-hidden="true" size={22} />
        </span>
      </div>
      <p className="mt-4 text-sm text-steam-muted">{detail}</p>
    </article>
  )
}
