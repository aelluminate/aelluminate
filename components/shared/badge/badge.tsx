import * as React from "react"

import { cn } from "@/lib/utils"
import { IBadgeProps } from "@/lib/types"
import { badgeVariants } from "@/components/utils/variants"

export function Badge({ className, variant, ...props }: IBadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
