"use client"

import { cn } from "@/lib/utils"
import { ListAnimated } from "@/components/shared"
import { AlertCircle, AlertTriangle, XCircle, XOctagon } from "lucide-react"

interface Item {
  name: string
  description: string
  icon: React.ReactNode
  color: string
  time: string
}

let notifications = [
  {
    name: "Payment processing error",
    description: "Failed to process payment for Order #12345",
    time: "15m ago",
    icon: <XCircle className="text-red-500" />,
    color: "#FF3D71",
  },
  {
    name: "User registration error",
    description: "Error occurred during user registration",
    time: "10m ago",
    icon: <AlertTriangle className="text-yellow-500" />,
    color: "#FFB800",
  },
  {
    name: "Message delivery failed",
    description: "Failed to deliver message to user.",
    time: "5m ago",
    icon: <XOctagon className="text-red-500" />,
    color: "#FF3D71",
  },
  {
    name: "Event creation error",
    description: "Error while creating event 'Annual Meeting'",
    time: "2m ago",
    icon: <AlertCircle className="text-red-500" />,
    color: "#FF3D71",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

export const Notification = ({ name, description, icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-lg p-2",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-primary-foreground/10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex size-10 items-center justify-center rounded-md border border-tertiary/10">
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="font-mono text-base">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="-mt-1 text-xs font-normal">{description}</p>
        </div>
      </div>
    </figure>
  )
}

export function ListNotifications({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative flex h-80 w-full flex-col items-center overflow-hidden", className)}
    >
      <ListAnimated>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </ListAnimated>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary"></div>
    </div>
  )
}
