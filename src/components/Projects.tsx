import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-300 dark:border-ink-800 dark:hover:border-ink-800/50"
          >
            <h4 className="text-base font-medium text-ink-950 dark:text-white">
              {project.name}
            </h4>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-xs text-neutral-600 dark:bg-ink-900 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
