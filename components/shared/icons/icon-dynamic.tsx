"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import { TIconNameProps } from "@/lib/types"

const icons = Object.keys(dynamicIconImports) as TIconNameProps[]

type ReactComponent = React.FC<{
  className?: string
  size?: number | string
  color?: string
  strokeWidth?: number | string
  style?: React.CSSProperties
}>
const icons_components = {} as Record<TIconNameProps, ReactComponent>

for (const name of icons) {
  const NewIcon = dynamic(dynamicIconImports[name], {
    ssr: false,
  }) as ReactComponent
  icons_components[name] = NewIcon
}

type DynamicIconProps = {
  name: TIconNameProps
  className?: string
  size?: number | string
  color?: string
  strokeWidth?: number | string
  style?: React.CSSProperties
}

export const IconDynamic = React.memo(
  ({ name, className, size, color, strokeWidth, style }: DynamicIconProps) => {
    const Icon = icons_components[name]
    if (!Icon) return null
    return (
      <Icon
        className={className}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        style={style}
      />
    )
  },
)
IconDynamic.displayName = "IconDynamic"
