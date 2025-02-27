import * as React from "react"

import { cn } from "@/lib/utils"

export function SeparatorSectionBorder({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative h-fit w-full overflow-hidden border-x border-b border-tertiary/10",
        className,
      )}
    >
      {children}
    </div>
  )
}
SeparatorSectionBorder.displayName = "SeparatorSectionBorder"
