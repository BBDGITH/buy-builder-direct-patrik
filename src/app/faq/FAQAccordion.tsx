"use client";

import { useState } from "react";

type FAQItem = {
 question: string;
 answer: string;
};

type FAQGroup = {
 category: string;
 items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
 {
 category: "About BBD",
 items: [
 {
 question: "What is Buy Builder Direct?",
 answer:
 "Buy Builder Direct is an Australian platform that connects property investors directly with licensed, vetted builders — cutting out the project marketing layer and the associated fees. We facilitate over 180 investment property builds across all seven states, helping investors save an average of 10–15% compared to buying through a buyer's agent or developer.",
 },
 {
 question: "How long have you been operating?",
 answer:
 "Buy Builder Direct has been operating for over 7 years. We started with a small network of builders in Victoria and Queensland and have since expanded to cover all seven Australian states and territories. Our team has first-hand experience as property investors themselves, which shapes how we run the business.",
 },
 {
 question: "What states do you cover?",
 answer:
 "We have active builder partnerships in all seven states and territories: VIC, NSW, QLD, WA, SA, NT, and TAS. Coverage within each state varies by investment type — for example, our rooming house specialists are concentrated in Victoria, while our house and land network spans all major growth corridors nationally. New builder partnerships are added regularly.",
 },
 {
 question: "Is this a buyer's agent service?",
 answer:
 "No — and that distinction matters. A buyer's agent typically sources existing properties and charges a commission, often 1–3% of the purchase price. Buy Builder Direct does not sell you property; we connect you directly to builders so you purchase from the source. We are a matching and facilitation service, not a licensed real estate agency.",
 },
 {
 question: "Do you offer property management?",
 answer:
 "We don't provide property management directly, but we maintain relationships with specialist property managers for each investment type — particularly co-living and SDA/NDIS, where standard residential managers are not appropriate. We make introductions as part of the handover process so your investment is ready to earn income from day one.",
 },
 ],
 },
 {
 category: "Savings & Fees",
 items: [
 {
 question: "How much can I save?",
 answer:
 "Typical savings range from $15,000 to $60,000+ depending on the size and type of the build. The savings come from eliminating the project marketing layer, which traditionally charges builders 10–20% above the builder's actual price to cover agent commissions, marketing levies, and profit margins. In our most recent annual review, investors saved a combined $2.4M+ across 180+ properties.",
 },
 {
 question: "How does BBD make money?",
 answer:
 "We charge a small, transparent facilitation fee to the builder — not the investor — upon successful introduction and project commencement. This fee is agreed upfront and does not affect the price you pay. Builders value our referral network and are willing to compensate us for quality introductions. You never pay a BBD fee directly.",
 },
 {
 question: "Are there hidden fees?",
 answer:
 "No. Transparency is one of the founding principles of Buy Builder Direct. The price you see in the builder's fixed-price contract is what you pay. There are no marketing levies, no agency commissions, and no BBD fees charged to investors. We encourage you to compare any builder quote you receive through us with a comparable product from a project marketer — the difference speaks for itself.",
 },
 {
 question: "What's included in the builder price?",
 answer:
 "This varies by builder and build type, but typically the fixed-price contract covers all construction costs, standard inclusions as specified, site preparation, and practical completion. Council fees, stamp duty, land costs (for house and land packages), and landscaping may be separate depending on the specific agreement. We walk through every inclusion and exclusion with you before you sign.",
 },
 {
 question: "Can I negotiate the price?",
 answer:
 "Yes, and we actively encourage it. Because you're dealing directly with the builder, there is genuine room to negotiate on inclusions, specifications, and sometimes on the overall price — particularly if you're placing multiple builds or have referral potential. We advise on where negotiation is realistic and help you present your position effectively.",
 },
 ],
 },
 {
 category: "The Process",
 items: [
 {
 question: "How long does the process take?",
 answer:
 "From your first conversation to signing a construction contract typically takes 4–6 weeks. The build itself varies significantly by investment type: house and land packages can be completed in 6–10 months, co-living builds in 8–12 months, and SDA/NDIS builds often take 12–18 months due to compliance requirements. We provide a detailed timeline estimate for your specific project during the matching phase.",
 },
 {
 question: "What information do I need to provide?",
 answer:
 "To get started, we need your investment goals, target state, preferred investment type, available budget, and an indication of your finance position. For the contract phase, you'll need government-issued ID, a signed scope of works, proof of deposit funds or equity, and your finance pre-approval. We guide you through each document as it becomes relevant.",
 },
 {
 question: "Can I choose my own builder?",
 answer:
 "Our platform is specifically designed to introduce you to builders you wouldn't otherwise have access to. If you have a relationship with a builder already, you're welcome to proceed independently. If you would like that builder to be assessed for inclusion in our network, we're happy to put them through our vetting process — contact us to arrange this.",
 },
 {
 question: "What if I'm not happy with the builder match?",
 answer:
 "If the first match doesn't feel right after the introductory meeting, we rematch you at no cost. Our goal is a long-term working relationship, not a forced transaction. The match needs to make sense for both parties — the builder and the investor — and we take both perspectives seriously. We'd rather take more time finding the right fit than rush you into the wrong relationship.",
 },
 {
 question: "What contracts are involved?",
 answer:
 "The primary document is a fixed-price domestic building contract between you and the builder, governed by the building regulations in your state. In Victoria this is typically a HIA or MBA contract; other states have equivalent instruments. You may also sign a simple engagement brief with BBD at the outset. We recommend having a solicitor review the building contract before signing — we can suggest property-savvy solicitors in your state.",
 },
 ],
 },
 {
 category: "Investment Types",
 items: [
 {
 question: "What investment types do you specialise in?",
 answer:
 "We specialise in six investment types: co-living homes, rooming houses, SDA/NDIS housing, house and land packages, custom builds, and multi-unit developments. Each type has its own yield profile, compliance requirements, and ideal markets. Our team can walk you through all six during a free strategy session and help you identify which aligns best with your goals.",
 },
 {
 question: "Are co-living investments legal everywhere?",
 answer:
 "Co-living properties must comply with local council planning regulations, which vary significantly across states and even individual LGAs. In some areas, a standard residential approval is sufficient; in others, you may need a specific permit for a multi-tenancy arrangement. Our builders are familiar with the regulations in their respective markets, and we advise on zoning compliance before any project proceeds.",
 },
 {
 question: "What is SDA/NDIS housing?",
 answer:
 "Specialist Disability Accommodation (SDA) is purpose-built housing for Australians with extreme functional impairments who require a specialist built environment. SDA is funded through the National Disability Insurance Scheme (NDIS), with rental payments set by the National Disability Insurance Agency (NDIA). Returns are typically 8–15%+ and are government-backed, making SDA one of the most yield-stable investment types available in Australia.",
 },
 {
 question: "Can I buy interstate?",
 answer:
 "Absolutely. Many of our investors are based in one state and investing in another — this is common for investors in expensive Sydney and Melbourne markets who target Queensland or Western Australia for yield. We facilitate interstate builds regularly and can recommend professionals (solicitors, accountants, property managers) in the target state to support the transaction remotely.",
 },
 {
 question: "Do you have off-the-plan options?",
 answer:
 "Some of our builder partners have pre-approved or in-progress developments where you can secure an off-the-plan lot or apartment. These are not marketed publicly — they are available exclusively through BBD's investor network. If off-the-plan appeals to you, let us know during the matching process and we'll advise on current availability. Off-the-plan builds still carry our transparent, direct-from-builder pricing.",
 },
 ],
 },
];

