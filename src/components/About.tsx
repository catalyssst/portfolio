import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="px-4 py-8 md:px-8 md:py-10">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl border border-amber-300/30 p-7 md:p-10">
          <p className="section-kicker">About Catalyst</p>
          <h2 className="font-heading mt-4 text-2xl font-semibold text-white md:text-4xl">
            Modern engineering team with an innovation-first mindset.
          </h2>

          <div className="mt-6 grid gap-5 text-slate-300 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-300/10 bg-white/5 p-5 backdrop-blur-md">
              <h3 className="mb-2 font-heading text-lg text-amber-200">Vision</h3>
              <p>
                Menjadi tim teknologi yang mempercepat transformasi digital bisnis melalui solusi
                yang adaptif dan berkelanjutan.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-300/10 bg-white/5 p-5 backdrop-blur-md">
              <h3 className="mb-2 font-heading text-lg text-amber-200">Mission</h3>
              <p>
                Membangun aplikasi web berkualitas tinggi dengan pendekatan engineering yang
                rapi, kolaboratif, dan berorientasi dampak.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-300/10 bg-white/5 p-5 backdrop-blur-md">
              <h3 className="mb-2 font-heading text-lg text-amber-200">Focus</h3>
              <p>
                Web development, scalable systems, automation pipeline, dan arsitektur modern
                untuk pertumbuhan produk jangka panjang.
              </p>
            </article>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
