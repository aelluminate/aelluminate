import Link from "next/link"

export const BusinessesMarquee = ({ name, href }: { name: string; href: string }) => {
  return (
    <div className="group relative h-full w-fit">
      <figure className="relative h-full w-fit cursor-pointer overflow-hidden border-r border-tertiary/10 p-4 text-tertiary/75 hover:text-tertiary lg:p-8">
        <Link href={href} target="_blank">
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <figcaption className="text-sm font-bold">{name}</figcaption>
            </div>
          </div>
        </Link>
      </figure>
    </div>
  )
}
