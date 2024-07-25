/* eslint-disable react/display-name */
import { memo, useEffect, useState } from "react";
import Card from "../../ui/Card";
import styled from "styled-components";
import Btn from "../../ui/Btn";
import Filter from "../../ui/Filter";
import Divider from "../../ui/Divider";
import useFetchProducts from "../../hooks/useFetchProducts";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";
import { useLocation } from "react-router-dom";
import { StarReviewContext } from "../../utils/context";
import AddIntegra from "./AddIntegra";
import PurchaseBox from "./PurchaseBox";
import CartProvider from "../cart/cartContext";
import PriceReview from "./PriceReview";
import screens from "../../utils/screens";
import FilterProvider from "../../context/filterContext";
import FilterContent from "./FilterContent";
import PostProvider from "../../context/postContext";

const StyledCardDetails = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 12px;
  margin-top: 134px;
  h4 {
    font-size: var(--font-size-medium-100);
    font-weight: 500;
  }
  > span {
    margin-top: 32px;
  }

  .pill-filter {
    column-gap: 12px;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--light-600);
    margin-top: 20px;
    > button {
      width: calc(100% / 3 - 12px);
      text-align: center;
      font-size: var(--font-size-small-50);
      font-weight: 400;
      padding: 7px 10px;
    }
  }

  @media (min-width: ${screens.tablet.xxm}) {
    margin-top: 0;
  }
`;

const Labels = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 8px;
  height: 31px;
`;

const Qualities = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--light-600);
`;

const Quality = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 32px 1fr;
  grid-template-areas: "svg p1" "svg p2";
  column-gap: 11px;
  > svg {
    grid-area: svg;
  }
  > p.type {
    grid-area: p1;
    color: var(--dark-300);
    font-size: var(--font-size-small-50);
    text-transform: uppercase;
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 1px;
    padding-top: 1px;
  }
  > p.🍥 {
    grid-area: p2;
    color: var(--dark-900);
    font-size: var(--font-size-small-100);
    text-transform: capitalize;
  }
`;

const Description = styled.div`
  text-align: left;
  margin-top: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--light-600);
  > p:first-child {
    text-transform: uppercase;
    font-size: var(--font-size-small-50);
    color: var(--dark-300);
    line-height: 150%;
    letter-spacing: 1px;
    font-weight: 300;
    margin-bottom: 8px;
  }
  > p:last-child {
    font-size: var(--font-size-small-100);
    color: var(--dark-600);
    line-height: 150%;
    font-weight: 400;
  }
`;

const Wieghts = styled.div`
  text-align: left;
  margin-top: 20px;
  > p {
    text-transform: uppercase;
    font-size: var(--font-size-small-50);
    color: var(--dark-300);
    line-height: 150%;
    letter-spacing: 1px;
    font-weight: 300;
    margin-bottom: 8px;
  }
  > div {
    button.active {
      background-color: #f3fbf4;
      border: 1px solid var(--green-200);
    }
    button {
      background-color: var(--light-600);
      border: 1px solid var(--light-600);
      padding: 9px 14px;
      margin-right: 16px !important;
    }
  }
`;

const OfferPill = styled.p`
  background-color: #fef8e8;
  color: var(--dark-600);
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  padding: 8px 14px;
  border-radius: 100px;
  margin: 16px auto 20px;
  text-align: center;
  > span {
    color: var(--red-600);
  }

  @media (min-width: ${screens.mobile.xxl}) {
    padding: 10px 28px;
    font-size: var(--font-size-medium-33);
  }
`;

const ProductMetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 12px;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid var(--light-600);
  padding: 16px 0;
  > p {
    line-height: 150%;
    font-weight: 400;
    letter-spacing: 0;
    display: grid;
    grid-template-columns: 30% 10% 60%;
    grid-template-rows: 1fr;
    color: var(--dark-900);
    width: 100%;
    font-size: var(--font-size-small-100);
    > span {
      font-size: var(--font-size-small-50);
      color: var(--dark-300);
      font-weight: 300;
    }
  }
  > p:last-child {
    color: var(--green-200);
  }
