export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-ink-800">
      <div className="mx-auto max-w-content px-6 text-sm text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Pedro Nametala. Built with React, TypeScript
        &amp; Tailwind CSS.
      </div>
    </footer>
  )
}
