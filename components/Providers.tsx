"use client"
import { ThemeProvider } from "next-themes"
import { Provider } from "jotai"
import { store } from "@/store/store"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  )
}
