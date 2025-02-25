import { cva } from "class-variance-authority"

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-sm p-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
)
