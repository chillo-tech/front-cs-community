import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chillo services community',
  description: 'Echanges avec la communaté de chillo services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-200'>{children}</body>
    </html>
  )
}
