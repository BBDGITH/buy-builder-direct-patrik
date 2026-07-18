import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Privacy Policy | Buy Builder Direct",
 description:
 "How Buy Builder Direct collects, uses, and protects your personal information in accordance with Australian privacy law.",
};

const sections = [
 {
 id: "introduction",
 title: "1. Introduction",
 content: [
 "Buy Builder Direct ('BBD', 'we', 'us', or 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website or services.",
 "We operate in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). Our purpose is to connect Australian property investors directly with licensed, vetted builders — and we collect personal information only to the extent necessary to provide that service.",
 "By using our website or submitting an enquiry, you consent to the collection and use of your information as described in this policy.",
 ],
 },
 {
 id: "what-we-collect",
 title: "2. What We Collect",
 content: [
 "We collect personal information that you provide to us directly, including:",
 ],
 list: [
 "Full name",
 "Email address",
 "Phone number",
 "State or territory of residence",
 "Investment preferences (e.g. property type, budget range, timeline)",
 "Any additional information you choose to share in enquiry forms or conversations",
 ],
 footer:
 "We do not collect sensitive information (such as financial account details or government identifiers) unless you explicitly provide it and it is necessary for your enquiry.",
 },
 {
 id: "how-we-use-it",
 title: "3. How We Use Your Information",
 content: ["We use your personal information to:"],
 list: [
 "Match you with suitable vetted builder partners based on your investment goals and location",
 "Respond to your enquiries and follow up on your behalf",
 "Send you relevant property investment information or updates (where you have consented)",
 "Improve our website, services, and user experience",
 "Comply with our legal obligations",
 ],
 footer:
 "We will not use your information for any purpose that is incompatible with why it was collected without first seeking your consent.",
 },
 {
 id: "who-we-share-with",
 title: "4. Who We Share It With",
 content: [
 "We share your information only where necessary and with people you would reasonably expect us to share with:",
 ],
 list: [
 "Vetted builder partners — only when a match is relevant to your stated investment criteria and location",
 "Our internal team for the purposes of managing your enquiry",
 "Service providers who assist us in operating our website (e.g. hosting, analytics) — these providers are required to handle your information securely and only for the purpose we specify",
 ],
 footer:
 "We do not sell, rent, or share your personal information with third-party marketers, advertisers, or data brokers. Ever.",
 },
 {
 id: "cookies",
 title: "5. Cookies & Analytics",
 content: [
 "Our website uses cookies and similar tracking technologies to improve your experience. Specifically:",
 ],
 list: [
 "Session cookies — to maintain your browsing session and remember form inputs",
 "Google Analytics 4 (GA4) — to understand how visitors use our site (pages visited, time on site, traffic sources). This data is aggregated and does not personally identify you",
 ],
 footer:
 "You can disable cookies through your browser settings at any time. Disabling cookies may affect some features of our website. We do not use cookies to serve targeted advertising.",
 },
 {
 id: "your-rights",
 title: "6. Your Rights",
 content: [
 "Under Australian privacy law, you have the right to:",
 ],
 list: [
 "Access the personal information we hold about you",
 "Request correction of inaccurate, outdated, or incomplete information",
 "Request deletion of your personal information (subject to our legal obligations to retain certain records)",
 "Withdraw your consent to marketing communications at any time",
 "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe we have mishandled your information",
 ],
 footer:
 "To exercise any of these rights, contact us at info@buybuilderdirect.com.au. We will respond within 30 days.",
 },
 {
 id: "security",
 title: "7. Security",
 content: [
 "We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access. Our security measures include:",
 ],
 list: [
 "Encrypted data storage and transmission (TLS/SSL)",
 "Access controls that limit who in our team can view your information",
 "Regular review of our data handling and storage practices",
 ],
 footer:
 "While we take all reasonable precautions, no method of electronic storage or transmission over the internet is 100% secure. If you believe your information has been compromised, please contact us immediately.",
 },
 {
 id: "updates",
 title: "8. Policy Updates",
 content: [
 "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable law. When we make material changes, we will update the 'Last Updated' date at the top of this page.",
 "We encourage you to check this page periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.",
 ],
 },
 {
 id: "contact",
 title: "9. Contact Us",
 content: [
 "If you have any questions, concerns, or requests relating to this Privacy Policy or how we handle your personal information, please contact us:",
 ],
 contactBlock: true,
 },
];

export default function PrivacyPolicyPage() {
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
 Privacy Policy
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
 This policy applies to Buy Builder Direct. It is written
 in plain English to help you understand your rights and how we
 handle your data. If anything is unclear, please reach out to us
 directly.
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
 Buy Builder Direct — Privacy Enquiries
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
 You may also contact the Office of the Australian
 Information Commissioner (OAIC) at{" "}
 <a
 href="https://www.oaic.gov.au"
 target="_blank"
 rel="noopener noreferrer"
 className="underline underline-offset-2"
 style={{ color: "#A3A3A3" }}
 >
 www.oaic.gov.au
 </a>{" "}
 if you wish to lodge a complaint.
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
