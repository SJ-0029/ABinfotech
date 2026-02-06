import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'AB INFOTECH SOLUTIONS - Digital Solutions & IT Services',
  description: 'Leading IT services provider offering web development, mobile apps, cloud solutions, and digital transformation services. Based in Pune, Maharashtra, India. ISO CERTIFIED 9001:2015',
  keywords: 'IT services, web development, mobile apps, cloud solutions, digital transformation, Pune, Maharashtra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
