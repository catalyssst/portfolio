import type { TeamMember } from '../types'

type TeamCardProps = {
  member: TeamMember
  delayMs?: number
}

export default function TeamCard({ member, delayMs = 0 }: TeamCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-amber-300/25 bg-slate-900/55 p-6 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-amber-200/70 hover:shadow-[0_0_30px_rgba(217,119,6,0.25)]"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/12 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

      <div className="relative mb-4 overflow-hidden rounded-xl border border-amber-300/30 bg-gradient-to-b from-amber-200/10 via-black/45 to-black/60">
        <img
          src={member.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-md"
        />
        <div className="relative flex h-56 items-center justify-center p-4">
          <img
            src={member.image}
            alt={`Foto ${member.name}`}
            className="max-h-full w-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-transform duration-400 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">{member.role}</p>
      <h3 className="font-heading mt-2 text-2xl text-white">{member.name}</h3>
      <p className="mt-3 text-sm text-slate-300">{member.shortBio}</p>
      <p className="mt-4 border-l-2 border-amber-300/45 pl-3 text-sm text-slate-400">{member.focus}</p>
    </article>
  )
}
