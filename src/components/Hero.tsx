import { profile } from '../data'
import Avatar from './Avatar'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24">
      <div className="flex items-center gap-5">
        <Avatar name={profile.name} />
        <div>
          <p className="mb-2 font-mono text-sm text-neutral-500 dark:text-neutral-500">
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>
          <h2 className="mt-2 text-xl text-neutral-600 dark:text-neutral-400">
            {profile.title}
          </h2>
        </div>
      </div>
      <p className="mt-6 max-w-xl text-balance text-neutral-600 dark:text-neutral-400">
        {profile.tagline}
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-ink-950 px-4 py-2 font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-ink-950"
        >
          Get in touch
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
    </section>
  )
}
