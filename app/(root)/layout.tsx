import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BottomBar from '@/components/shared/BottomBar'
import LeftBar from '@/components/shared/LeftBar'
import TopBar from '@/components/shared/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'neuScans',
  description: 'Elevate Machine Translation Through Community Collaboration. neuScans offers a unique platform for users to contribute to and improve machine-generated translations. Create your own fork, make corrections, and help us refine the future of language translation.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
      <TopBar />

      <main>

      <LeftBar />

      <section className='main-container'>
        <div className='w-full max-w-4xl'>
          {children}
        </div>

      </section>

      </main>

      <BottomBar />
      </html>
    </ ClerkProvider>
  )
}
