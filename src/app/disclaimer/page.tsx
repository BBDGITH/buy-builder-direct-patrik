import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Disclaimer | Buy Builder Direct",
 description:
  "Important disclaimers regarding the information provided on the Buy Builder Direct website. Not financial or investment advice.",
};

const sections = [
 {
  id: "general",
  title: "1. General Information Only",
  content: [
   "The information contained on the Buy Builder Direct website (buybuilderdirect.com.au) is general in nature and is provided for informational and educational purposes only. It does not constitute financial, investment, legal, tax, or accounting advice of any kind.",
   "Buy Builder Direct ('BBD', 'we', 'us', or 'our') is a referral and builder-matching service. We are not a licensed financial adviser, real estate agent, buyer's agent, mortgage broker, or financial services licensee.",
  ],
 },
 {
  id: "not-advice",
  title: "2. Not Financial or Investment Advice",
  content: [
   "Nothing on this website should be construed as a recommendation, endorsement, or solicitation to buy, sell, or hold any property or investment product. Any general information about investment property types, rental yields, builder pricing, or market conditions is provided without consideration of your personal financial circumstances, objectives, or needs.",
   "You should not act on any information on this website without first obtaining appropriate independent professional advice tailored to your specific situation.",
  ],
  list: [
   "Consult a licensed financial adviser (AFS Licence holder) before making any investment decision",
   "Seek independent legal advice before signing any building contract or property agreement",
   "Obtain an independent property valuation from a certified valuer",
   "Speak with a registered tax agent regarding the tax implications of property investment",
   "Consult a mortgage broker or lender regarding your borrowing capacity and loan suitability",
  ],
 },
 {
  id: "no-guarantee",
  title: "3. No Guarantee of Results",
  content: [
   "Property investment involves risk. The value of property can increase or decrease. Rental yields are not guaranteed and can vary due to market conditions, vacancy rates, changes in legislation, and other factors outside our control.",
   "Any figures, projections, case studies, or examples provided on this website are illustrative only. They are based on general assumptions and do not represent guaranteed outcomes. Past performance is not a reliable indicator of future results.",
   "BBD makes no warranty, express or implied, that any particular investment strategy, builder partner, or property type will achieve any specific result for any individual investor.",
  ],
 },
 {
  id: "third-party",
  title: "4. Third-Party Information",
  content: [
   "This website may contain links to third-party websites or reference information sourced from external parties. BBD does not control or endorse the content of third-party websites and accepts no responsibility for the accuracy, completeness, or reliability of third-party information.",
   "References to builder partners, investment types, or market data are made in good faith but BBD cannot guarantee their ongoing accuracy. Market conditions, builder availability, and pricing can change without notice.",
  ],
 },
 {
  id: "builder-vetting",
  title: "5. Builder Vetting Disclaimer",
  content: [
   "While BBD applies a vetting process to builders before they are listed on our platform — including licence checks, insurance verification, and reference reviews — this vetting is conducted at the time of onboarding only.",
   "Vetting does not guarantee the ongoing compliance, performance, financial stability, or conduct of any builder. BBD is not a party to any contract entered into between an investor and a builder. Any disputes, defects, delays, or contractual issues are matters between the investor and the builder, and may be referred to the relevant state building authority or consumer tribunal.",
  ],
 },
 {
  id: "accuracy",
  title: "6. Accuracy of Information",
  content: [
   "We endeavour to ensure that the information on this website is current and accurate at the time of publication. However, we make no representation or warranty as to the accuracy, completeness, currency, or suitability of any information on this website.",
   "Information on this website may be updated, changed, or removed at any time without notice. BBD accepts no liability for any loss or damage arising from your reliance on information that is inaccurate, incomplete, or out of date.",
  ],
 },
 {
  id: "liability",
  title: "7. Limitation of Liability",
  content: [
   "To the maximum extent permitted by applicable law (including the Australian Consumer Law), BBD and its directors, employees, contractors, and affiliates exclude all liability for any loss or damage — whether direct, indirect, incidental, consequential, or otherwise — arising from:",
  ],
  list: [
   "Your use of or reliance on any information on this website",
   "Any investment decision made based on content on this website",
   "Any act or omission of a builder introduced through our platform",
   "Any interruption, error, or unavailability of our website",
   "Unauthorised access to or alteration of your data or transmissions",
  ],
  footer:
   "Where liability cannot be excluded under Australian law, it is limited to the maximum extent permitted, which may include re-supplying the relevant information or service.",
 },
 {
  id: "jurisdiction",
  title: "8. Jurisdiction",
  content: [
   "This website is operated from Victoria, Australia. The information on this website is intended for Australian residents only and does not constitute an offer or solicitation in any jurisdiction where such an offer would be unlawful.",
   "This Disclaimer is governed by the laws of the State of Victoria, Australia.",
  ],
 },
 {
  id: "contact",
  title: "9. Questions",
  content: [
   "If you have any questions about this Disclaimer or any content on our website, please contact us:",
  ],
  contactBlock: true,
 },
];

