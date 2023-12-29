import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/themeregistry/ThemeRegistry'
import MainLayout from '@/components/layout/main'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lexplorer',
  description: 'Explore the wonders of Loopring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <MainLayout>{children}</MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  )
}
