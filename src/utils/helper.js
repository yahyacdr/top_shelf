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

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getRandomNumberBetween(min, max, exclude = []) {
  let randomNumber;
  do {
    randomNumber = Math.round(Math.random() * (max - min)) + min;
  } while (exclude.includes(randomNumber));
  return randomNumber;
}

function getRandomNumber(num = 1) {
  return Math.floor(Math.random() * num);
}

function getRandomRate(min, max) {
  return getFraction(Math.random() * (max - min) + min, 1);
}

function getFraction(num, max = Infinity) {
  num = String(num);
  return Number(num.split(".")[0] + "." + num.split(".")[1].slice(0, max));
}

function containsArray(mainArray) {
  return mainArray.some((arr) => Array.isArray(arr));
}

export {
  formatCurrency,
  formatCurrencyWithCommas,
  formattPercent,
  formatDate,
  getRandomNumberBetween,
  getRandomNumber,
  getRandomRate,
  getFraction,
  containsArray,
};
