import * as RadixIcons from '@radix-ui/react-icons'

export type MenuItem = {
  icon: keyof typeof RadixIcons
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  {
    icon: 'HomeIcon',
    label: 'Home',
    href: '/',
  },
  {
    icon: 'PersonIcon',
    label: 'Sobre',
    href: '/about',
  },
]
