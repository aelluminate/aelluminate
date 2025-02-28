import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { INavMenuListItemProps } from "@/lib/types"

import { NavigationMenuLink } from "@/components/shared"

export const NavMenuListItem = ({
  className,
  title,
  children,
  href,
  icon: Icon,
  logo,
}: INavMenuListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "flex select-none flex-col items-start justify-center space-y-1 rounded-sm p-2 leading-none text-tertiary no-underline outline-none transition-colors hover:bg-primary-foreground/10 focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          href={href}
          prefetch
        >
          <div className="flex items-center gap-2">
            {logo ? (
              <Image
                src={logo}
                width={1000}
                height={1000}
                alt="logo"
                className="h-6 w-6 rounded-sm"
              />
            ) : Icon ? (
              <Icon className="h-4 w-4" />
            ) : null}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-tertiary/75">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
NavMenuListItem.displayName = "NavMenuListItem"
