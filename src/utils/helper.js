/* eslint-disable react/display-name */

function formatCurrency(currency) {
  const fixed = Math.floor(currency);
  const float =
    currency % 1 >= 0 && currency % 1 < 10
      ? "0" + (currency % 1)
      : currency % 1;
  return `$${fixed}.${float}`;
}

function formatCurrencyWithCommas(currency) {
  return formatCurrency(currency).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formattPercent(percent) {
  return `${percent}%`;
}

export { formatCurrency, formatCurrencyWithCommas, formattPercent };
