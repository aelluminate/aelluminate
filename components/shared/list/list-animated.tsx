"use client"

import * as React from "react"
import { AnimatePresence } from "motion/react"

import { cn } from "@/lib/utils"

import { ListAnimatedItem } from "@/components/shared"

export interface ListAnimatedProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const ListAnimated = React.memo(
  ({ children, className, delay = 1000, ...props }: ListAnimatedProps) => {
    const [index, setIndex] = React.useState(0)
    const childrenArray = React.useMemo(() => React.Children.toArray(children), [children])

    React.useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
        }, delay)

        return () => clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = React.useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse()
      return result
    }, [index, childrenArray])

    return (
      <div className={cn(`flex flex-col items-center gap-2`, className)} {...props}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <ListAnimatedItem key={(item as React.ReactElement).key}>{item}</ListAnimatedItem>
          ))}
        </AnimatePresence>
      </div>
    )
  },
)

ListAnimated.displayName = "ListAnimated"
