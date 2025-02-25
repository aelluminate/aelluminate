import { Metadata } from "next"

const siteName = "Aelluminate"
const siteURL = "https://aelluminate.com"
const siteDescription = "Stop patching problem, start building solutions."

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  generator: siteName,
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteURL,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
