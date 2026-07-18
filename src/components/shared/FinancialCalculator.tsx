"use client";

import { useState } from "react";

export default function FinancialCalculator() {
  const [weeklyRent, setWeeklyRent] = useState(350);
  const [rooms, setRooms] = useState(8);
  const [loanAmount, setLoanAmount] = useState(925225);
  const [interestRate, setInterestRate] = useState(7.0);

  const marginalTaxRate = 0.39;
  const depreciationDeduction = 28794;
  const loanTermYears = 30;

  const annualRentPerRoom = weeklyRent * 52;
  const totalAnnualRent = annualRentPerRoom * rooms;

  const councilRates = 2000;
  const insurance = 2500;
  const propertyManagement = totalAnnualRent * 0.08;
  const maintenance = totalAnnualRent * 0.05;
  const utilities = totalAnnualRent * 0.05;
  const totalExpenses =
    councilRates + insurance + propertyManagement + maintenance + utilities;

  const netRentalIncome = totalAnnualRent - totalExpenses;

  const propertyValue = loanAmount / 0.7;
  const grossYield = (totalAnnualRent / propertyValue) * 100;
  const netYield = (netRentalIncome / propertyValue) * 100;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPayment =
    (loanAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  const annualLoanRepayment = monthlyPayment * 12;

  const netCashflowAfterFinance = netRentalIncome - annualLoanRepayment;
  const depreciationRefund = depreciationDeduction * marginalTaxRate;
  const finalTakeaway = netCashflowAfterFinance + depreciationRefund;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(val);

  const sliderStyle = (pct: number): React.CSSProperties => ({
    accentColor: "#DC2626",
    background: `linear-gradient(to right, #DC2626 ${pct}%, #2a2a2a 0%)`,
  });

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
      {/* Header */}
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
          Model rent, rooms, and finance — built for builder-direct investors. Not a lookalike green spreadsheet widget.
        </p>
      </div>

      {/* Sliders */}
      <div className="p-6 md:px-8 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold tracking-widest uppercase" style={{ color: "#888" }}>
              Weekly Rent
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
              Loan Amount
            </label>
            <span className="font-bold" style={{ color: "#DC2626" }}>
              {formatCurrency(loanAmount)}
            </span>
          </div>
          <input
            type="range"
            min={300000}
            max={2000000}
            step={10000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={sliderStyle(((loanAmount - 300000) / 1700000) * 100)}
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
        {/* Breakdown */}
        <div className="p-6 md:p-8 flex flex-col gap-7" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#888" }}>
              Rental Income
            </h3>
            <div className="flex justify-between text-sm font-medium">
              <span style={{ color: "#C4C4C4" }}>
                {rooms} rooms × ${weeklyRent}/wk
              </span>
              <span style={{ color: "#FFFFFF" }}>{formatCurrency(totalAnnualRent)}/yr</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#888" }}>
              Annual Expenses
            </h3>
            <div className="space-y-2.5 text-sm" style={{ color: "#A3A3A3" }}>
              {[
                ["Council rates", councilRates],
                ["Insurance", insurance],
                ["Property management", propertyManagement],
                ["Maintenance & repairs", maintenance],
                ["Utilities", utilities],
              ].map(([label, val]) => (
                <div key={String(label)} className="flex justify-between">
                  <span>{label}</span>
                  <span style={{ color: "#F87171" }}>- {formatCurrency(Number(val))}</span>
                </div>
              ))}
              <div
                className="flex justify-between pt-3 font-semibold"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#FFFFFF" }}
              >
                <span>Total Expenses</span>
                <span style={{ color: "#DC2626" }}>- {formatCurrency(totalExpenses)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-semibold">
            <span>Net Rental Income</span>
            <span style={{ color: "#22C55E" }}>+ {formatCurrency(netRentalIncome)} / yr</span>
          </div>

          <div
            className="flex justify-between items-center pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#888" }}>
                Gross Yield
              </p>
              <p className="text-xl font-bold">{grossYield.toFixed(2)}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#888" }}>
                Net Yield
              </p>
              <p className="text-xl font-bold" style={{ color: "#DC2626" }}>
                {netYield.toFixed(2)}%
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
              Loan {formatCurrency(loanAmount)} · {interestRate.toFixed(2)}% p.a. · {loanTermYears}yr P&amp;I
            </p>
            <p
              className="text-3xl font-black"
              style={{ color: netCashflowAfterFinance >= 0 ? "#FFFFFF" : "#F87171" }}
            >
              {netCashflowAfterFinance >= 0 ? "+" : ""}
              {formatCurrency(netCashflowAfterFinance)}
              <span className="text-sm font-medium ml-2" style={{ color: "#888" }}>
                / year
              </span>
            </p>
          </div>
        </div>

        {/* Final takeaway — red/black panel (not green competitor look) */}
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
              Net cashflow {formatCurrency(netCashflowAfterFinance)} + tax benefits{" "}
              {formatCurrency(depreciationRefund)} at {marginalTaxRate * 100}% marginal rate
            </p>

            <p
              className="text-4xl md:text-5xl font-black leading-none"
              style={{ color: finalTakeaway >= 0 ? "#FFFFFF" : "#F87171", fontFamily: "var(--font-display)" }}
            >
              {finalTakeaway >= 0 ? "+" : ""}
              {formatCurrency(finalTakeaway)}
            </p>
            <p className="text-sm mt-2" style={{ color: "#888" }}>
              / year · about {formatCurrency(finalTakeaway / 52)} / week
            </p>
          </div>

          <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(220,38,38,0.25)" }}>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F87171" }}>
              How We Got Here
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#C4C4C4" }}>
              <div className="flex justify-between gap-4">
                <span>Net cashflow after finance</span>
                <span>{formatCurrency(netCashflowAfterFinance)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Depreciation refund (est.)</span>
                <span style={{ color: "#22C55E" }}>+ {formatCurrency(depreciationRefund)}</span>
              </div>
              <div
                className="flex justify-between gap-4 pt-3 font-bold text-white"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span>Final takeaway / yr</span>
                <span>
                  {finalTakeaway >= 0 ? "+" : ""}
                  {formatCurrency(finalTakeaway)}
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
    </div>
  );
}
