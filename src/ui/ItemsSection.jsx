import styled, { css } from "styled-components";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import Heading from "./Heading";
import { Filter } from "./Filter";
import Btn from "./Btn";
import Card from "./Card";
import weedImg1 from "../data/images/image_13_prev_ui_1.png";
import { buyCards } from "../data/Static/StaticData";
import vector from "../data/images/vector.png";
import { formatCurrency } from "../utils/helper";
import Menu from "./Menu";
import Carousel, { CarouselBtnPrev } from "./Carousel";
import { CarouselBtnNext } from "./Carousel";

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 0 0 120px;
  width: 100%;
  overflow: hidden;
`;

const FilterSection = styled.div`
  padding: 30px 0 0;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;
`;

const StyledHeaderContainer = styled.div`
  text-align: center;
  margin-inline: auto;
  color: var(--dark-900);
  & > h1 {
    max-width: 900px;
  }
  @media (max-width: 1366px) {
    & > h1 {
      max-width: 600px;
    }
  }
`;

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  ${(props) =>
    props.type === "item"
      ? css`
          width: 100%;
          background-color: var(--light-600);
          border-radius: inherit;
          align-items: center;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 50%;

          align-items: flex-end;
          & img {
            width: 83%;
          }
        `}
`;

const StyledReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: var(--dark-900);
  & svg {
    margin-right: 10px;
  }
  & span {
    color: var(--light-700);
    margin-inline: 10px;
  }
`;

const StyledPrice = styled.div`
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  align-self: flex-end;
  & p.discount {
    color: var(--light-900);
    display: inline-block;
    margin-right: 15px;
    text-decoration: line-through;
  }
  & p.price {
    color: var(--red-600);
    display: inline-block;
    margin-right: 5px;
  }
  & span {
    color: var(--light-700);
    font-size: var(--font-size-100);
  }
`;

const WeightOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & button {
    padding: 5px 10px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export default function ItemsSection() {
  const carouselEl = useRef();
  const [active, setActive] = useState(true);
  let a = 1;
  if (a === 0) setActive(true);

  return (
    <StyledMenuSection>
      <StyledHeaderContainer>
        <Heading as="h1">best dispensary to buy weed online in canada</Heading>
      </StyledHeaderContainer>
      <FilterSection>
        <Filter>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color={`${active ? "--green-900" : "--dark-300"}`}
            active={active}
            custom={{ "max-width": "280px" }}
          >
            Best seller
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            Bundles & Promotions
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            On Sale
          </Btn>
        </Filter>
      </FilterSection>
      <Menu.ItemCards width="1348px" height="568px">
        <Menu.CoverCard side="center">
          <img src={vector} alt="" />
          <ImgCardContainer type="cover">
            <Card.Img img={weedImg1} />
          </ImgCardContainer>
          <Card.Title color="--light-300">Shop our Best Sellers</Card.Title>
          <Card.Desc maxwidth="250px" color="--light-300" opacity="0.6">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.{" "}
          </Card.Desc>
          <Link to="/">View all</Link>
        </Menu.CoverCard>
        <Carousel nextBtnClass="btn-next" refEl={carouselEl}>
          {buyCards.map((bc) => (
            <SwiperSlide key={bc.id}>
              <Menu.CardContainer>
                <ImgCardContainer type="item">
                  <Card.Img img={bc.img} />
                </ImgCardContainer>
                <Card.Desc color="--light-900">{bc.type}</Card.Desc>
                <Card.Title color="--dark-900">{bc.title}</Card.Title>
                <StyledReview>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.86495 2.25531L7.74495 4.01531C7.86495 4.26031 8.18495 4.49531 8.45495 4.54031L10.05 4.80531C11.07 4.97531 11.31 5.71531 10.575 6.44531L9.33495 7.68531C9.12495 7.89531 9.00995 8.30031 9.07495 8.59031L9.42995 10.1253C9.70995 11.3403 9.06495 11.8103 7.98995 11.1753L6.49495 10.2903C6.22495 10.1303 5.77995 10.1303 5.50495 10.2903L4.00995 11.1753C2.93995 11.8103 2.28995 11.3353 2.56995 10.1253L2.92495 8.59031C2.98995 8.30031 2.87495 7.89531 2.66495 7.68531L1.42495 6.44531C0.694954 5.71531 0.929955 4.97531 1.94995 4.80531L3.54495 4.54031C3.80995 4.49531 4.12995 4.26031 4.24995 4.01531L5.12995 2.25531C5.60995 1.30031 6.38995 1.30031 6.86495 2.25531Z"
                      fill="#F2BC1B"
                      stroke="#F2BC1B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    {bc.rate}/5 <span>|</span> {bc.numRate} <span>Reviews</span>
                  </p>
                </StyledReview>
                <div>
                  {bc.label && (
                    <Btn
                      size="small"
                      variation="label"
                      shape="button"
                      disabled={true}
                      className="label"
                    >
                      {bc.label}
                    </Btn>
                  )}
                </div>
                <StyledPrice>
                  {bc.discount && (
                    <p className="discount">{formatCurrency(bc.price)}</p>
                  )}
                  <p className="price">{formatCurrency(bc.currentPrice)}</p>
                  {!bc.discount && <span>/ gram</span>}
                </StyledPrice>
                <WeightOptions>
                  <div>
                    <Btn
                      size="small"
                      variation="secondary"
                      shape="button"
                      color="--dark-900"
                    >
                      28g
                    </Btn>
                    <Btn
                      size="small"
                      variation="secondary"
                      shape="button"
                      color="--dark-900"
                    >
                      1/2lb
                    </Btn>
                    <Btn
                      size="small"
                      variation="secondary"
                      shape="button"
                      color="--dark-900"
                    >
                      1/4lb
                    </Btn>
                  </div>
                </WeightOptions>
                <div>
                  <Btn
                    size="medium"
                    variation="primary"
                    shape="pill"
                    color="--light-300"
                  >
                    Add to Cart
                  </Btn>
                </div>
              </Menu.CardContainer>
            </SwiperSlide>
          ))}
        </Carousel>
        <CarouselBtnNext clsName="btn-next" carouselEl={carouselEl}>
          <p>Next</p>
        </CarouselBtnNext>
        <CarouselBtnPrev clsName="btn-next" carouselEl={carouselEl}>
          <p>Prev</p>
        </CarouselBtnPrev>
      </Menu.ItemCards>
    </StyledMenuSection>
  );
}
