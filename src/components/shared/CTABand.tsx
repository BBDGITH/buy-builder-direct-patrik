import Link from "next/link";

interface CTABandProps {
 serviceName: string;
 slug: string;
}

export default function CTABand({ serviceName, slug }: CTABandProps) {
 return (
  <section
   className="section"
   style={{
    background:
     "linear-gradient(135deg, rgba(220,38,38,0.12) 0%, rgba(220,38,38,0.04) 100%)",
    borderTop: "1px solid rgba(220,38,38,0.2)",
    borderBottom: "1px solid rgba(220,38,38,0.2)",
   }}
  >
   <div className="container-site text-center">
    <p
     className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
     style={{
      borderColor: "rgba(220,38,38,0.4)",
      color: "#DC2626",
      background: "rgba(220,38,38,0.08)",
     }}
    >
     Free, No-Obligation
    </p>

    <h2
     className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
     style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
    >
     Get Your Free {serviceName} Savings Assessment
    </h2>

    <p className="mb-8 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
     Speak with a Buy Builder Direct specialist and discover exactly how much you can save
     by going direct. No agent, no markup — just a straight conversation about your investment goals.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
     <Link
      href={`/contact?type=${slug}`}
      className="btn-primary text-base px-8 py-4"
     >
      Book My Free Assessment
     </Link>
     <a
      href="tel:0409005554"
      className="btn-secondary text-base px-8 py-4"
     >
      Call 0409 005 554
     </a>
    </div>

    <p className="mt-6 text-xs" style={{ color: "#666666" }}>
     No spam. No pressure. Buy Builder Direct is remunerated by builders — not investors.
    </p>
   </div>
  </section>
 );
}
