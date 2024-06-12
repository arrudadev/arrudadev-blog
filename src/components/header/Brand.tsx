import Link from 'next/link'
import { CodeIcon } from '@radix-ui/react-icons'

export const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <CodeIcon className="h-6 w-6" />
      <span className="font-bold text-lg">Arrudadev</span>
    </Link>
  )
}
