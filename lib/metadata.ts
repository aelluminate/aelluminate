import { Metadata } from "next"

import { keywords } from "./keywords"

const siteName = "Aelluminate"
const siteURL = "https://aelluminate.com"
const siteDescription = "Stop patching problem, start building solutions."

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  keywords: keywords,
  description: siteDescription,
  generator: siteName,
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteURL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteName,
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description: siteDescription,
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
  },
  alternates: {
    canonical: siteURL,
    languages: {},
  },
  verification: {
    other: {
      me: ["info@aelluinate.com"],
    },
  },
  appLinks: {
    web: {
      url: siteURL,
      should_fallback: true,
    },
  },
  category: "Business",
}
