import Image from "next/image";
import Link from "next/link";

const investmentLinks = [
 { label: "Co-Living Homes", href: "/investments/co-living-homes" },
 { label: "Rooming Houses", href: "/investments/rooming-houses" },
 { label: "SDA / NDIS", href: "/investments/sda-ndis-homes" },
 { label: "House & Land", href: "/investments/house-and-land" },
 { label: "Custom Builds", href: "/investments/custom-builds" },
 { label: "Developments", href: "/investments/developments" },
 { label: "Knock Down and Rebuild", href: "/investments/knock-down-rebuild" },
];

const companyLinks = [
 { label: "About Us", href: "/about" },
 { label: "How It Works", href: "/how-it-works" },
 { label: "Case Studies", href: "/case-studies" },
 { label: "Blog", href: "/blog" },
];

const supportLinks = [
 { label: "FAQ", href: "/faq" },
 { label: "Contact", href: "/contact" },
 { label: "Privacy Policy", href: "/privacy-policy" },
 { label: "Terms of Service", href: "/terms" },
 { label: "Disclaimer", href: "/disclaimer" },
];

function FooterColumn({
 title,
 links,
}: {
 title: string;
 links: { label: string; href: string }[];
}) {
 return (
  <div>
   <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
    {title}
   </h3>
   <ul className="space-y-3">
    {links.map((link) => (
     <li key={link.href}>
      <Link
       href={link.href}
       className="text-sm text-[#A3A3A3] hover:text-[#DC2626] transition-colors duration-200"
      >
       {link.label}
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default function Footer() {
 return (
  <footer
   className="border-t"
   style={{
    backgroundColor: "#0A0A0A",
    borderColor: "rgba(220,38,38,0.2)",
   }}
  >
   <div className="container-site py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

     {/* Col 1: Brand */}
     <div className="sm:col-span-2 lg:col-span-1">
      <Link href="/" className="inline-flex items-center mb-4 group">
       <Image
        src="/logo.png"
        alt="Buy Builder Direct"
        width={422}
        height={264}
        className="h-16 w-auto object-contain"
       />
      </Link>
      <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6 max-w-xs">
       Australia&rsquo;s direct-to-builder investment platform. Skip the agents,
       save up to 15%, and build real wealth.
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-3">
       <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Builder Direct on LinkedIn"
        className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#DC2626] transition-colors duration-200"
       >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
       </a>
       <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Builder Direct on Facebook"
        className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#DC2626] transition-colors duration-200"
       >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
       </a>
       <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Builder Direct on Instagram"
        className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#DC2626] transition-colors duration-200"
       >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
       </a>
      </div>

      {/* Contact info */}
      <a
       href="mailto:info@buybuilderdirect.com.au"
       className="mt-5 flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-[#DC2626] transition-colors duration-200"
      >
       <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
       </svg>
       info@buybuilderdirect.com.au
      </a>
      <a
       href="tel:+61489995725"
       className="mt-2 flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-[#DC2626] transition-colors duration-200"
      >
       <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
       </svg>
       +61 489 995 725
      </a>
     </div>

     {/* Col 2: Investments */}
     <FooterColumn title="Investments" links={investmentLinks} />

     {/* Col 3: Company */}
     <FooterColumn title="Company" links={companyLinks} />

     {/* Col 4: Support */}
     <FooterColumn title="Support" links={supportLinks} />
    </div>
   </div>

   {/* Bottom bar */}
   <div
    className="border-t"
    style={{ borderColor: "rgba(220,38,38,0.15)" }}
   >
    <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
     <p className="text-xs text-[#666666] text-center sm:text-left w-full sm:text-center">
      &copy; 2025 Buy Builder Direct. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
}