`;

const CardDetails = memo(() => {
  const [reviewsNum, setReviewsNum] = useState(2);
  const [rating, setRating] = useState(1);

  const { items, isLoading } = useFetchProducts();
  const location = useLocation();
  const currentCard = Number(location.hash[location.hash.length - 1]) - 1 || 0;

  useEffect(() => {
    setReviewsNum(2);
  }, [currentCard]);

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <CartProvider>
      <PostProvider values={{ reviewsNum, setReviewsNum, currentCard }}>
        <StarReviewContext.Provider
          value={{
            rating,
            setRating,
          }}
        >
          <StyledCardDetails>
            <Card.ItemType>{items[currentCard].type}</Card.ItemType>
            <Card.TitleItem color="--dark-900">
              {items[currentCard].name}
            </Card.TitleItem>
            <Labels>
              {items[currentCard].label && (
                <Btn
                  size="small"
                  variation="label"
                  shape="button"
                  disabled={true}
                  className="label"
                >
                  {items[currentCard].label}
                </Btn>
              )}
            </Labels>
            <PriceReview items={items} />
            <Qualities>
              <Quality>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6667 21.3333C18.6667 23.6933 17.64 25.8266 16 27.2799C14.5867 28.5599 12.72 29.3333 10.6667 29.3333C6.25335 29.3333 2.66669 25.7466 2.66669 21.3333C2.66669 17.6533 5.17335 14.5333 8.56002 13.6133C9.48002 15.9333 11.4534 17.7199 13.8934 18.3866C14.56 18.5733 15.2667 18.6666 16 18.6666C16.7334 18.6666 17.44 18.5733 18.1067 18.3866C18.4667 19.2933 18.6667 20.2933 18.6667 21.3333Z"
                    stroke="#9D9EA2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 10.667C24 11.707 23.8 12.707 23.44 13.6137C22.52 15.9337 20.5467 17.7203 18.1067 18.387C17.44 18.5737 16.7333 18.667 16 18.667C15.2667 18.667 14.56 18.5737 13.8933 18.387C11.4533 17.7203 9.48 15.9337 8.56 13.6137C8.2 12.707 8 11.707 8 10.667C8 6.25366 11.5867 2.66699 16 2.66699C20.4133 2.66699 24 6.25366 24 10.667Z"
                    stroke="#9D9EA2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.3333 21.3333C29.3333 25.7466 25.7467 29.3333 21.3333 29.3333C19.28 29.3333 17.4133 28.5599 16 27.2799C17.64 25.8266 18.6667 23.6933 18.6667 21.3333C18.6667 20.2933 18.4667 19.2933 18.1067 18.3866C20.5467 17.7199 22.52 15.9333 23.44 13.6133C26.8267 14.5333 29.3333 17.6533 29.3333 21.3333Z"
                    stroke="#9D9EA2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="type">Effetcs</p>
                <p className="🍥">
                  Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
                </p>
              </Quality>
              <Quality>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3333 3.99967C22.5066 3.99967 26.6666 8.18634 26.6666 13.333C26.6666 17.0663 24.4933 20.253 21.3333 21.7463V27.9997H12V23.9997H10.6666C9.18664 23.9997 7.99997 22.813 7.99997 21.333V17.333H5.99997C5.43997 17.333 5.11997 16.6663 5.43997 16.253L7.99997 12.8797C8.11745 10.4841 9.15228 8.22553 10.8899 6.57227C12.6276 4.91901 14.9348 3.99782 17.3333 3.99967ZM17.3333 1.33301C11.2133 1.33301 6.14664 5.89301 5.41331 11.8663L3.33331 14.6663H3.29331L3.26664 14.7063C2.53331 15.7197 2.43997 17.053 3.01331 18.1597C3.49331 19.0797 4.34664 19.7197 5.33331 19.9197V21.333C5.33331 23.7997 7.03997 25.893 9.33331 26.493V30.6663H24V23.333C27.3333 21.1063 29.3333 17.413 29.3333 13.333C29.3333 6.70634 23.9466 1.33301 17.3333 1.33301ZM23.1066 12.3997L20.4933 13.0797L22.4133 15.0263C22.88 15.4797 22.88 16.253 22.4133 16.7197C21.9466 17.1863 21.1733 17.1863 20.72 16.7197L18.7866 14.7997L18.0933 17.413C17.9333 18.0663 17.28 18.4263 16.6666 18.2663C16.5114 18.2274 16.3654 18.1582 16.237 18.0626C16.1086 17.9671 16.0004 17.8471 15.9186 17.7095C15.8368 17.5719 15.783 17.4195 15.7604 17.2611C15.7377 17.1027 15.7467 16.9413 15.7866 16.7863L16.4933 14.173L13.88 14.8797C13.725 14.9196 13.5636 14.9286 13.4052 14.9059C13.2468 14.8833 13.0944 14.8295 12.9568 14.7477C12.8193 14.6659 12.6992 14.5577 12.6037 14.4293C12.5081 14.3009 12.4389 14.1549 12.4 13.9997C12.24 13.3997 12.6133 12.733 13.2533 12.573L15.8666 11.8797L13.9466 9.94634C13.746 9.71724 13.6401 9.42045 13.6501 9.11611C13.6602 8.81177 13.7856 8.52264 14.001 8.30732C14.2163 8.092 14.5054 7.96659 14.8097 7.95651C15.1141 7.94642 15.4109 8.05242 15.64 8.25301L17.5866 10.173L18.2666 7.55967C18.4266 6.90634 19.0933 6.53301 19.72 6.70634C20.3733 6.87967 20.7466 7.53301 20.5733 8.17301L19.8666 10.7997L22.4933 10.093C23.1333 9.91967 23.7866 10.293 23.96 10.9463C24.1333 11.573 23.76 12.2397 23.1066 12.3997Z"
                    fill="#9D9EA2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
                <p className="type">May relieve</p>
                <p className="🍥">
                  Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
                  Inflamation, Insomnia, Irregular Bowel Movements, Migraines,
                  Mood Swings
                </p>
              </Quality>
              <Quality>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.001 28C27.8457 28.0002 27.6926 27.9641 27.5537 27.8946C27.4148 27.8252 27.294 27.7243 27.201 27.6L26.386 26.514C25.6138 25.4846 25.0714 24.3015 24.7954 23.0446C24.5194 21.7877 24.5162 20.4862 24.786 19.228L26.259 12.352C26.469 11.3733 26.4665 10.361 26.2517 9.38335C26.0369 8.40572 25.6148 7.48556 25.014 6.685L24.2 5.6C24.1212 5.49495 24.0639 5.3754 24.0313 5.24819C23.9987 5.12097 23.9915 4.98858 24.01 4.85858C24.0286 4.72858 24.0726 4.60351 24.1395 4.49051C24.2064 4.37751 24.2949 4.2788 24.4 4.2C24.5051 4.12121 24.6246 4.06388 24.7518 4.03129C24.879 3.9987 25.0114 3.99148 25.1414 4.01005C25.2714 4.02863 25.3965 4.07262 25.5095 4.13953C25.6225 4.20644 25.7212 4.29495 25.8 4.4L26.615 5.486C27.387 6.5153 27.9294 7.6982 28.2054 8.95491C28.4814 10.2116 28.4847 11.5129 28.215 12.771L26.741 19.647C26.531 20.6257 26.5335 21.638 26.7483 22.6157C26.9631 23.5933 27.3852 24.5135 27.986 25.314L28.8 26.4C28.9114 26.5485 28.9792 26.7251 28.9959 26.91C29.0127 27.0948 28.9776 27.2807 28.8947 27.4468C28.8117 27.6128 28.6842 27.7526 28.5264 27.8503C28.3685 27.948 28.1866 27.9998 28.001 28ZM23.001 28C22.8457 28.0002 22.6926 27.9641 22.5537 27.8946C22.4148 27.8252 22.294 27.7243 22.201 27.6L21.386 26.514C20.6138 25.4846 20.0714 24.3015 19.7954 23.0446C19.5194 21.7877 19.5162 20.4862 19.786 19.228L21.259 12.352C21.469 11.3733 21.4665 10.361 21.2517 9.38335C21.0369 8.40572 20.6148 7.48556 20.014 6.685L19.2 5.6C19.1212 5.49495 19.0639 5.3754 19.0313 5.24819C18.9987 5.12097 18.9915 4.98858 19.01 4.85858C19.0286 4.72858 19.0726 4.60351 19.1395 4.49051C19.2064 4.37751 19.2949 4.2788 19.4 4.2C19.5051 4.12121 19.6246 4.06388 19.7518 4.03129C19.879 3.9987 20.0114 3.99148 20.1414 4.01005C20.2714 4.02863 20.3965 4.07262 20.5095 4.13953C20.6225 4.20644 20.7212 4.29495 20.8 4.4L21.615 5.486C22.387 6.5153 22.9294 7.6982 23.2054 8.95491C23.4814 10.2116 23.4847 11.5129 23.215 12.771L21.741 19.647C21.531 20.6257 21.5335 21.638 21.7483 22.6157C21.9631 23.5933 22.3852 24.5135 22.986 25.314L23.8 26.4C23.9114 26.5485 23.9792 26.7251 23.9959 26.91C24.0127 27.0948 23.9776 27.2807 23.8947 27.4468C23.8117 27.6128 23.6842 27.7526 23.5264 27.8503C23.3685 27.948 23.1866 27.9998 23.001 28ZM18.001 28C17.8457 28.0002 17.6926 27.9641 17.5537 27.8946C17.4148 27.8252 17.294 27.7243 17.201 27.6L16.386 26.514C15.6138 25.4846 15.0714 24.3015 14.7954 23.0446C14.5194 21.7877 14.5162 20.4862 14.786 19.228L16.259 12.352C16.469 11.3733 16.4665 10.361 16.2517 9.38335C16.0369 8.40572 15.6148 7.48556 15.014 6.685L14.2 5.6C14.1212 5.49495 14.0639 5.3754 14.0313 5.24819C13.9987 5.12097 13.9915 4.98858 14.0101 4.85858C14.0286 4.72858 14.0726 4.60351 14.1395 4.49051C14.2064 4.37751 14.2949 4.2788 14.4 4.2C14.5051 4.12121 14.6246 4.06388 14.7518 4.03129C14.879 3.9987 15.0114 3.99148 15.1414 4.01005C15.2714 4.02863 15.3965 4.07262 15.5095 4.13953C15.6225 4.20644 15.7212 4.29495 15.8 4.4L16.614 5.486C17.3862 6.51522 17.9287 7.69809 18.2049 8.9548C18.4811 10.2115 18.4845 11.5128 18.215 12.771L16.741 19.647C16.531 20.6257 16.5335 21.638 16.7483 22.6157C16.9631 23.5933 17.3852 24.5135 17.986 25.314L18.8 26.4C18.9114 26.5485 18.9792 26.7251 18.9959 26.91C19.0127 27.0948 18.9776 27.2807 18.8947 27.4468C18.8117 27.6128 18.6842 27.7526 18.5264 27.8503C18.3685 27.948 18.1866 27.9998 18.001 28ZM13.001 28C12.8457 28.0002 12.6926 27.9641 12.5537 27.8946C12.4148 27.8252 12.294 27.7243 12.201 27.6L11.386 26.514C10.6138 25.4846 10.0714 24.3015 9.7954 23.0446C9.51939 21.7877 9.51618 20.4862 9.786 19.228L11.259 12.352C11.469 11.3733 11.4665 10.361 11.2517 9.38335C11.0369 8.40572 10.6148 7.48556 10.014 6.685L9.2 5.6C9.12121 5.49495 9.06388 5.3754 9.03129 5.24819C8.99869 5.12097 8.99148 4.98858 9.01005 4.85858C9.02862 4.72858 9.07262 4.60351 9.13953 4.49051C9.20643 4.37751 9.29494 4.2788 9.4 4.2C9.50506 4.12121 9.62461 4.06388 9.75182 4.03129C9.87903 3.9987 10.0114 3.99148 10.1414 4.01005C10.2714 4.02863 10.3965 4.07262 10.5095 4.13953C10.6225 4.20644 10.7212 4.29495 10.8 4.4L11.615 5.486C12.387 6.5153 12.9294 7.6982 13.2054 8.95491C13.4814 10.2116 13.4847 11.5129 13.215 12.771L11.741 19.647C11.531 20.6257 11.5335 21.638 11.7483 22.6157C11.9631 23.5933 12.3852 24.5135 12.986 25.314L13.8 26.4C13.9114 26.5485 13.9792 26.7251 13.9959 26.91C14.0127 27.0948 13.9776 27.2807 13.8947 27.4468C13.8117 27.6128 13.6842 27.7526 13.5264 27.8503C13.3685 27.948 13.1866 27.9998 13.001 28ZM8.001 28C7.84556 28.0003 7.69219 27.9643 7.55313 27.8949C7.41406 27.8254 7.29314 27.7245 7.2 27.6L6.385 26.514C5.61281 25.4846 5.07041 24.3015 4.7944 23.0446C4.51839 21.7877 4.51518 20.4862 4.785 19.228L6.259 12.352C6.46896 11.3733 6.46646 10.361 6.25169 9.38335C6.03691 8.40572 5.61484 7.48556 5.014 6.685L4.2 5.6C4.12121 5.49495 4.06388 5.3754 4.03129 5.24819C3.99869 5.12097 3.99148 4.98858 4.01005 4.85858C4.04756 4.59603 4.18783 4.35913 4.4 4.2C4.61217 4.04087 4.87887 3.97255 5.14142 4.01005C5.40397 4.04756 5.64087 4.18783 5.8 4.4L6.615 5.486C7.38705 6.5153 7.92937 7.6982 8.20538 8.95491C8.48139 10.2116 8.48467 11.5129 8.215 12.771L6.741 19.647C6.53104 20.6257 6.53354 21.638 6.74831 22.6157C6.96309 23.5933 7.38516 24.5135 7.986 25.314L8.8 26.4C8.91138 26.5485 8.97922 26.7251 8.99594 26.91C9.01265 27.0948 8.97758 27.2807 8.89465 27.4468C8.81172 27.6128 8.6842 27.7526 8.52637 27.8503C8.36854 27.948 8.18663 27.9998 8.001 28Z"
                    fill="#9D9EA2"
                    stroke="white"
                  />
                </svg>
                <p className="type">armors</p>
                <p className="🍥">chemical, citrus, earthy, pungent, sour</p>
              </Quality>
            </Qualities>
            <Description>
              <p>description</p>
              <p>
                Jungle Diamonds is a slightly indica dominant hybrid strain (60%
                indica/40% sativa) created through crossing the infamous
                Slurricane X Gorilla Glue #4 strains.
              </p>
            </Description>
            <Wieghts>
              <p>weight</p>
              <Card.WeightOptions />
            </Wieghts>
            <AddIntegra />
            <OfferPill>
              Purchase this product now and earn <span>80</span> Points!
            </OfferPill>
            <PurchaseBox item={items[currentCard]} />
            <ProductMetaData>
              <p>
                <span>SKU</span> <span>:</span> {"N/A"}
              </p>
              <p>
                <span>Categories</span> <span>:</span> {"AAAA Weed, Indica"}
              </p>
            </ProductMetaData>
            <Divider width="100%" color="var(--light-700)" />
            <FilterProvider>
              <Filter className="pill-filter">
                <Filter.Pill content="Description" />
                <Filter.Pill content="Reviews (350)" />
                <Filter.Pill content="Refer a Friend" />
              </Filter>
              <FilterContent item={items[currentCard]} />
            </FilterProvider>
          </StyledCardDetails>
        </StarReviewContext.Provider>
      </PostProvider>
    </CartProvider>
  );
});

export default CardDetails;
