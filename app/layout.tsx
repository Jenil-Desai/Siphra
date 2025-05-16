import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siphra",
  description: "A simple and secure tool for generating public-private keypairs and passphrases",
  keywords: ["cryptography", "keypair generator", "public key", "private key", "passphrase", "security"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
