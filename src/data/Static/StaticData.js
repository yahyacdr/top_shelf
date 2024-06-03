import fast_truck from "../images/truck-fast.svg";
import safe_home from "../images/safe-home.svg";
import coin from "../images/coin.svg";
import review_img_1 from "../images/reviews_img_1.png";
import weed_img_1 from "../images/image_12_prev_ui_1.png";
import weed_img_2 from "../images/image_13_prev_ui_1.png";
import weed_img_3 from "../images/image_9_prev_ui_2.png";
import weed_img_4 from "../images/image_8_prev_ui_2.png";
import weed_img_5 from "../images/image_15_prev_ui_1.png";
import weed_img_6 from "../images/image_14_prev_ui_1.png";
import register_img from "../images/register_img.svg";
import shop_img from "../images/shop_img.svg";
import make_payment_img from "../images/make_payment_img.svg";
import relax_img from "../images/relax_img.svg";

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
    img: weed_img_2,
    type: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rate: 4.6,
    numRate: 135,
    label: "indica 70%",
    price: 200,
    discount: 98,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 0,
    offer: false,
  },
  {
    id: 1,
    img: weed_img_1,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 10,
    offer: false,
  },
  {
    id: 2,
    img: weed_img_1,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 15,
    offer: false,
  },
  {
    id: 3,
    img: weed_img_1,
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
    offer: "$60 ounce",
  },
  {
    id: 4,
    img: weed_img_5,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 15,
    offer: false,
  },
  {
    id: 5,
    img: weed_img_3,
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
    quantity: 10,
    offer: "$60 ounce",
  },
  {
    id: 6,
    img: weed_img_4,
    type: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rate: 4.6,
    numRate: 135,
    label: "indica 70%",
    price: 200,
    discount: 98,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 0,
    offer: false,
  },
  {
    id: 7,
    img: weed_img_6,
    type: "flower",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rate: 4.6,
    numRate: 135,
    label: "sative 100%",
    price: 80,
    discount: 0,
    get currentPrice() {
      return this.price - this.discount;
    },
    quantity: 15,
    offer: false,
  },
];

export const testimonials = [
  {
    id: 0,
    img: review_img_1,
    name: "vikki starr",
    numStars: 4,
    testimonial:
      "Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.",
    date: "january 15, 2023",
  },
  {
    id: 1,
    img: review_img_1,
    name: "terry baskey",
    numStars: 5,
    testimonial: "Best damn place to buy your canabis at great prices",
    date: "january 5, 2023",
  },
  {
    id: 2,
    img: review_img_1,
    name: "terry baskey",
    numStars: 5,
    testimonial: "Best damn place to buy your canabis at great prices",
    date: "january 5, 2023",
  },
  {
    id: 3,
    img: review_img_1,
    name: "vikki starr",
    numStars: 4,
    testimonial:
      "Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.",
    date: "january 15, 2023",
  },
  {
    id: 4,
    img: review_img_1,
    name: "terry baskey",
    numStars: 5,
    testimonial: "Best damn place to buy your canabis at great prices",
    date: "january 5, 2023",
  },
  {
    id: 5,
    img: review_img_1,
    name: "terry baskey",
    numStars: 5,
    testimonial: "Best damn place to buy your canabis at great prices",
    date: "january 5, 2023",
  },
];

export const howToCards = [
  {
    id: 0,
    img: register_img,
    name: "register",
    desc: "Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
  },
  {
    id: 1,
    img: shop_img,
    name: "shop",
    desc: "Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.",
  },
  {
    id: 2,
    img: make_payment_img,
    name: "make payment",
    desc: "Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.",
  },
  {
    id: 3,
    img: relax_img,
    name: "make payment",
    desc: "Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.",
  },
];
