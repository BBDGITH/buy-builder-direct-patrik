import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Terms of Service | Buy Builder Direct",
 description:
 "Terms and conditions governing your use of the Buy Builder Direct website and referral matching service.",
};

const sections = [
 {
 id: "acceptance",
 title: "1. Acceptance of Terms",
 content: [
 "By accessing or using the Buy Builder Direct website (buybuilderdirect.com.au) or any of our services, you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, please do not use our website or services.",
 "These Terms constitute a legally binding agreement between you and Buy Builder Direct ('BBD', 'we', 'us', or 'our'). We reserve the right to update these Terms at any time. Continued use of our website after any changes constitutes your acceptance of the updated Terms.",
 "These Terms should be read alongside our Privacy Policy, which is incorporated by reference.",
 ],
 },
 {
 id: "services",
 title: "2. Our Services",
 content: [
 "Buy Builder Direct operates as a referral and matching service. We connect Australian property investors with licensed, vetted builders who offer direct-to-investor pricing on new construction projects.",
 ],
 list: [
 "BBD is not a builder, developer, or construction company",
 "BBD is not a licensed real estate agent or buyer's agent",
 "BBD is not a financial adviser, mortgage broker, or credit provider",
 "BBD does not hold, manage, or invest your funds at any point",
 ],
 footer:
 "Our role is limited to facilitating introductions between investors and builders. Any agreement you enter into with a builder is solely between you and that builder.",
 },
 {
 id: "not-financial-advice",
 title: "3. Not Financial or Investment Advice",
 content: [
 "Nothing on the Buy Builder Direct website, in our communications, or provided by our team constitutes financial, investment, legal, tax, or accounting advice.",
 "Property investment involves significant financial risk. The value of property can go up or down. Past performance of any investment type is not a reliable indicator of future performance.",
 "Before making any property investment decision, you should:",
 ],
 list: [
 "Consult a licensed financial adviser who can assess your individual circumstances",
 "Seek independent legal advice regarding any contracts or agreements",
 "Obtain independent property valuations and due diligence reports",
 "Consult a registered tax agent regarding any tax implications",
 ],
 footer:
 "Any information provided by BBD about investment property types, yields, or builder pricing is general in nature and does not take into account your personal financial situation, objectives, or needs.",
 },
 {
 id: "user-responsibilities",
 title: "4. User Responsibilities",
 content: [
 "By using our services, you agree to:",
 ],
 list: [
 "Provide accurate, complete, and up-to-date information in all enquiry forms and communications",
 "Use our services only for lawful purposes and in accordance with these Terms",
 "Conduct your own due diligence on any builder, property, or investment opportunity before committing",
 "Not misrepresent your identity, financial situation, or investment intentions",
 "Not use our platform to solicit, advertise, or promote any product or service without our express written permission",
 ],
 footer:
 "We reserve the right to refuse service or terminate access to anyone who breaches these responsibilities.",
 },
 {
 id: "builder-relationships",
 title: "5. Builder Relationships",
 content: [
 "BBD applies a vetting process before listing any builder on our platform. This process includes checking builder's licences, insurance, financial stability, and track records. However:",
 ],
 list: [
 "Vetting is conducted at the time of onboarding and does not guarantee ongoing compliance or performance",
 "BBD is not a party to any contract between you and a builder",
 "BBD is not responsible for the quality, timeliness, or outcome of any construction project",
 "BBD does not provide warranties or guarantees regarding builder performance",
 "Any disputes regarding construction, contracts, defects, or delays are to be resolved between you and the builder directly, or through the relevant state building authority",
 ],
 footer:
 "We encourage all investors to engage independent solicitors to review any building contracts before signing.",
 },
 {
 id: "intellectual-property",
 title: "6. Intellectual Property",
 content: [
 "All content on the Buy Builder Direct website — including text, images, graphics, logos, icons, videos, and data — is the proprietary property of Buy Builder Direct or its licensors and is protected by Australian and international intellectual property laws.",
 "You may not reproduce, distribute, modify, transmit, or use any content from this website for commercial purposes without our prior written consent.",
 "You may access and view our content for personal, non-commercial purposes only.",
 ],
 },
 {
 id: "limitation-of-liability",
 title: "7. Limitation of Liability",
 content: [
 "To the maximum extent permitted by law, Buy Builder Direct and its directors, employees, and affiliates are not liable for:",
 ],
 list: [
 "Any investment losses or financial outcomes arising from your use of our services",
 "Any loss or damage arising from the acts or omissions of any builder introduced through our platform",
 "Any indirect, incidental, special, or consequential loss or damage of any kind",
 "Any loss or damage resulting from reliance on information provided on our website",
 "Any interruption, suspension, or termination of our website or services",
 ],
 footer:
 "Where liability cannot be excluded by law (including under the Australian Consumer Law), our liability is limited to the maximum extent permitted, which may include re-supplying the relevant service. Nothing in these Terms excludes, restricts, or modifies any right or remedy, or any guarantee, warranty, or other term or condition imposed by law that cannot be excluded.",
 },
 {
 id: "governing-law",
 title: "8. Governing Law",
 content: [
 "These Terms are governed by and construed in accordance with the laws of the State of Victoria, Australia. You agree to submit to the exclusive jurisdiction of the courts of Victoria for the resolution of any disputes arising out of or in connection with these Terms or your use of our services.",
 "If any provision of these Terms is found to be invalid or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.",
 ],
 },
 {
 id: "contact",
 title: "9. Contact Us",
 content: [
 "If you have any questions about these Terms of Service, please contact us:",
 ],
 contactBlock: true,
 },
];

export default function TermsPage() {
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
 Terms of Service
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
 {/* Intro note */}
 <div
 className="mb-12 rounded-xl p-6"
 style={{
 background: "#141414",
 border: "1px solid rgba(220,38,38,0.2)",
 borderLeft: "4px solid #DC2626",
 }}
 >
 <p className="text-base leading-relaxed" style={{ color: "#A3A3A3" }}>
 Please read these Terms carefully before using our website or
 services. These Terms explain what Buy Builder Direct does, what it
 does not do, and the basis on which we provide our referral
 matching service. If you have any questions, contact us before
 proceeding.
 </p>
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

 {/* Paragraphs */}
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

 {/* List */}
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

 {/* Footer note */}
 {section.footer && (
 <p
 className="text-base leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 {section.footer}
 </p>
 )}

 {/* Contact block */}
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
 Buy Builder Direct — Legal Enquiries
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
 <p
 className="mt-3 text-sm"
 style={{ color: "#666666" }}
 >
 Jurisdiction: Victoria, Australia. These Terms are
 governed by Victorian and Australian federal law.
 </p>
 </div>
 )}

 {/* Divider */}
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
