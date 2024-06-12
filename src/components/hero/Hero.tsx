import Link from 'next/link'
import { Icon } from '../icons/Icon'

export const Hero = () => {
  return (
    <section className="max-w-screen-md py-10 container flex items-start  flex-col">
      <h1 className="text-lg md:text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl mb-0">
        Alexandre Arruda
      </h1>

      <p className="mt-1.5 text-sm md:text-lg text-zinc-500 dark:text-zinc-400">
        Engenheiro de software apaixonado por tecnologia, focado em criar
        produtos tecnológicos de alto impacto e sempre em busca de aprimoramento
        contínuo.
      </p>

      <div className="flex space-x-5 pt-4">
        <Link href="https://github.com/arrudadev" target="_blank">
          <Icon icon="GitHubLogoIcon" />
        </Link>

        <Link href="https://www.linkedin.com/in/arrudadev/" target="_blank">
          <Icon icon="LinkedInLogoIcon" />
        </Link>
      </div>
    </section>
  )
}
