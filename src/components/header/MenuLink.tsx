'use client'

import Link from 'next/link'
import { MenuItem } from './menu-items'
import { cn } from '@/lib/utils'
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Icon } from '../icons/Icon'

type MenuLinkProps = MenuItem

export const MenuLink = ({ href, icon, label }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}
    >
      <Icon icon={icon} className="h-4 w-4" />
      <span className="text-base">{label}</span>
    </Link>
  )
}
