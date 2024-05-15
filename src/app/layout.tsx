import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cashout Charge Calculator for Bkash, Nagad, Rocket, Upay",
  description: "Calculate the cashout charge for Bkash, Nagad, Rocket, Upay",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`p-2 max-h-screen ${inter.className}`}>{children}</body>
    </html>
  )
}
