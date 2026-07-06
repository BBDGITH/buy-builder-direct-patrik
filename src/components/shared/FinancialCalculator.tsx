"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FinancialCalculator() {
  // Configurable states (initially matching screenshot values)
  const [weeklyRent, setWeeklyRent] = useState(350);
  const [rooms, setRooms] = useState(8);
  const [loanAmount, setLoanAmount] = useState(925225);
  const [interestRate, setInterestRate] = useState(7.0);

  // Constants
  const marginalTaxRate = 0.39; // 39%
  const depreciationDeduction = 28794;
  const loanTermYears = 30;

  // Calculated Income
  const annualRentPerRoom = weeklyRent * 52;
  const totalAnnualRent = annualRentPerRoom * rooms;

  // Expenses (using percentages or fixed based on screenshot)
  const councilRates = 2000;
  const insurance = 2500;
  const propertyManagement = totalAnnualRent * 0.08; // 8%
  const maintenance = totalAnnualRent * 0.05; // 5%
  const utilities = totalAnnualRent * 0.05; // 5%
  const totalExpenses =
    councilRates + insurance + propertyManagement + maintenance + utilities;

  const netRentalIncome = totalAnnualRent - totalExpenses;

  // Yield approximations (based on implied purchase price ~ $1,321,750 for these yields to match)
  // Let's use standard property value = loanAmount / 0.70 to approximate (70% LVR)
  const propertyValue = loanAmount / 0.7;
  const grossYield = (totalAnnualRent / propertyValue) * 100;
  const netYield = (netRentalIncome / propertyValue) * 100;

  // P&I Loan Calculation (Approximate standard amortization formula)
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPayment =
    (loanAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  const annualLoanRepayment = monthlyPayment * 12;

  const netCashflowAfterFinance = netRentalIncome - annualLoanRepayment;

  // Tax Benefits
  const depreciationRefund = depreciationDeduction * marginalTaxRate;
  const finalTakeaway = netCashflowAfterFinance + depreciationRefund;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl mx-auto"
      style={{
        background: "#FDFDFD",
        border: "1px solid #E5E7EB",
        color: "#1A1A1A",
      }}
    >
      <div className="p-8 border-b border-gray-200 bg-white">
        <h2 className="text-3xl font-black mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Interactive ROI Calculator
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Adjust the parameters below to see how rent, room count, and finance details affect your projected takeaway.
        </p>

        {/* Sliders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rent Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-gray-400 tracking-widest uppercase">Weekly Rent</label>
              <span className="font-bold text-emerald-600">${weeklyRent}/wk</span>
            </div>
            <input
              type="range"
              min="150"
              max="600"
              step="10"
              value={weeklyRent}
              onChange={(e) => setWeeklyRent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Rooms Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-gray-400 tracking-widest uppercase">Rooms</label>
              <span className="font-bold text-emerald-600">{rooms} Rooms</span>
            </div>
            <input
              type="range"
              min="2"
              max="12"
              step="1"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Loan Amount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-gray-400 tracking-widest uppercase">Loan Amount</label>
              <span className="font-bold text-emerald-600">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="300000"
              max="2000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-gray-400 tracking-widest uppercase">Interest Rate</label>
              <span className="font-bold text-emerald-600">{interestRate.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="12.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Col - Breakdown */}
        <div className="p-8 border-r border-gray-200 flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
              Rental Income
            </h3>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>{rooms} rooms &times; ${weeklyRent}/wk</span>
              <span className="text-emerald-600">{formatCurrency(totalAnnualRent)}/yr</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
              Annual Expenses
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Council rates</span>
                <span className="text-red-600">- {formatCurrency(councilRates)}</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance (building + landlord)</span>
                <span className="text-red-600">- {formatCurrency(insurance)}</span>
              </div>
              <div className="flex justify-between">
                <span>Property management</span>
                <span className="text-red-600">- {formatCurrency(propertyManagement)}</span>
              </div>
              <div className="flex justify-between">
                <span>Maintenance &amp; repairs</span>
                <span className="text-red-600">- {formatCurrency(maintenance)}</span>
              </div>
              <div className="flex justify-between">
                <span>Utilities (landlord-paid)</span>
                <span className="text-red-600">- {formatCurrency(utilities)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200 font-semibold text-gray-800">
                <span>Total Expenses</span>
                <span className="text-red-600">- {formatCurrency(totalExpenses)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
              After Expenses
            </h3>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span>Net Rental Income</span>
              <span className="text-emerald-600">+ {formatCurrency(netRentalIncome)} / yr</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
                Gross Yield
              </p>
              <p className="text-xl font-bold">{grossYield.toFixed(2)}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
                Net Yield
              </p>
              <p className="text-xl font-bold text-emerald-600">{netYield.toFixed(2)}%</p>
            </div>
          </div>

          {/* Cashflow Summary Box */}
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 mt-2">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
              Net Cashflow After Finance
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Loan {formatCurrency(loanAmount)} &middot; {interestRate.toFixed(2)}% p.a. &middot; {loanTermYears}yr P&I
            </p>
            <div className="flex items-end gap-3 mb-3">
              <span className={`text-4xl font-black ${netCashflowAfterFinance >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                {netCashflowAfterFinance >= 0 ? "+" : ""}{formatCurrency(netCashflowAfterFinance)}
              </span>
              <span className="text-sm text-gray-500 font-medium mb-1">/ year</span>
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full ${netCashflowAfterFinance >= 0 ? "bg-emerald-800 text-white" : "bg-red-100 text-red-800"} text-xs font-semibold`}>
              {netCashflowAfterFinance >= 0 ? "+" : ""}{formatCurrency(netCashflowAfterFinance / 52)} / week
            </div>
          </div>
        </div>

        {/* Right Col - Final Takeaway */}
        <div
          className="p-8 flex flex-col justify-between"
          style={{ background: "linear-gradient(145deg, #1A3525 0%, #214330 100%)", color: "white" }}
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-bold text-emerald-300 tracking-widest uppercase">
                After Finance + Tax Benefits
              </h3>
              <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold uppercase tracking-widest rounded-full">
                Final Takeaway
              </span>
            </div>
            <p className="text-sm text-emerald-100/80 mb-6 leading-relaxed">
              Net cashflow {formatCurrency(netCashflowAfterFinance)} + tax benefits {formatCurrency(depreciationRefund)} at {marginalTaxRate * 100}% marginal rate
            </p>
            
            <div className="flex items-end gap-3 mb-4">
              <span className={`text-5xl md:text-6xl font-black ${finalTakeaway < 0 && "text-red-400"}`}>
                {finalTakeaway >= 0 ? "+" : ""}{formatCurrency(finalTakeaway)}
              </span>
              <span className="text-sm text-emerald-100/70 font-medium mb-2">/ year</span>
            </div>
            
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${finalTakeaway >= 0 ? "bg-yellow-500 text-yellow-900" : "bg-red-500 text-white"} text-sm font-bold`}>
              {finalTakeaway >= 0 ? "+" : ""}{formatCurrency(finalTakeaway / 52)} / week
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/20">
            <h3 className="text-xs font-bold text-emerald-300 tracking-widest uppercase mb-4">
              How We Got Here
            </h3>
            <div className="space-y-3 text-sm text-emerald-50">
              <div className="flex justify-between">
                <span>Net cashflow after finance</span>
                <span className={netCashflowAfterFinance < 0 ? "text-red-300" : ""}>{formatCurrency(netCashflowAfterFinance)}</span>
              </div>
              <div className="flex justify-between">
                <span>Depreciation refund ({formatCurrency(depreciationDeduction)} deduction &times; {marginalTaxRate * 100}%)</span>
                <span>+ {formatCurrency(depreciationRefund)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/20 font-bold text-white">
                <span>Final takeaway / yr</span>
                <span className={finalTakeaway < 0 ? "text-red-300" : ""}>{finalTakeaway >= 0 ? "+" : ""}{formatCurrency(finalTakeaway)}</span>
              </div>
            </div>
            <p className="text-xs text-emerald-200/60 mt-6 leading-relaxed">
              Tax benefits are estimates based on your marginal rate. Actual ATO refund depends on your personal tax position — confirm with your accountant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
