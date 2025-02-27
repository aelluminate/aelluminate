import * as React from "react"

import { BackgroundFlickeringGrid } from "@/components/shared"

export function SeparatorSectionText({ text }: { text: string }) {
  return (
    <>
      <div className="relative z-20 flex w-full flex-col items-center justify-center font-bold uppercase text-tertiary">
        {text}
      </div>
      <BackgroundFlickeringGrid
        className="absolute inset-0 z-10 size-full"
        squareSize={4}
        gridGap={6}
        color="#fff2af"
        maxOpacity={0.4}
        flickerChance={0.2}
      />
    </>
  )
}

SeparatorSectionText.displayName = "SeparatorSectionText"
