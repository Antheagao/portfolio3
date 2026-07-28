import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Anthony Mendez | Full-Stack Developer";
const description =
  "Portfolio of Anthony Mendez, a full-stack developer building efficient, user-centric web applications.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/herta-pic.png"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/herta-pic.png"],
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
      </body>
    </html>
  );
}
