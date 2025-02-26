import * as React from "react"

import { cn } from "@/lib/utils"
import { IAvatarGroupProps } from "@/lib/types"

import { Avatar, AvatarFallback } from "@/components/shared"

export const AvatarGroup = ({ children, max, className, ...props }: IAvatarGroupProps) => {
  const totalAvatars = React.Children.count(children)
  const displayedAvatars = React.Children.toArray(children).slice(0, max).reverse()
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0

  return (
    <div className={cn("flex flex-row-reverse items-center", className)} {...props}>
      {remainingAvatars > 0 && (
        <Avatar className="relative -ml-2 ring-2 ring-background hover:z-10">
          <AvatarFallback className="bg-muted-foreground text-white">
            +{remainingAvatars}
          </AvatarFallback>
        </Avatar>
      )}
      {displayedAvatars.map((avatar, index) => {
        if (!React.isValidElement(avatar)) return null

        return (
          <div key={index} className="relative -ml-2 hover:z-10">
            {React.cloneElement(avatar as React.ReactElement<IAvatarGroupProps>, {
              className: "ring-2 ring-tertiary hover:scale-125 duration-200 transition ease-in-out",
            })}
          </div>
        )
      })}
    </div>
  )
}
AvatarGroup.displayName = "AvatarGroup"
