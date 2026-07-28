import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyMobileCTA } from "@/components/layout";
import { LatestBlogs } from "@/components/home";

const playfair = Playfair_Display({
 subsets: ["latin"],
 weight: ["700", "800", "900"],
 variable: "--font-playfair",
 display: "swap",
 preload: true,
});

const dmSans = DM_Sans({
 subsets: ["latin"],
 weight: ["400", "500", "600", "700"],
 variable: "--font-dmsans",
 display: "swap",
 preload: true,
});

const BASE_URL =
 process.env.NEXT_PUBLIC_SITE_URL ?? "https://buybuilderdirect.com.au";

export const viewport: Viewport = {
 themeColor: "#DC2626",
 width: "device-width",
 initialScale: 1,
};

export const metadata: Metadata = {
 metadataBase: new URL(BASE_URL),
 title: {
  default: "Buy Builder Direct | Deal Direct with Builders — Save $$$",
  template: "%s | Buy Builder Direct",
 },
 description:
  "Save $$$ on your investment property by buying direct from Australian builders. Co-Living, Rooming Houses, SDA/NDIS, House & Land, Custom Builds, Knock Down and Rebuild. No agents. No markups.",
 keywords: [
  "buy builder direct",
  "investment property Australia",
  "co-living homes",
  "rooming houses",
  "SDA NDIS housing",
  "house and land packages",
  "custom builds",
  "knock down rebuild",
  "direct builder",
  "property investment",
  "no agent property",
  "Australian property investment",
 ],
 authors: [{ name: "Buy Builder Direct", url: BASE_URL }],
 creator: "Buy Builder Direct",
 publisher: "Buy Builder Direct",
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 openGraph: {
  type: "website",
  locale: "en_AU",
  url: BASE_URL,
  siteName: "Buy Builder Direct",
  title: "Buy Builder Direct | Deal Direct with Builders — Save $$$",
  description:
   "Save $$$ on your investment property by buying direct from Australian builders. No agents. No markups.",
  images: [
   {
    url: "/images/projects/mambourin/mambourin-1.jpg",
    width: 1200,
    height: 630,
    alt: "Buy Builder Direct — Premium investment property, direct from builder",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Buy Builder Direct | Deal Direct — Save $$$",
  description:
   "Save $$$ on your investment property. Direct to builder. No agents. No markups.",
  images: ["/images/projects/mambourin/mambourin-1.jpg"],
  creator: "@buybuilderdirect",
 },
 alternates: {
  canonical: BASE_URL,
 },
 icons: {
  icon: [
   { url: "/favicon.ico", sizes: "any" },
   { url: "/logo.png", type: "image/png" },
  ],
  apple: "/favicon.ico",
  shortcut: "/favicon.ico",
 },
 verification: {
  // Add your Google Search Console & Bing verification codes here:
  // google: "your-google-verification-code",
  // other: { "msvalidate.01": "your-bing-code" },
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html
   lang="en-AU"
   className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
  >
   <body className="min-h-full flex flex-col overflow-x-clip">
    <Header />
    <main className="flex-1 overflow-x-clip w-full">{children}</main>
    <LatestBlogs />
    <Footer />
    <StickyMobileCTA />
   </body>
  </html>
 );
}
