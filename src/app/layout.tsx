import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByArchit Thinking Space",
  description: "Digital Quietude — An editorial, archival space for thoughts and builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${newsreader.variable}`}>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-surface-variant selection:text-on-background">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
