import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wise UI Dashboard — Next.js + ShadCN",
  description: "Wise-style dashboard template for designers to learn layout and styling with ShadCN components",
}

/**
 * DESIGNER NOTE: Root layout
 * — Global fonts and theme are applied here; body styles come from globals.css
 * — To change default font: swap Geist for another next/font or add --font-* in globals.css @theme
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark');})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="theme">
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              {/* DESIGNER: Main content area — padding/layout is in page or a shared wrapper */}
              {children}
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
