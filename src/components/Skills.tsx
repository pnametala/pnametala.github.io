import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h4 className="mb-3 text-sm font-medium text-ink-950 dark:text-white">
              {group.category}
            </h4>
            <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
