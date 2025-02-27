"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import { IconDynamic } from "@/components/shared"
import { TIconNameProps } from "@/lib/types"

interface BackgroundPawPrintProps {
  className?: string
  iconName?: TIconNameProps
  iconCount?: number
}

const defaultIconName: TIconNameProps = "paw-print"

export function BackgroundIcons({
  className,
  iconName = defaultIconName,
  iconCount = 200,
}: BackgroundPawPrintProps) {
  return (
    <div className={cn("absolute inset-0 -m-4", "overflow-hidden", className)}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-radial-gradient(
            circle at 50% 50%,
            theme('colors.secondary/20') 0,
            theme('colors.secondary/20') 6px,
            transparent 6px,
            transparent 12px
          ), repeating-conic-gradient(
            theme('colors.secondary/10') 0%,
            theme('colors.secondary/10') 25%,
            transparent 25%,
            transparent 50%,
            theme('colors.secondary/10') 50%,
            theme('colors.secondary/10') 75%,
            transparent 75%,
            transparent 100%
          )`,
        }}
      ></div>
      <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-20">
        {Array.from({ length: iconCount }, (_, index) => {
          const randomSize = Math.random() > 0.5 ? 32 : 20
          return (
            <IconDynamic
              key={index}
              name={iconName}
              size={randomSize}
              className="p-1 text-secondary/15"
            />
          )
        })}
      </div>
    </div>
  )
}

BackgroundIcons.displayName = "BackgroundIcons"
