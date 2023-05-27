import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-800 text-sky-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
