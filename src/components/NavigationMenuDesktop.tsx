'use client'

import Link from 'next/link'
import * as Root from './ui/navigation-menu'
import { HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

export const NavigationMenuDesktop = () => {
  return (
    <Root.NavigationMenu>
      <Root.NavigationMenuList>
        <Root.NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <Root.NavigationMenuLink
              className={cn(
                'flex items-center gap-2',
                Root.navigationMenuTriggerStyle(),
              )}
            >
              <HomeIcon className="h-4 w-4" />
              <span className="text-base">Home</span>
            </Root.NavigationMenuLink>
          </Link>
        </Root.NavigationMenuItem>

        <Root.NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <Root.NavigationMenuLink
              className={cn(
                'flex items-center gap-2',
                Root.navigationMenuTriggerStyle(),
              )}
            >
              <PersonIcon className="h-4 w-4" />
              <span className="text-base">Sobre</span>
            </Root.NavigationMenuLink>
          </Link>
        </Root.NavigationMenuItem>
      </Root.NavigationMenuList>
    </Root.NavigationMenu>
  )
}
