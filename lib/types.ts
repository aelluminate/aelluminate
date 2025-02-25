import * as React from "react"

import { LucideIcon } from "lucide-react"
import { type VariantProps } from "class-variance-authority"

import { badgeVariants, buttonVariants } from "@/components/utils/variants"

export interface INavMenuListItemProps {
  title: string
  href: string
  children?: React.ReactNode
  className?: string
  icon?: LucideIcon
  logo?: string
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export type IBadgeProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
