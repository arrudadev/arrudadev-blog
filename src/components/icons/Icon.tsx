import * as RadixIcons from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

type IconProps = {
  icon: keyof typeof RadixIcons
  className?: string
}

export const Icon = ({ icon, className }: IconProps) => {
  const IconComponent = RadixIcons[icon]
  return <IconComponent className={cn('h-5 w-5', className)} />
}
