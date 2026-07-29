import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Inter } from "next/font/google";

import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `${site.name} | ${site.tagline}`;
const description = `Portfolio of ${site.name}, a software engineer building full-stack web applications with ${site.stack.join(", ")}.`;

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

// Person schema so search engines connect the site to its owner and profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.tagline,
  worksFor: { "@type": "Organization", name: "GreenGrowth CPAs" },
  knowsAbout: site.stack,
  sameAs: [site.links.github, site.links.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
