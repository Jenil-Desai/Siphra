import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/globals/NavigationBar";
import Footer from "@/components/globals/Footer";

export const metadata: Metadata = {
  title: "Siphra",
  description: "A simple and secure tool for generating public-private keypairs and passphrases",
  keywords: ["cryptography", "keypair generator", "public key", "private key", "passphrase", "security"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <Toaster />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
