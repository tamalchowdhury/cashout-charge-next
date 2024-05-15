import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

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
      <body className={`min-h-screen flex flex-col text-[#333] ${inter.className}`}>
        <header className='header text-center bg-accent/70 p-2'>
          <Link href='/'>
            <h1 className='text-xl font-bold'>CashoutCharge.com</h1>
          </Link>
          <p className='text-sm'>Cashout Charge Online Calculator</p>
        </header>
        <main className='flex-1 main p-2 bg-accent/20'>{children}</main>
        <footer className='footer p-2 mt-auto bg-accent/50'>
          <p className='text-center text-sm '>
            ©2024 CashoutCharge.com
            <br />
            Developed by Tamal Chowdhury
          </p>
        </footer>
      </body>
    </html>
  )
}
