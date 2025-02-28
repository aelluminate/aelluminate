"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

export const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-tertiary/75", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName
