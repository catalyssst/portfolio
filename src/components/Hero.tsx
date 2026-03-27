import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="relative px-4 pb-18 pt-16 md:px-8 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-4 -z-10 mx-auto h-64 w-72 rounded-full bg-amber-400/30 blur-3xl md:h-80 md:w-[30rem]" />

      <Reveal className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-3xl border border-amber-300/30 p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/22 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-orange-700/26 blur-3xl" />

          <p className="mb-4 inline-flex rounded-full border border-amber-300/35 bg-amber-300/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
            Digital Transformation Team
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
            Catalyst
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-300 md:text-lg">
            We engineer future-ready digital products through innovation, scalable architecture, and
            purposeful technology execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#team"
              className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-[#1d1406] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.55)]"
            >
              Meet the Team
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300/30 px-5 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-amber-300/70 hover:text-amber-100"
            >
              View Projects
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
