import type { Metadata } from "next"

import "@/assets/css/globals.css"
import { lora } from "@/lib/fonts"
import { metadata as SiteData } from "@/lib/metadata"

export const metadata: Metadata = SiteData

import { NavHeader } from "@/components/features/nav-header"
import { NavHeaderMobile } from "@/components/features/nav-header-mobile"
import { Footer } from "@/components/ui/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.className}`}>
      <body className="flex h-screen w-full flex-col bg-primary font-writer tracking-tight text-tertiary antialiased">
        <div className="hidden sm:block">
          <NavHeader />
        </div>
        <div className="block sm:hidden">
          <NavHeaderMobile />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="h-full w-full max-w-6xl">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
