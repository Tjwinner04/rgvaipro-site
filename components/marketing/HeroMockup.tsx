export function HeroMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-md select-none rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 ring-1 ring-slate-900/5 lg:max-w-lg"
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 flex-1 rounded-md bg-slate-100 px-2 py-1 text-center text-[10px] font-medium text-slate-500">
          yourbusiness.com
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-slate-900 p-3 text-white">
            <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">Leads</p>
            <p className="mt-1 text-lg font-semibold">+24%</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Speed</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">Fast</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Uptime</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">99.9%</p>
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="h-2 w-1/3 rounded-full bg-slate-200" />
          <div className="mt-3 space-y-2">
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 w-5/6 rounded-full bg-slate-200" />
            <div className="h-2 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
          <div className="h-24 flex-1 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
        </div>
      </div>
    </div>
  );
}
