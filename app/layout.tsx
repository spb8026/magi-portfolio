import type { Metadata } from "next"
import { Orbitron, Share_Tech_Mono, Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MAGI SYSTEM — Portfolio",
  description: "Personal portfolio — MAGI System interface",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} ${notoSansJP.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
