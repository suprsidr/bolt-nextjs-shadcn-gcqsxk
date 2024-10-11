import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Order Management App',
  description: 'A mobile-friendly order management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background">
            {children}
            <ThemeSwitcher />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}