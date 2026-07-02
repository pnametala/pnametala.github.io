import Section from './Section'
import { achievements, interests } from '../data'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-medium text-ink-950 dark:text-white">
            Achievements
          </h4>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            {achievements.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-neutral-400 dark:text-neutral-600">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium text-ink-950 dark:text-white">
            Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {interests.map((item, i) => (
              <span
                key={i}
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-ink-800 dark:text-neutral-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