export default function FAQAccordion() {
 const [openItems, setOpenItems] = useState<Set<string>>(new Set());

 const toggle = (key: string) => {
 setOpenItems((prev) => {
 const next = new Set(prev);
 if (next.has(key)) {
 next.delete(key);
 } else {
 next.add(key);
 }
 return next;
 });
 };

 return (
 <div className="space-y-12">
 {faqGroups.map((group) => (
 <div key={group.category}>
 {/* Group heading */}
 <h2
 className="text-xl font-bold mb-5 pb-3"
 style={{
 color: "#DC2626",
 fontFamily: "var(--font-display)",
 borderBottom: "1px solid rgba(220,38,38,0.2)",
 }}
 >
 {group.category}
 </h2>

 {/* Items */}
 <div className="space-y-2">
 {group.items.map((item, i) => {
 const key = `${group.category}-${i}`;
 const isOpen = openItems.has(key);

 return (
 <div
 key={key}
 className="rounded-xl overflow-hidden"
 style={{
 background: "#141414",
 border: isOpen
 ? "1px solid rgba(220,38,38,0.3)"
 : "1px solid rgba(255,255,255,0.06)",
 }}
 >
 <button
 onClick={() => toggle(key)}
 className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
 aria-expanded={isOpen}
 >
 <span
 className="font-semibold text-base"
 style={{ color: "#FFFFFF" }}
 >
 {item.question}
 </span>
 <span
 className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition-transform duration-200"
 style={{
 background: isOpen
 ? "#DC2626"
 : "rgba(220,38,38,0.15)",
 color: isOpen ? "#FFFFFF" : "#DC2626",
 transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
 }}
 >
 +
 </span>
 </button>

 {isOpen && (
 <div
 className="px-6 pb-6"
 style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
 >
 <p
 className="pt-4 text-base leading-relaxed"
 style={{ color: "#A3A3A3" }}
 >
 {item.answer}
 </p>
 </div>
 )}
 </div>
 );
 })}
 </div>
 </div>
 ))}
 </div>
 );
}
