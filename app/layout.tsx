import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/NavigationBar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siphra",
  description: "A simple and secure tool for generating public-private keypairs and passphrases",
  keywords: ["cryptography", "keypair generator", "public key", "private key", "passphrase", "security"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <Toaster />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
