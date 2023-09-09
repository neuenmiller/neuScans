import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css'

interface Metadata {
    title: string;
    description: string;
  }

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'neuScans',
    description: 'neuScans'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <ClerkProvider>
        <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
  }