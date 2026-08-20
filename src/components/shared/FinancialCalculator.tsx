"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LeadLink from "@/components/shared/LeadLink";
import {
  DEFAULTS,
  calculateRoi,
  formatAud,
} from "@/lib/roi-calculations";

function sliderStyle(pct: number): React.CSSProperties {
  return {
    accentColor: "#DC2626",
    background: `linear-gradient(to right, #DC2626 ${pct}%, #2a2a2a 0%)`,
  };
}

export default function FinancialCalculator({ showCta = true }: { showCta?: boolean }) {
  const [weeklyRent, setWeeklyRent] = useState<number>(DEFAULTS.weeklyRent);
  const [rooms, setRooms] = useState<number>(DEFAULTS.rooms);
  const [housePrice, setHousePrice] = useState<number>(DEFAULTS.housePrice);
  const [interestRate, setInterestRate] = useState<number>(DEFAULTS.interestRate);

  const r = useMemo(
    () =>
      calculateRoi({
        weeklyRent,
        rooms,
        housePrice,
        lvr: DEFAULTS.lvr,
        interestRate,
      }),
    [weeklyRent, rooms, housePrice, interestRate]
  );

  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-5xl mx-auto"
      style={{
        background: "#141414",
        border: "1px solid rgba(220,38,38,0.3)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        color: "#FFFFFF",
      }}
    >
      <div
        className="px-6 md:px-8 py-6"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "linear-gradient(90deg, rgba(220,38,38,0.12) 0%, transparent 70%)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "#DC2626" }}>
              BBD Cashflow Lab
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Interactive ROI Calculator
            </h2>
          </div>
          <span
            className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "rgba(220,38,38,0.15)", color: "#F87171", border: "1px solid rgba(220,38,38,0.35)" }}
          >
            Scenario modelling
          </span>
        </div>
        <p className="text-sm mt-3 max-w-2xl" style={{ color: "#A3A3A3" }}>
          Model rent, rooms, house price, and finance — built for builder-direct investors.
        </p>
      </div>

      <div className="p-6 md:px-8 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold tracking-widest uppercase" style={{ color: "#888" }}>
              House Price
            </label>
            <span className="font-bold" style={{ color: "#DC2626" }}>
              {formatAud(housePrice)}
            </span>
          </div>
          <input
            type="range"
            min={600000}
            max={2500000}
            step={10000}
            value={housePrice}
            onChange={(e) => setHousePrice(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={sliderStyle(((housePrice - 600000) / 1900000) * 100)}
          />
          <p className="text-[11px] mt-1" style={{ color: "#666" }}>
            Loan at {(DEFAULTS.lvr * 100).toFixed(0)}% LVR: {formatAud(r.loanAmount)}
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold tracking-widest uppercase" style={{ color: "#888" }}>
              Weekly Rent (per room)
            </label>
            <span className="font-bold" style={{ color: "#DC2626" }}>
              ${weeklyRent}/wk
            </span>
          </div>
          <input
            type="range"
            min={150}
            max={600}
            step={10}
            value={weeklyRent}
            onChange={(e) => setWeeklyRent(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={sliderStyle(((weeklyRent - 150) / 450) * 100)}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold tracking-widest uppercase" style={{ color: "#888" }}>
              Rooms
            </label>
            <span className="font-bold" style={{ color: "#DC2626" }}>
              {rooms} Rooms
            </span>
          </div>
          <input
            type="range"
            min={2}
            max={12}
            step={1}
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={sliderStyle(((rooms - 2) / 10) * 100)}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold tracking-widest uppercase" style={{ color: "#888" }}>
              Interest Rate
            </label>
            <span className="font-bold" style={{ color: "#DC2626" }}>
              {interestRate.toFixed(2)}%
            </span>
          </div>
          <input
            type="range"
            min={2}
            max={12}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={sliderStyle(((interestRate - 2) / 10) * 100)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="p-6 md:p-8 flex flex-col gap-7 md:border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#888" }}>
              Rental Income
            </h3>
            <div className="flex justify-between text-sm font-medium">
              <span style={{ color: "#C4C4C4" }}>
                {rooms} rooms × ${weeklyRent}/wk
              </span>
              <span style={{ color: "#22C55E" }}>{formatAud(r.totalAnnualRent)}/yr</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#888" }}>
              Annual Expenses
            </h3>
            <div className="space-y-2.5 text-sm" style={{ color: "#A3A3A3" }}>
              {[
                ["Council rates", r.councilRates],
                ["Insurance (building + landlord)", r.insurance],
                ["Property management (8%)", r.propertyManagement],
                ["Maintenance & repairs", r.maintenance],
                ["Utilities (landlord-paid, 5%)", r.utilities],
              ].map(([label, val]) => (
                <div key={String(label)} className="flex justify-between gap-4">
                  <span>{label}</span>
                  <span style={{ color: "#F87171" }}>- {formatAud(Number(val))}</span>
                </div>
              ))}
              <div
                className="flex justify-between pt-3 font-semibold"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF" }}
              >
                <span>Total Expenses</span>
                <span style={{ color: "#DC2626" }}>- {formatAud(r.totalExpenses)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-semibold">
            <span>Net Rental Income</span>
            <span style={{ color: "#22C55E" }}>+ {formatAud(r.netRentalIncome)} / yr</span>
          </div>

          <div
            className="flex justify-between items-center pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#888" }}>
                Gross Yield
              </p>
              <p className="text-xl font-bold">{r.grossYield.toFixed(2)}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#888" }}>
                Net Yield
              </p>
              <p className="text-xl font-bold" style={{ color: "#DC2626" }}>
                {r.netYield.toFixed(2)}%
              </p>
            </div>
          </div>

          <div
            className="p-5 rounded-xl"
            style={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#888" }}>
              Net Cashflow After Finance
            </h3>
            <p className="text-xs mb-3" style={{ color: "#666" }}>
              Loan {formatAud(r.loanAmount)} · {interestRate.toFixed(2)}% p.a. · {DEFAULTS.loanTermYears}yr P&amp;I
            </p>
            <p
              className="text-3xl font-black"
              style={{ color: r.netCashflowAfterFinance >= 0 ? "#FFFFFF" : "#F87171" }}
            >
              {r.netCashflowAfterFinance >= 0 ? "+" : ""}
              {formatAud(r.netCashflowAfterFinance)}
              <span className="text-sm font-medium ml-2" style={{ color: "#888" }}>
                / year
              </span>
            </p>
            <p className="text-xs mt-2" style={{ color: "#22C55E" }}>
              ≈ {formatAud(r.weeklyCashflowAfterFinance)} / week
            </p>
          </div>
        </div>

        <div
          className="p-6 md:p-8 flex flex-col justify-between"
          style={{
            background: "linear-gradient(160deg, #1a0505 0%, #2a0a0a 40%, #0A0A0A 100%)",
          }}
        >
          <div>
            <div className="flex justify-between items-start mb-5 gap-3">
              <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F87171" }}>
                After Finance + Tax Benefits
              </h3>
              <span
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shrink-0"
                style={{ background: "#DC2626", color: "#fff" }}
              >
                Final Takeaway
              </span>
            </div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#C4C4C4" }}>
              Net cashflow {formatAud(r.netCashflowAfterFinance)} + tax benefits{" "}
              {formatAud(r.depreciationRefund)} at {(DEFAULTS.marginalTaxRate * 100).toFixed(0)}% marginal rate
            </p>

            <p
              className="text-4xl md:text-5xl font-black leading-none"
              style={{ color: r.finalTakeaway >= 0 ? "#FFFFFF" : "#F87171", fontFamily: "var(--font-display)" }}
            >
              {r.finalTakeaway >= 0 ? "+" : ""}
              {formatAud(r.finalTakeaway)}
            </p>
            <p className="text-sm mt-2" style={{ color: "#888" }}>
              / year · ≈ {formatAud(r.weeklyFinalTakeaway)} / week
            </p>
          </div>

          <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(220,38,38,0.25)" }}>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F87171" }}>
              How We Got Here
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#C4C4C4" }}>
              <div className="flex justify-between gap-4">
                <span>Net cashflow after finance</span>
                <span>{formatAud(r.netCashflowAfterFinance)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  Depreciation refund ({formatAud(r.depreciationDeduction)} × {(DEFAULTS.marginalTaxRate * 100).toFixed(0)}%)
                </span>
                <span style={{ color: "#22C55E" }}>+ {formatAud(r.depreciationRefund)}</span>
              </div>
              <div
                className="flex justify-between gap-4 pt-3 font-bold text-white"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span>Final takeaway / yr</span>
                <span>
                  {r.finalTakeaway >= 0 ? "+" : ""}
                  {formatAud(r.finalTakeaway)}
                </span>
              </div>
            </div>
            <p className="text-xs mt-6 leading-relaxed" style={{ color: "#666" }}>
              Estimates only. Tax outcomes depend on your personal position — confirm with your accountant.
              Not financial advice.
            </p>
          </div>
        </div>
      </div>

      {showCta && (
        <div
          className="px-6 md:px-8 py-6 text-center border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(220,38,38,0.06)" }}
        >
          <p className="text-sm mb-4" style={{ color: "#A3A3A3" }}>
            Want a personalised assessment for your scenario?
          </p>
          <LeadLink href="/contact" className="btn-primary inline-block">
            Get Your Free Savings Assessment
          </LeadLink>
        </div>
      )}
    </div>
  );
}
