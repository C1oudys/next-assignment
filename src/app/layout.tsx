import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Assignment",
  description: "Catfact Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav> 
        <Link href="/">HOME</Link>
        <Link href="/SSG">SSG</Link>
        <Link href="/ISR">ISR</Link>
        <Link href="/SSR">SSR</Link>
        <Link href="/CSR">CSR</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
