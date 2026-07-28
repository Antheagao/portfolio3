import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Inter } from "next/font/google";

import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Anthony Mendez | Full-Stack Developer";
const description =
  "Portfolio of Anthony Mendez, a full-stack developer building efficient, user-centric web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: site.url,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