export default function DisclaimerPage() {
 return (
  <>
   {/* ── Hero ──────────────────────────────────────────────────── */}
   <section
    className="section"
    style={{
     background:
      "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
     borderBottom: "1px solid rgba(220,38,38,0.15)",
    }}
   >
    <div className="container-site text-center">
     <p
      className="mb-4 text-sm font-semibold uppercase tracking-widest"
      style={{ color: "#DC2626" }}
     >
      Legal
     </p>
     <h1
      className="text-5xl font-bold md:text-6xl"
      style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
     >
      Disclaimer
     </h1>
     <p
      className="mx-auto mt-5 max-w-xl text-base"
      style={{ color: "#A3A3A3" }}
     >
      Last updated: May 2025
     </p>
    </div>
   </section>

   {/* ── Body ──────────────────────────────────────────────────── */}
   <section className="section" style={{ background: "#0A0A0A" }}>
    <div
     className="container-site"
     style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}
    >
     {/* Warning banner */}
     <div
      className="mb-12 rounded-xl p-6"
      style={{
       background: "#141414",
       border: "1px solid rgba(220,38,38,0.2)",
       borderLeft: "4px solid #DC2626",
      }}
     >
      <p className="text-base font-semibold mb-2" style={{ color: "#FFFFFF" }}>
       Important Notice
      </p>
      <p className="text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
       Buy Builder Direct is a builder referral and matching service — not a
       financial adviser, real estate agent, or licensed investment adviser.
       Nothing on this website constitutes financial, legal, or investment
       advice. Property investment carries risk. Always seek independent
       professional advice before making any investment decision.
      </p>
     </div>

     {/* Quick links to other legal pages */}
     <div className="mb-12 flex flex-wrap gap-3">
      {[
       { label: "Privacy Policy", href: "/privacy-policy" },
       { label: "Terms of Service", href: "/terms" },
      ].map((link) => (
       <Link
        key={link.href}
        href={link.href}
        className="text-sm px-4 py-2 rounded-lg border transition-colors duration-200"
        style={{
         borderColor: "rgba(220,38,38,0.3)",
         color: "#A3A3A3",
        }}
       >
        {link.label}
       </Link>
      ))}
     </div>

     {/* Sections */}
     <div className="space-y-12">
      {sections.map((section) => (
       <div key={section.id} id={section.id}>
        <h2
         className="text-2xl font-bold mb-4"
         style={{
          fontFamily: "var(--font-display)",
          color: "#DC2626",
         }}
        >
         {section.title}
        </h2>

        {section.content && (
         <div className="space-y-4 mb-4">
          {section.content.map((para, i) => (
           <p
            key={i}
            className="text-base leading-relaxed"
            style={{ color: "#A3A3A3" }}
           >
            {para}
           </p>
          ))}
         </div>
        )}

        {section.list && (
         <ul className="mb-4 space-y-2 pl-0">
          {section.list.map((item, i) => (
           <li
            key={i}
            className="flex items-start gap-3 text-base leading-relaxed"
            style={{ color: "#A3A3A3" }}
           >
            <span
             className="mt-1 flex-shrink-0 h-2 w-2 rounded-full"
             style={{ background: "#DC2626" }}
             aria-hidden="true"
            />
            {item}
           </li>
          ))}
         </ul>
        )}

        {section.footer && (
         <p
          className="text-base leading-relaxed"
          style={{ color: "#A3A3A3" }}
         >
          {section.footer}
         </p>
        )}

        {section.contactBlock && (
         <div
          className="rounded-xl p-6 mt-4"
          style={{
           background: "#141414",
           border: "1px solid rgba(220,38,38,0.2)",
          }}
         >
          <p
           className="text-base font-semibold mb-1"
           style={{ color: "#FFFFFF" }}
          >
           Buy Builder Direct
          </p>
          <p className="text-base" style={{ color: "#A3A3A3" }}>
           Email:{" "}
           <a
            href="mailto:info@buybuilderdirect.com.au"
            className="underline underline-offset-2"
            style={{ color: "#DC2626" }}
           >
            info@buybuilderdirect.com.au
           </a>
          </p>
          <p className="mt-1 text-base" style={{ color: "#A3A3A3" }}>
           Phone:{" "}
           <a
            href="tel:+61489995725"
            className="underline underline-offset-2"
            style={{ color: "#DC2626" }}
           >
            +61 489 995 725
           </a>
          </p>
          <p className="mt-3 text-sm" style={{ color: "#666666" }}>
           Victoria, Australia — governed by Victorian and Australian
           federal law.
          </p>
         </div>
        )}

        <div
         className="mt-10"
         style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        />
       </div>
      ))}
     </div>
    </div>
   </section>
  </>
 );
}
