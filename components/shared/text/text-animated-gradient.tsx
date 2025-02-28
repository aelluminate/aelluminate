import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnimatedGradientTextProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
}

export const TextAnimatedGradient = React.forwardRef<HTMLDivElement, AnimatedGradientTextProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-primary px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
      {...props}
    >
      <div
        className={`animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-tertiary via-secondary to-secondary bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />
      {children}
    </div>
  ),
)

TextAnimatedGradient.displayName = "TextAnimatedGradient"
