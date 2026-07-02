import Section from './Section'
import { coreStrengths, profile } from '../data'

export default function About() {
  return (
    <Section id="about" title="About">
      <h4 className="mb-3 text-sm font-medium text-ink-950 dark:text-white">
        Core Strengths
      </h4>
      <div className="flex flex-wrap gap-2">
        {coreStrengths.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-ink-800 dark:text-neutral-400"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
        {profile.languages}
      </p>
    </Section>
  )
}
