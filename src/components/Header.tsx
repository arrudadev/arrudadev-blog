import Link from 'next/link'

import { CodeIcon, GitHubLogoIcon, SunIcon } from '@radix-ui/react-icons'
import { NavigationMenuDesktop } from './NavigationMenuDesktop'
import { NavigationMenuMobile } from './NavigationMenuMobile'

export const Header = () => {
  return (
    <header className="flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background border-b">
      <div className="relative container flex items-center justify-between w-full">
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span className="font-bold text-lg">Arrudadev</span>
          </Link>

          <div className="hidden md:flex">
            <NavigationMenuDesktop />
          </div>
        </div>

        <div className="flex md:hidden">
          <NavigationMenuMobile />
        </div>

        <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4">
          <CodeIcon className="h-8 w-8" />
        </div>

        <div className="flex items-center gap-x-4">
          <Link href="#" target="_blank">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>

          <SunIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  )
}
