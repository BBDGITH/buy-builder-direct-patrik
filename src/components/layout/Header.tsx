"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const investmentLinks = [
 { label: "Co-Living", href: "/investments/co-living-homes" },
 { label: "Rooming Houses", href: "/investments/rooming-houses" },
 { label: "SDA / NDIS", href: "/investments/sda-ndis-homes" },
 { label: "House & Land", href: "/investments/house-and-land" },
 { label: "Custom Builds", href: "/investments/custom-builds" },
 { label: "Developments", href: "/investments/developments" },
 { label: "Knock Down and Rebuild", href: "/investments/knock-down-rebuild" },
];

const navLinks = [
 { label: "Home", href: "/" },
 { label: "Investments", href: "/investments", hasDropdown: true },
 { label: "How It Works", href: "/how-it-works" },
 { label: "About", href: "/about" },
 { label: "FAQ", href: "/faq" },
 { label: "Contact", href: "/contact" },
];

export default function Header() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null);

 /* Scroll listener */
 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 50);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 /* Close dropdown on outside click */
 useEffect(() => {
 const handler = (e: MouseEvent) => {
 if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
 setDropdownOpen(false);
 }
 };
 document.addEventListener("mousedown", handler);
 return () => document.removeEventListener("mousedown", handler);
 }, []);

 /* Prevent body scroll when mobile menu open */
 useEffect(() => {
 document.body.style.overflow = mobileOpen ? "hidden" : "";
 return () => { document.body.style.overflow = ""; };
 }, [mobileOpen]);

 return (
 <>
 <header
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 scrolled
 ? "py-3 bg-black/90 backdrop-blur-md border-b border-[rgba(220,38,38,0.15)]"
 : "py-5 bg-transparent"
 }`}
 >
 <div className="container-site flex items-center justify-between gap-4">

 {/* ── Logo ── */}
 <Link
 href="/"
 className="flex items-center shrink-0 group"
 aria-label="Buy Builder Direct — Home"
 >
 <div className="bg-white rounded-lg p-1.5">
 <Image
 src="/logo.png"
 alt="Buy Builder Direct"
 width={140}
 height={52}
 className="h-10 w-auto object-contain"
 priority
 />
 </div>
 </Link>

 {/* ── Desktop Nav ── */}
 <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
 {navLinks.map((link) =>
 link.hasDropdown ? (
 <div key={link.label} ref={dropdownRef} className="relative">
 <button
 onClick={() => setDropdownOpen((p) => !p)}
 className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
 aria-expanded={dropdownOpen}
 aria-haspopup="true"
 >
 {link.label}
 <svg
 className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 strokeWidth={2.5}
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </button>

 {dropdownOpen && (
 <div
 className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl border border-[rgba(220,38,38,0.2)] overflow-hidden shadow-2xl"
 style={{ background: "#1C1C1C" }}
 >
 {investmentLinks.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setDropdownOpen(false)}
 className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-[rgba(220,38,38,0.12)] transition-colors border-b border-white/5 last:border-0"
 >
 {item.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 ) : (
 <Link
 key={link.label}
 href={link.href}
 className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
 >
 {link.label}
 </Link>
 )
 )}
 </nav>

 {/* ── Desktop Right: phone + CTA ── */}
 <div className="hidden lg:flex items-center gap-4 shrink-0">
 <a
 href="tel:0409005554"
 className="text-sm text-white/70 hover:text-white transition-colors"
 aria-label="Call 0409 005 554"
 >
 0409 005 554
 </a>
 <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
 Get Free Assessment
 </Link>
 </div>

 {/* ── Mobile Hamburger ── */}
 <button
 className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-white/5 transition-colors"
 onClick={() => setMobileOpen((p) => !p)}
 aria-label={mobileOpen ? "Close menu" : "Open menu"}
 aria-expanded={mobileOpen}
 >
 <span
 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
 mobileOpen ? "translate-y-2 rotate-45" : ""
 }`}
 />
 <span
 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
 mobileOpen ? "opacity-0" : ""
 }`}
 />
 <span
 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
 mobileOpen ? "-translate-y-2 -rotate-45" : ""
 }`}
 />
 </button>
 </div>
 </header>

 {/* ── Mobile Drawer ── */}
 <div
 className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
 mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
 }`}
 >
 {/* Backdrop */}
 <div
 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
 onClick={() => setMobileOpen(false)}
 aria-hidden="true"
 />

 {/* Drawer panel */}
 <div
 className={`absolute top-0 right-0 h-full w-80 max-w-full flex flex-col transition-transform duration-300 ${
 mobileOpen ? "translate-x-0" : "translate-x-full"
 }`}
 style={{ background: "#141414", borderLeft: "1px solid rgba(220,38,38,0.15)" }}
 >
 {/* Drawer header */}
 <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(220,38,38,0.15)]">
 <Link
 href="/"
 onClick={() => setMobileOpen(false)}
 className="flex items-center"
 >
 <div className="bg-white rounded-lg p-1">
 <Image
 src="/logo.png"
 alt="Buy Builder Direct"
 width={110}
 height={40}
 className="h-8 w-auto object-contain"
 />
 </div>
 </Link>
 <button
 onClick={() => setMobileOpen(false)}
 className="w-8 h-8 flex items-center justify-center rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors"
 aria-label="Close menu"
 >
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
 </svg>
 </button>
 </div>

 {/* Drawer nav */}
 <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
 {navLinks.map((link) =>
 link.hasDropdown ? (
 <div key={link.label}>
 <Link
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-white/5 transition-colors"
 >
 {link.label}
 </Link>
 <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[rgba(220,38,38,0.3)] pl-4">
 {investmentLinks.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setMobileOpen(false)}
 className="block px-2 py-2.5 text-sm text-white/70 hover:text-white transition-colors"
 >
 {item.label}
 </Link>
 ))}
 </div>
 </div>
 ) : (
 <Link
 key={link.label}
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className="block px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
 >
 {link.label}
 </Link>
 )
 )}
 </nav>

 {/* Drawer footer CTA */}
 <div className="px-6 py-6 border-t border-[rgba(220,38,38,0.15)] space-y-3">
 <a
 href="tel:0409005554"
 className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors"
 >
 0409 005 554
 </a>
 <Link
 href="/contact"
 onClick={() => setMobileOpen(false)}
 className="btn-primary w-full text-center"
 >
 Get Free Assessment
 </Link>
 </div>
 </div>
 </div>
 </>
 );
}
