import * as React from "react"
import Link from "next/link"

import { TextNumberTicker, BackgroundIcons, Button } from "@/components/shared"

// Import the local JSON data
import statistics from "@/data/statistics.json"

export function SectionStatistics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {statistics.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center ${
            index < statistics.length - 1 ? "border-b border-tertiary/10 lg:border-r" : ""
          } px-12 py-4 ${item.icon ? "relative transform-gpu overflow-hidden" : ""}`}
        >
          {item.icon && <BackgroundIcons />}
          <TextNumberTicker
            value={item.value}
            className={`whitespace-pre-wrap font-lora text-6xl font-medium tracking-tighter text-tertiary lg:text-8xl ${item.icon ? "relative z-10" : ""}`}
          />
          <div
            className={`flex flex-col items-center justify-center ${item.icon ? "relative z-10" : ""}`}
          >
            <div className="text-tertiary/75">{item.title}</div>
            <span className="text-sm text-secondary/50">{item.subtitle}</span>
          </div>
          {item.cta && item.href && (
            <Button variant="link" asChild size="md" className="z-10 cursor-pointer">
              <Link href={item.href}>{item.cta}</Link>
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}

SectionStatistics.displayName = "SectionStatistics"
