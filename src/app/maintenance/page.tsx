import { fetchRemoteConfig } from "@/lib/ab";

export const dynamic = "force-dynamic";

export default async function MaintenancePage() {
 const { alert: message } = await fetchRemoteConfig();

 return (
  <div
   className="flex min-h-screen flex-col items-center justify-center text-center px-6"
   style={{ background: "#0A0A0A" }}
  >
   <div className="max-w-lg">
    {/* Icon */}
    <div
     className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full"
     style={{ background: "rgba(220,38,38,0.12)", border: "1px solid rgba(220,38,38,0.3)" }}
    >
     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
     </svg>
    </div>

    {/* Heading */}
    <h1
     className="text-4xl font-bold mb-4 md:text-5xl"
     style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
    >
     Site Under Maintenance
    </h1>

    {/* Custom message or default */}
    <p className="text-lg leading-relaxed mb-8" style={{ color: "#A3A3A3" }}>
     {message ?? "We're making some improvements. We'll be back shortly — sorry for the inconvenience."}
    </p>

    {/* Contact fallback */}
    <div
     className="rounded-xl p-6"
     style={{ background: "#141414", border: "1px solid rgba(220,38,38,0.2)" }}
    >
     <p className="text-sm font-semibold mb-3" style={{ color: "#DC2626" }}>
      Need to reach us urgently?
     </p>
     <a
      href="tel:+61489995725"
      className="block text-xl font-bold mb-1 hover:text-[#DC2626] transition-colors"
      style={{ color: "#FFFFFF" }}
     >
      +61 489 995 725
     </a>
     <a
      href="mailto:info@buybuilderdirect.com.au"
      className="text-sm hover:text-white transition-colors"
      style={{ color: "#A3A3A3" }}
     >
      info@buybuilderdirect.com.au
     </a>
    </div>
   </div>
  </div>
 );
}
