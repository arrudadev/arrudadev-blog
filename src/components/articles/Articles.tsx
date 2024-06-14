import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Icon } from '../icons/Icon'

export const Articles = () => {
  const category = 'Todos'
  const categories = [
    'Todos',
    'react',
    'nextjs',
    'tailwindcss',
    'typescript',
    'javascript',
    'css',
    'html',
    'web-development',
    'productivity',
    'career',
    'personal-growth',
    'interviews',
    'docker',
  ]

  return (
    <section className="max-w-screen-lg container">
      <h3 className="font-bold text-2xl">Artigos</h3>

      <div className="pt-4">
        <h4 className="font-medium text-muted-foreground py-2">Categorias</h4>

        <ul className="flex gap-2 flex-wrap">
          {categories.map((item) => (
            <li key={item}>
              <a
                href={`/`}
                className={cn(
                  'capitalize',
                  category === item ? 'select-none' : '',
                  buttonVariants({
                    variant: item === category ? 'default' : 'outline',
                  }),
                )}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col w-full py-10">
          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>

          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>

          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>

          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>

          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>

          <li className="w-full gap-2 border-b border-t py-6">
            <Link href="/" className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  27 de março de 2024
                </span>

                <span className="font-medium text-muted-foreground flex gap-2 items-center">
                  Ver mais
                  <Icon icon="ArrowRightIcon" className="h-4 w-4" />
                </span>
              </div>

              <h5 className="text-lg font-bold">What is Lorem Ipsum?</h5>

              <Badge radius="md" className="capitalize max-w-fit">
                react
              </Badge>

              <p className="text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
