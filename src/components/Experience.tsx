import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.role + job.org}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-neutral-500 dark:text-neutral-500">
              {job.period}
            </p>
            <div>
              <h4 className="text-base font-medium text-ink-950 dark:text-white">
                {job.role}{' '}
                <span className="font-normal text-neutral-500">· {job.org}</span>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {job.summary}
              </p>
              <p className="mt-2 font-mono text-xs text-neutral-400 dark:text-neutral-600">
                {job.stack}
              </p>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="text-neutral-400 dark:text-neutral-600">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
