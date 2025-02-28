"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2", className)} {...props} />
)
SheetHeader.displayName = "SheetHeader"
