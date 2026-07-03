import './Badge.css'

interface BadgeProps {
  label: string
  type?: 'flagship' | 'marathon' | 'course'
}

export function Badge({ label, type = 'marathon' }: BadgeProps) {
  return <span className={`badge badge--${type}`}>{label}</span>
}
