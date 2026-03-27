import { projects } from '../data/siteData'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div>
            <p className="section-kicker">Project Portfolio</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold text-white md:text-4xl">
              Delivery track record from each Catalyst member.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
