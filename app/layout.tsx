import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AXIOM Pro - Advanced Token Trading Platform",
  description:
    "Professional cryptocurrency trading interface with real-time price updates, advanced filtering, and comprehensive token analytics. Trade with confidence using AXIOM Pro.",
  keywords: "cryptocurrency, trading, DeFi, tokens, blockchain, real-time prices, crypto analytics",
  authors: [{ name: "AXIOM Pro Team" }],
  creator: "AXIOM Pro",
  publisher: "AXIOM Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://axiom-pro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AXIOM Pro - Advanced Token Trading Platform",
    description: "Professional cryptocurrency trading interface with real-time analytics",
    url: "https://axiom-pro.vercel.app",
    siteName: "AXIOM Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AXIOM Pro Trading Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOM Pro - Advanced Token Trading Platform",
    description: "Professional cryptocurrency trading interface with real-time analytics",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.example.com" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#1a1a1a", color: "white" }}>
            This application requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
} 