import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/shared"
import { cn } from "@/lib/utils"

interface BentoCardProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  description: string
  background?: React.ReactNode
  href: string
  cta: string
}

export const BentoCard: React.FC<BentoCardProps> = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden",
      "bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col p-6 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="font-lora text-xl font-semibold text-tertiary">{name}</h3>
      <p className="max-w-lg text-tertiary/75">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="outline" asChild size="md" className="pointer-events-auto">
        <Link href={href}>
          {cta}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
  </div>
)

BentoCard.displayName = "BentoCard"
