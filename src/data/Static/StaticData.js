import fast_truck from "../images/truck-fast.svg";
import safe_home from "../images/safe-home.svg";
import coin from "../images/coin.svg";

export const featureCards = [
  {
    id: 0,
    img: fast_truck,
    title: "reliable shipping",
    desc: `Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!`,
  },
  {
    id: 1,
    img: safe_home,
    title: "you're safe with us",
    desc: `Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.`,
  },
  {
    id: 2,
    img: coin,
    title: "best quality & pricing",
    desc: `Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely`,
  },
];

export const buyCards = [
  {
    id: 0,
    img: fast_truck,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "Sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 10,
  },
  {
    id: 1,
    img: fast_truck,
    type: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rate: 4.6,
    numRate: 135,
    label: "Indica 70%",
    price: 200,
    discount: 98,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 0,
  },
  {
    id: 2,
    img: fast_truck,
    type: "flower",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    rate: 4.6,
    numRate: 135,
    label: false,
    price: 200,
    discount: 80,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 15,
  },
  {
    id: 3,
    img: fast_truck,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "Sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 10,
  },
  {
    id: 4,
    img: fast_truck,
    type: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rate: 4.6,
    numRate: 135,
    label: "Indica 70%",
    price: 200,
    discount: 98,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 0,
  },
  {
    id: 5,
    img: fast_truck,
    type: "flower",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    rate: 4.6,
    numRate: 135,
    label: false,
    price: 200,
    discount: 80,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 15,
  },
];
