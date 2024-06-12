import Link from 'next/link'

import { NavigationMenuDesktop } from './NavigationMenuDesktop'
import { NavigationMenuMobile } from './NavigationMenuMobile'
import { Brand } from './Brand'
import { Icon } from '../icons/Icon'

export const Header = () => {
  return (
    <header className="flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background border-b">
      <div className="relative container flex items-center justify-between w-full">
        <div className="hidden md:flex items-center gap-4">
          <Brand />
          <NavigationMenuDesktop />
        </div>

        <div className="md:hidden">
          <NavigationMenuMobile />
        </div>

        <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4">
          <Icon icon="CodeIcon" className="h-8 w-8" />
        </div>

        <div className="flex items-center gap-x-4">
          <Link href="#" target="_blank">
            <Icon icon="GitHubLogoIcon" />
          </Link>

          <Icon icon="SunIcon" />
        </div>
      </div>
    </header>
  )
}
