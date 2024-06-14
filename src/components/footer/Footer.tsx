import Link from 'next/link'
import { Icon } from '../icons/Icon'

export const Footer = () => {
  return (
    <footer className="border-t py-4">
      <div className="container flex items-center justify-between max-w-screen-lg">
        <Icon icon="CodeIcon" />

        <p className="text-left text-sm text-muted-foreground flex items-center gap-1">
          <span className="font-medium">Built by</span>

          <Link
            href="https://www.linkedin.com/in/arrudadev/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Alexandre Arruda
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <Link href="https://www.linkedin.com/in/arrudadev/" target="_blank">
            <Icon icon="LinkedInLogoIcon" />
          </Link>

          <Link href="https://github.com/arrudadev" target="_blank">
            <Icon icon="GitHubLogoIcon" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
