/* eslint-disable react/display-name */

function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currency);
}

function formatCurrencyWithCommas(currency) {
  return formatCurrency(currency).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formattPercent(percent) {
  return `${percent}%`;
}

export { formatCurrency, formatCurrencyWithCommas, formattPercent };
