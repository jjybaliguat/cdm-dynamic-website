import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";
import NewsLetterSection from "@/components/sections/NewsLetterSection";

export const metadata: Metadata = {
  title: "Colegio de Montalban",
  description: "Colegio de Montalban",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-none",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
