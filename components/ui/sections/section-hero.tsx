import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/shared"
import { NotificationList } from "@/components/ui/notification-list"

export function SectionHero() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        <div className="font-lora text-4xl lg:text-6xl">
          Stop <span className="text-secondary">patching</span> problems, start{" "}
          <span className="text-secondary">building</span> solutions.
        </div>
        <span className="max-w-lg text-sm text-tertiary/75 lg:text-base">
          We&apos;re a small but mighty team building awesome stuff with tech and turn &quot;what
          ifs&quot; into &quot;here it is!&quot;
        </span>
        <div className="mt-auto flex flex-row items-center gap-2">
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
      <div className="hidden w-full lg:block">
        <NotificationList />
      </div>
    </>
  )
}
SectionHero.displayName = "SectionHero"
