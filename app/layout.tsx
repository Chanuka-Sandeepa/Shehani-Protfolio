import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shehani Akashya - Finance & Accounting Professional',
  description: 'Finance & Accounting Undergraduate | Future Financial Leader | Turning Numbers into Insights',
  keywords: 'finance, accounting, undergraduate, financial analysis, leadership, Sri Lanka',
  authors: [{ name: 'Shehani Akashya' }],
  openGraph: {
    title: 'Shehani Akashya - Finance & Accounting Professional',
    description: 'Finance & Accounting Undergraduate | Future Financial Leader',
    url: 'https://shehani-portfolio.vercel.app',
    siteName: 'Shehani Akashya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shehani Akashya - Finance & Accounting Professional',
    description: 'Finance & Accounting Undergraduate | Future Financial Leader',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
