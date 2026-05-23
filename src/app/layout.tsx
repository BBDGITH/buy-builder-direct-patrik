import type { Metadata } from "next";
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

export const metadata: Metadata = {
 title: "Buy Builder Direct | Deal Direct, Save More",
 description:
 "Save up to 15% on your investment property by buying direct from Australian builders. Co-Living, Rooming Houses, SDA/NDIS, House & Land.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html
 lang="en"
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
