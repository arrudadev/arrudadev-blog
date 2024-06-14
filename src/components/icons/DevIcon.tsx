import { cn } from '@/lib/utils'
import * as DevIcons from './devicons'

type DevIconProps = {
  icon: keyof typeof DevIcons
  className?: string
}

export const DevIcon = ({ icon, className }: DevIconProps) => {
  const DevIconComponent = DevIcons[icon]
  return <DevIconComponent className={cn('h-8 w-8 rounded-md', className)} />
}
