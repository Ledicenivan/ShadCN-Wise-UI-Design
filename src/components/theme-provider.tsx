"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    const resolved: Theme =
      stored === "dark" || stored === "light"
        ? stored
        : document.documentElement.classList.contains("dark")
          ? "dark"
          : defaultTheme
    setThemeState(resolved)
    document.documentElement.classList.toggle("dark", resolved === "dark")
    if (!stored) localStorage.setItem(storageKey, resolved)
  }, [defaultTheme, storageKey])

  const setTheme = React.useCallback(
    (next: Theme) => {
      setThemeState(next)
      document.documentElement.classList.toggle("dark", next === "dark")
      localStorage.setItem(storageKey, next)
    },
    [storageKey]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
