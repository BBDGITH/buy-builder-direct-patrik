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
 { label: "Gallery", href: "/gallery" },
 { label: "Virtual Tours", href: "/virtual-display-homes" },
 { label: "ROI Calculator", href: "/roi-calculator" },
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
       keep more $$$ in your deal, and build real wealth.
      </p>

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
      &copy; {new Date().getFullYear()} Buy Builder Direct. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
}
