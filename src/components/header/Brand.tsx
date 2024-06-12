import Link from 'next/link'
import { Icon } from '../icons/Icon'

export const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Icon icon="CodeIcon" />
      <h2 className="font-bold text-lg">Arrudadev</h2>
    </Link>
  )
}
