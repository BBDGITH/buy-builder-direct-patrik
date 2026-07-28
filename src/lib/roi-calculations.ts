/** Shared ROI / cashflow formulas — aligned with BBD reference model (image 4). */

export const DEFAULTS = {
  weeklyRent: 370,
  rooms: 8,
  housePrice: 1_401_821,
  lvr: 0.7,
  interestRate: 7.0,
  loanTermYears: 30,
  marginalTaxRate: 0.39,
  councilRates: 2_000,
  insurance: 5_000,
  maintenance: 4_000,
  propertyManagementRate: 0.08,
  utilitiesRate: 0.05,
  /** Building depreciation ≈ 2.074% of property value at default scenario */
  depreciationRate: 0.02074,
} as const;

export type RoiInputs = {
  weeklyRent: number;
  rooms: number;
  housePrice: number;
  lvr: number;
  interestRate: number;
  loanTermYears?: number;
  marginalTaxRate?: number;
};

export type RoiResults = {
  totalAnnualRent: number;
  councilRates: number;
  insurance: number;
  propertyManagement: number;
  maintenance: number;
  utilities: number;
  totalExpenses: number;
  netRentalIncome: number;
  grossYield: number;
  netYield: number;
  loanAmount: number;
  annualLoanRepayment: number;
  netCashflowAfterFinance: number;
  weeklyCashflowAfterFinance: number;
  depreciationDeduction: number;
  depreciationRefund: number;
  finalTakeaway: number;
  weeklyFinalTakeaway: number;
};

export function calcAnnualLoanRepayment(
  principal: number,
  annualRatePct: number,
  years: number
): number {
  if (principal <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return (principal / n) * 12;
  const monthly =
    (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  return monthly * 12;
}

export function calculateRoi(inputs: RoiInputs): RoiResults {
  const {
    weeklyRent,
    rooms,
    housePrice,
    lvr,
    interestRate,
    loanTermYears = DEFAULTS.loanTermYears,
    marginalTaxRate = DEFAULTS.marginalTaxRate,
  } = inputs;

  const totalAnnualRent = weeklyRent * 52 * rooms;
  const councilRates = DEFAULTS.councilRates;
  const insurance = DEFAULTS.insurance;
  const propertyManagement = totalAnnualRent * DEFAULTS.propertyManagementRate;
  const maintenance = DEFAULTS.maintenance;
  const utilities = totalAnnualRent * DEFAULTS.utilitiesRate;
  const totalExpenses =
    councilRates + insurance + propertyManagement + maintenance + utilities;

  const netRentalIncome = totalAnnualRent - totalExpenses;
  const grossYield = housePrice > 0 ? (totalAnnualRent / housePrice) * 100 : 0;
  const netYield = housePrice > 0 ? (netRentalIncome / housePrice) * 100 : 0;

  const loanAmount = Math.round(housePrice * lvr);
  const annualLoanRepayment = calcAnnualLoanRepayment(
    loanAmount,
    interestRate,
    loanTermYears
  );

  const netCashflowAfterFinance = netRentalIncome - annualLoanRepayment;
  const weeklyCashflowAfterFinance = netCashflowAfterFinance / 52;

  const depreciationDeduction = Math.round(housePrice * DEFAULTS.depreciationRate);
  const depreciationRefund = Math.round(depreciationDeduction * marginalTaxRate);
  const finalTakeaway = netCashflowAfterFinance + depreciationRefund;
  const weeklyFinalTakeaway = finalTakeaway / 52;

  return {
    totalAnnualRent,
    councilRates,
    insurance,
    propertyManagement,
    maintenance,
    utilities,
    totalExpenses,
    netRentalIncome,
    grossYield,
    netYield,
    loanAmount,
    annualLoanRepayment,
    netCashflowAfterFinance,
    weeklyCashflowAfterFinance,
    depreciationDeduction,
    depreciationRefund,
    finalTakeaway,
    weeklyFinalTakeaway,
  };
}

export function formatAud(val: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(val);
}
