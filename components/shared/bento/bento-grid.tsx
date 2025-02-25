import * as React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  className?: string
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3", className)} {...props}>
      {children}
    </div>
  )
}

BentoGrid.displayName = "BentoGrid"
