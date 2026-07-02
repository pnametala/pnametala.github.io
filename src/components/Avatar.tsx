import profilePhoto from '../assets/profile.jpg'

export default function Avatar({ name, size = 96 }: { name: string; size?: number }) {
  return (
    <img
      src={profilePhoto}
      alt={name}
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  )
}
