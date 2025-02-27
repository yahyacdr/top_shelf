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

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Simple seed-based random number generator
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Function to generate a random number based on input and excludes some set of numbers
function getRandomNumberBased(min, max, exclude, seed) {
  let availableNumbers = [];

  // Create an array of available numbers
  for (let i = min; i <= max; i++) {
    if (!exclude.includes(i)) {
      availableNumbers.push(i);
    }
  }

  // Generate a random index based on the seed
  let randomIndex = Math.floor(seededRandom(seed) * availableNumbers.length);
  return availableNumbers[randomIndex];
}

function hexToRgba(hex, alpha = 1) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
  isObjectEmpty,
  getRandomNumberBased,
  hexToRgba,
};
