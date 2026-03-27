import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-amber-300/25 bg-slate-900/55 p-6 backdrop-blur-md transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-amber-200/70 hover:shadow-[0_0_34px_rgba(180,83,9,0.3)]">
      <h3 className="font-heading text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-3 text-sm text-slate-300">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-amber-300/35 bg-amber-400/12 px-3 py-1 text-xs font-semibold text-amber-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
