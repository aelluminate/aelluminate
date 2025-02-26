"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { IListAnimatedItemProps, TIconNameProps } from "@/lib/types"
import { shuffleArray } from "@/lib/scripts/suffle-array"
import notifications from "@/data/notifications.json"

import { ListAnimated, IconDynamic } from "@/components/shared"

let initialNotifications: IListAnimatedItemProps[] = notifications
initialNotifications = Array.from({ length: 10 }, () => initialNotifications).flat()

export function NotificationList({ className }: { className?: string }) {
  const [notifications, setNotifications] = React.useState<IListAnimatedItemProps[]>([])

  React.useEffect(() => {
    const shuffledNotifications = shuffleArray(initialNotifications)
    setNotifications(shuffledNotifications)
  }, [])

  return (
    <div
      className={cn("relative flex h-80 w-full flex-col items-center overflow-hidden", className)}
    >
      <ListAnimated>
        {notifications.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-lg p-2",
              "transition-all duration-200 ease-in-out hover:scale-[103%]",
              "bg-primary-foreground/10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-md border border-tertiary/10">
                <IconDynamic name={item.icon as TIconNameProps} className="size-6 text-secondary" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                  <span className="font-mono text-base">{item.name}</span>
                  <span className="mx-1">·</span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </figcaption>
                <p className="-mt-1 text-xs font-normal">{item.description}</p>
              </div>
            </div>
          </figure>
        ))}
      </ListAnimated>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary"></div>
    </div>
  )
}
