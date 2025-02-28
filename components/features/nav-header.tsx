import Image from "next/image"
import Link from "next/link"

import LOGO from "@/public/img/logo.png"

import { Button } from "@/components/shared"
import { NavMenu } from "@/components/ui/navigation-menu"

export function NavHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-tertiary/10 bg-primary">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src={LOGO}
              width={1000}
              height={1000}
              alt="Picture of the author"
              className="h-6 w-6"
              loading="lazy"
            />
          </Link>
          <NavMenu />
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button size="md" variant="outline">
            <Link href="/projects">Explore</Link>
          </Button>
          <Button size="md" variant="secondary">
            <Link href={`https://calendar.app.google/rjRxmjGvqNfEqBc99`} target="_blank">
              Talk to us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
