import Section from './Section'
import { profile } from '../data'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-md text-neutral-600 dark:text-neutral-400">
        Open to freelance and contract engagements — architecture, full-stack
        delivery, and engineering leadership. Reach out by email or connect on
        GitHub.
      </p>
      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-ink-950 px-4 py-2 font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-ink-950"
        >
          Email me
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-neutral-300 px-4 py-2 font-medium text-ink-950 transition-colors hover:border-neutral-400 dark:border-ink-800 dark:text-white dark:hover:border-neutral-600"
        >
          GitHub
        </a>
      </div>
    </Section>
  )
}
