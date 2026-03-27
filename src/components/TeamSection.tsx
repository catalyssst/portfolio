import { members } from '../data/siteData'
import Reveal from './Reveal'
import TeamCard from './TeamCard'

export default function TeamSection() {
  return (
    <section id="team" className="px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div>
            <p className="section-kicker">Core Members</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold text-white md:text-4xl">
              People behind Catalyst engineering execution.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.id} delayMs={index * 120}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
