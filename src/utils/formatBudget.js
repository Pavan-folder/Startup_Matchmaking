// src/utils/formatBudget.js

export function formatBudget(amount) {
  if (!amount || isNaN(amount)) return "N/A";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
