import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyMobileCTA } from "@/components/layout";

const playfair = Playfair_Display({
 subsets: ["latin"],
 variable: "--font-playfair",
 display: "swap",
});

const dmSans = DM_Sans({
 subsets: ["latin"],
 variable: "--font-dmsans",
 display: "swap",
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
  default: "Buy Builder Direct | Deal Direct with Builders — Save Up To 15%",
  template: "%s | Buy Builder Direct",
 },
 description:
  "Save up to 15% on your investment property by buying direct from Australian builders. Co-Living, Rooming Houses, SDA/NDIS, House & Land, Custom Builds, Knock Down and Rebuild. No agents. No markups.",
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
  title: "Buy Builder Direct | Deal Direct with Builders — Save Up To 15%",
  description:
   "Save up to 15% on your investment property by buying direct from Australian builders. No agents. No markups.",
  images: [
   {
    url: "/images/runge-st/exterior-01.jpg",
    width: 1200,
    height: 630,
    alt: "Buy Builder Direct — Premium investment property, direct from builder",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Buy Builder Direct | Deal Direct — Save Up To 15%",
  description:
   "Save up to 15% on your investment property. Direct to builder. No agents. No markups.",
  images: ["/images/runge-st/exterior-01.jpg"],
  creator: "@buybuilderdirect",
 },
 alternates: {
  canonical: BASE_URL,
 },
 icons: {
  icon: "/favicon.ico",
  apple: "/favicon.ico",
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
   <body className="min-h-full flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <StickyMobileCTA />
   </body>
  </html>
 );
}
