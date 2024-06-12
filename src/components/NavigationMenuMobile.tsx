'use client'

import {
  CodeIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import * as Root from './ui/navigation-menu'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { cn } from '@/lib/utils'

export const NavigationMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="w-5 h-5" />
      </SheetTrigger>

      <SheetContent side={'left'}>
        <SheetHeader>
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2">
              <CodeIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Arrudadev</span>
            </Link>
          </div>
        </SheetHeader>

        <Separator className="my-4" />

        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2',
              Root.navigationMenuTriggerStyle(),
            )}
          >
            <HomeIcon className="h-4 w-4" />
            <span className="text-base">Home</span>
          </Link>

          <Link
            href="/"
            className={cn(
              'flex items-center gap-2',
              Root.navigationMenuTriggerStyle(),
            )}
          >
            <PersonIcon className="h-4 w-4" />
            <span className="text-base">Sobre</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
