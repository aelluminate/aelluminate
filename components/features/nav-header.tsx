import Image from "next/image"
import Link from "next/link"

import LOGO from "@/public/img/logo.png"

import { Button } from "@/components/shared"
import { NavMenu } from "@/components/ui/navigation-menu"

export function NavHeader() {
  return (
    <div className="w-full border-b border-tertiary/10 p-4">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src={LOGO}
              width={1000}
              height={1000}
              alt="Picture of the author"
              className="h-8 w-8"
            />
          </Link>
          <NavMenu />
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button size="md" variant="outline">
            Explore
          </Button>
          <Button size="md" variant="secondary">
            Talk to us
          </Button>
        </div>
      </div>
    </div>
  )
}
