import type { Metadata } from "next"

import "@/assets/css/globals.css"
import { lora } from "@/lib/fonts"
import { metadata as SiteData } from "@/lib/metadata"

export const metadata: Metadata = SiteData

import { NavHeader } from "@/components/features/nav-header"
import { Footer } from "@/components/ui/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.className}`}>
      <body className="h-full w-full bg-primary font-writer tracking-tight text-tertiary antialiased">
        <NavHeader />
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
