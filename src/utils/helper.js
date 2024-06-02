export function formatCurrency(currency) {
  const fixed = Math.floor(currency);
  const float =
    currency % 1 >= 0 && currency % 1 < 10
      ? "0" + (currency % 1)
      : currency % 1;
  return `$${fixed}.${float}`;
}
