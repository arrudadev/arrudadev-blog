import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Separator } from '../ui/separator'
import { Brand } from './Brand'
import { menuItems } from './menu-items'
import { Icon } from '../icons/Icon'
import { MenuLink } from './MenuLink'

export const NavigationMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icon icon="HamburgerMenuIcon" />
      </SheetTrigger>

      <SheetContent side={'left'}>
        <SheetHeader>
          <div className="flex items-center justify-center">
            <Brand />
          </div>
        </SheetHeader>

        <Separator className="my-4" />

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <MenuLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
