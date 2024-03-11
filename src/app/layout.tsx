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
        <nav className="bg-gray-800 text-white p-4"> 
        <Link href="/" className="hover:text-gray-400 mr-4">HOME</Link>
        <Link href="/SSG" className="hover:text-gray-400 mr-4">SSG</Link>
        <Link href="/ISR" className="hover:text-gray-400 mr-4">ISR</Link>
        <Link href="/SSR" className="hover:text-gray-400 mr-4">SSR</Link>
        <Link href="/CSR" className="hover:text-gray-400 mr-4">CSR</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
