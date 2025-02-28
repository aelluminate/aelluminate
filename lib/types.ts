import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

import { LucideIcon, LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import { type VariantProps } from "class-variance-authority"

import { badgeVariants, buttonVariants, sheetVariants } from "@/components/utils/variants"
import { Avatar } from "@/components/shared"

/**
 * Sheet
 */
export interface ISheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}
/**
 * Navigation Menu
 */
export interface INavMenuListItemProps {
  title: string
  href: string
  children?: React.ReactNode
  className?: string
  icon?: LucideIcon
  logo?: string
}
/**
 * Icon
 */
export type TIconNameProps = keyof typeof dynamicIconImports
/**
 * Button
 */
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export type IBadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
/**
 * List
 */
export interface IListAnimatedItemProps {
  name: string
  description: string
  icon: LucideProps["name"]
  time: string
}
/**
 * Avatar
 */
type TAvatarProps = React.ComponentProps<typeof Avatar>

export interface IAvatarGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactElement<TAvatarProps>[]
  max?: number
}
