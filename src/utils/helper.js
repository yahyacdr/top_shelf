/* eslint-disable react/display-name */
import { memo } from "react";

const formatCurrency = memo((currency) => {
  const fixed = Math.floor(currency);
  const float =
    currency % 1 >= 0 && currency % 1 < 10
      ? "0" + (currency % 1)
      : currency % 1;
  return `$${fixed}.${float}`;
});

const formatCurrencyWithCommas = memo((currency) => {
  return formatCurrency(currency).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

const formattPercent = memo((percent) => {
  return `${percent}%`;
});

export { formatCurrency, formatCurrencyWithCommas, formattPercent };
