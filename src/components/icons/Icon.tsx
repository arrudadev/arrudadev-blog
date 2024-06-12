import * as RadixIcons from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

type IconProps = {
  icon: keyof typeof RadixIcons
  className?: string
}

export const Icon = ({ icon, className }: IconProps) => {
  const IconComponent = RadixIcons[icon]
  return <IconComponent className={cn('w-6 h-6', className)} />
}
