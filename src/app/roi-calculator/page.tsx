import type { Metadata } from "next";
import Link from "next/link";
import FinancialCalculator from "@/components/shared/FinancialCalculator";

export const metadata: Metadata = {
  title: "ROI Calculator | Buy Builder Direct",
  description:
    "Model rental income, expenses, finance, and tax benefits for builder-direct investment properties with the BBD Cashflow Lab.",
};

export default function RoiCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-28 pb-24">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#DC2626" }}>
            BBD Cashflow Lab
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Calculate Your Potential Returns
          </h1>
          <p className="text-lg" style={{ color: "#A3A3A3" }}>
            See how a direct-to-builder investment can accelerate your cashflow.
            Adjust house price, rent, rooms, and interest rate to model your scenario.
          </p>
        </div>

        <FinancialCalculator showCta={false} />

        <div className="mt-12 text-center">
          <p className="text-sm mb-5" style={{ color: "#A3A3A3" }}>
            Ready to explore builder-direct options for your budget and state?
          </p>
          <Link href="/contact" className="btn-primary">
            Get Your Free Savings Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
