import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
// import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Austin Origami Circle",
  description: "Austin's premier origami community for artists and enthusiasts",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar />
      <main>{children}</main>
      { /*<Toaster /> */ }
    </ThemeProvider>
    </body>
    </html>
  )
}
