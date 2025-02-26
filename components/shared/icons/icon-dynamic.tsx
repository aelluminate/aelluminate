"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import { TIconNameProps } from "@/lib/types"

const icons = Object.keys(dynamicIconImports) as TIconNameProps[]

type ReactComponent = React.FC<{ className?: string }>
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
}

export const IconDynamic = React.memo(({ name, ...props }: DynamicIconProps) => {
  const Icon = icons_components[name]
  if (!Icon) return null
  return <Icon {...props} />
})
IconDynamic.displayName = "IconDynamic"
