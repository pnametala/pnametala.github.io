import type { ReactNode } from 'react'

export default function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-content px-6 py-14 scroll-mt-20">
      <h3 className="mb-8 font-mono text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
        {title}
      </h3>
      {children}
    </section>
  )
}
