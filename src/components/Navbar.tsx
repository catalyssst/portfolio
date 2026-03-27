import { navItems } from '../data/siteData'
import catalystLogo from '../assets/catalist-logo.svg'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-amber-300/30 px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-3 font-heading text-xl font-semibold tracking-[0.16em] text-amber-200">
          <img src={catalystLogo} alt="Catalyst Logo" className="h-8 w-8" />
          <span>CATALYST</span>
        </a>

        <ul className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group relative transition-colors duration-300 hover:text-amber-200"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#projects"
          className="rounded-full border border-amber-300/45 bg-amber-300/12 px-3 py-1.5 text-xs font-semibold text-amber-100 transition-all duration-300 hover:border-amber-200 hover:bg-amber-200/20"
        >
          Explore Work
        </a>
      </nav>
    </header>
  )
}
