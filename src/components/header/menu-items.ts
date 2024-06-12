import * as RadixIcons from '@radix-ui/react-icons'

export type MenuItem = {
  icon: keyof typeof RadixIcons
  label: string
}

export const menuItems: MenuItem[] = [
  {
    icon: 'HomeIcon',
    label: 'Home',
  },
  {
    icon: 'PersonIcon',
    label: 'Sobre',
  },
]
