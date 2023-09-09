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
    description: 'Elevate Machine Translation Through Community Collaboration. neuScans offers a unique platform for users to contribute to and improve machine-generated translations. Create your own fork, make corrections, and help us refine the future of language translation.'
    
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