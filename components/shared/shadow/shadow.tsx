import * as React from "react"

import { cn } from "@/lib/utils"

interface ShadowProps {
  className?: string
  position?: "left" | "right" | "bottom"
}

export function Shadow({ className, position = "bottom" }: ShadowProps) {
  let horizontalPositionClass = ""
  let backgroundGradientClass = ""

  switch (position) {
    case "right":
      horizontalPositionClass = "right-0"
      backgroundGradientClass = "inset-y-0 bg-gradient-to-l from-primary"
      break
    case "left":
      horizontalPositionClass = "left-0"
      backgroundGradientClass = "inset-y-0 bg-gradient-to-r from-primary"
      break
    default:
      horizontalPositionClass = "bottom-0"
      backgroundGradientClass = "inset-x-0 bg-gradient-to-t from-primary"
      break
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        horizontalPositionClass,
        backgroundGradientClass,
        className,
      )}
    ></div>
  )
}

Shadow.displayName = "Shadow"
