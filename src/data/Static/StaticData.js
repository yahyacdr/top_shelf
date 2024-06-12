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
import customer_service_icon from "../images/customer_service_icon.svg";
import security_icon from "../images/security_icon.svg";
import best_value_icon from "../images/best_value_icon.svg";
import delivery_insurance_icon from "../images/delivery_insurance_icon.svg";
import highest_quality_icon from "../images/highest_quality_icon.svg";
import trust_icon from "../images/trust_icon.svg";
import indica_icon from "../images/indica_icon.png";
import sativa_icon from "../images/sativa_icon.png";
import hybrids_icon from "../images/hybrids_icon.png";
import edu_img_1 from "../images/education_img_1.png";
import edu_img_2 from "../images/education_img_2.png";
import edu_img_3 from "../images/education_img_3.png";

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
  {
    id: 8,
    img: weed_img_6,
    type: "concentrate",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rate: 4.6,
    numRate: 135,
    label: false,
    price: 200,
    discount: 98,
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
    name: "relax",
    desc: "Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.",
  },
];

export const featureCards2 = [
  {
    id: 0,
    img: customer_service_icon,
    title: "customer service",
    desc: `Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.`,
  },
  {
    id: 1,
    img: security_icon,
    title: "security",
    desc: `When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.`,
  },
  {
    id: 2,
    img: best_value_icon,
    title: "best value",
    desc: `We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.`,
  },
  {
    id: 3,
    img: delivery_insurance_icon,
    title: "delivery insurance",
    desc: `Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.`,
  },
  {
    id: 4,
    img: highest_quality_icon,
    title: "highest quality",
    desc: `All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.`,
  },
  {
    id: 5,
    img: trust_icon,
    title: "trust",
    desc: `With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.`,
  },
];

export const weedTypes = [
  {
    id: 0,
    img: indica_icon,
    title: "indica",
    desc: `This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.`,
  },
  {
    id: 1,
    img: sativa_icon,
    title: "sativa",
    desc: `Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day.`,
  },
  {
    id: 2,
    img: hybrids_icon,
    title: "hybrids",
    desc: `Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds).`,
  },
];

export const eduCards = [
  {
    id: 0,
    img: edu_img_1,
    title: "12 Mistakes To Avoid When Buying Cannabis Online",
    desc: `Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …`,
    date: "january 24, 2023",
  },
  {
    id: 1,
    img: edu_img_2,
    title: "How To Store Cannabis and Keep it Fresh and Potent?",
    desc: `Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ...`,
    date: "january 20, 2023",
  },
  {
    id: 2,
    img: edu_img_3,
    title:
      "The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips",
    desc: `Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …`,
    date: "january 19, 2023",
  },
];

export const filters = [
  "Sales",
  "Cannabis",
  "Pre-rolls",
  "Cbd oil",
  "Magic mushrooms",
  "Extracts",
  "Edibles",
  "Vape pens",
  "Accessories",
  "Bath & body",
  "Bundles",
  "Wholesale",
];
