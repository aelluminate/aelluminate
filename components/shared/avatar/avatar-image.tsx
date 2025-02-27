"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "duration-600 aspect-square h-full w-full grayscale transition ease-in-out hover:grayscale-0",
      className,
    )}
    {...props}
    loading="lazy"
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
