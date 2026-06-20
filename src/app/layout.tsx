import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://monroejack1.github.io/ambru.cc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AMBRU.CC | AI, Marketing and Market Intelligence Consulting",
  description:
    "AMBRU.CC is the personal consulting and strategy studio of Cosmin Claudiu, helping businesses use AI, market research, statistics, automation and strategic marketing to grow smarter.",
  openGraph: {
    title: "AMBRU.CC | AI • Marketing • Strategy",
    description:
      "Premium consulting, coaching and strategic project implementation for smarter business growth.",
    url: siteUrl,
    siteName: "AMBRU.CC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMBRU.CC | AI • Marketing • Strategy",
    description:
      "AI, marketing, automation and market intelligence for businesses ready to grow smarter.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
