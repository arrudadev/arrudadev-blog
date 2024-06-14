import { DevIcon } from '@/components/icons/DevIcon'
import { Icon } from '@/components/icons/Icon'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="max-w-screen-lg py-10 container flex items-start flex-col">
      <div className="flex items-center justify-center flex-col w-full">
        <Image
          src="/alexandre-arruda.webp"
          width={128}
          height={128}
          alt="Foto de Alexandre Arruda"
          className="rounded-full"
        />

        <h1 className="text-lg md:text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl mt-4">
          Alexandre Arruda
        </h1>

        <span className="font-medium text-muted-foreground">
          Software Engineer
        </span>

        <div className="flex space-x-5 pt-4">
          <Link href="https://github.com/arrudadev" target="_blank">
            <Icon icon="GitHubLogoIcon" />
          </Link>

          <Link href="https://www.linkedin.com/in/arrudadev/" target="_blank">
            <Icon icon="LinkedInLogoIcon" />
          </Link>
        </div>
      </div>

      <p className="text-center mt-4">
        Engenheiro de Software com 6 anos de experiência, especializado em
        soluções front-end. Tenho vasto conhecimento em tecnologias como
        Javascript, TypeScript, React, Vue e Svelte, dedicando-me a criar
        interfaces ricas e responsivas. Embora meu foco principal seja o
        front-end, possuo experiência sólida em back-end com Node.js, Java e Go
        lang, desenvolvendo sistemas robustos e escaláveis, baseados em
        micro-serviços.
      </p>

      <Separator className="mt-10" />

      <div className="flex flex-col mt-10">
        <h3 className="font-bold text-2xl">Habilidades</h3>
        <span className="font-medium text-sm text-muted-foreground">
          Tecnologias e ferramentas que já trabalhei
        </span>

        <div className="flex gap-4 flex-wrap mt-4">
          <DevIcon icon="JavascriptIcon" />
          <DevIcon icon="TypescriptIcon" />
        </div>
      </div>

      <div className="flex flex-col mt-10 w-full">
        <h3 className="font-bold text-2xl">Experiências</h3>
        <span className="font-medium text-sm text-muted-foreground">
          Empresas que já trabalhei
        </span>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="https://www.reclameaqui.com.br/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src="/reclame-aqui-logo.webp"
                  width={32}
                  height={32}
                  alt="Logo do Reclame Aqui"
                  className="rounded-md"
                />

                <span className="font-bold text-xl">
                  Reclame Aqui - Software Engineer
                </span>
              </Link>

              <span className="font-medium text-muted-foreground text-sm">
                nov 2023 – Momento • 7 meses
              </span>
            </div>

            <ul className="list-disc pl-5 mt-4">
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
            </ul>
          </div>

          <Separator />

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="https://www.reclameaqui.com.br/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src="/reclame-aqui-logo.webp"
                  width={32}
                  height={32}
                  alt="Logo do Reclame Aqui"
                  className="rounded-md"
                />

                <span className="font-bold text-xl">
                  Reclame Aqui - Software Engineer
                </span>
              </Link>

              <span className="font-medium text-muted-foreground text-sm">
                nov 2023 – Momento • 7 meses
              </span>
            </div>

            <ul className="list-disc pl-5 mt-4">
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
              <li className="font-medium text-base">
                Desenvolvimento de interfaces responsivas e ricas em React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
