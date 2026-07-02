const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export default function Avatar({ name, size = 96 }: { name: string; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full bg-ink-950 font-mono font-medium text-white dark:bg-white dark:text-ink-950"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials(name)}
    </div>
  )
}
