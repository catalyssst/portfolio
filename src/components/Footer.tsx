import Reveal from './Reveal'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
]

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-10 pt-6 md:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-300/30 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-lg text-white">Catalyst Team</p>
            <p className="text-sm text-slate-300">
              Building future-ready digital products with precision and speed.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300/25 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-amber-300/70 hover:text-amber-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
