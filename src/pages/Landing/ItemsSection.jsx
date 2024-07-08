/* eslint-disable react/display-name */

import styled from "styled-components";
import { Link } from "react-router-dom";

import Heading from "../../ui/Heading";
import Card from "../../ui/Card";
import weedImg1 from "../../data/images/image_13_prev_ui_1.png";
import vector from "../../data/images/vector.png";
import Menu from "../../ui/Menu";
import BuyCardsCarousel from "../../ui/BuyCardsCarousel";
import { memo } from "react";
import CartProvider from "../../features/cart/cartContext";
import FilterSection from "./FilterSection";
import screens from "../../utils/screens";

const FilterContent = ["Best seller", "Bundles & Promotions", "On Sale"];

const slidesPerView = {
  640: 2,
};

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  row-gap: 25px;
  .back-img {
    position: absolute;
    width: 68.3%;
    aspect-ratio: 2.6168 / 3.71;
    transform: rotate(5deg) translate(100%, -100%);
    right: 65%;
    top: 65%;
    z-index: 0;
  }
  .items-cards {
    /* height: calc((568px * 2) + 100px); */
    row-gap: 32px;
  }
  .cover-card {
    /* height: 395px; */
    padding: 28px 40px;
    > :not(.back-img) {
      position: relative;
      z-index: 1;
    }
    @media (max-width: ${screens.mobile.s}) {
      padding: 8px 24px;
    }
  }
  .swiper-slide {
    height: 568px;
    > div {
      width: 100%;
    }
  }
`;

const StyledHeaderContainer = styled.div`
  text-align: center;
  margin-inline: auto;
  color: var(--dark-900);
  & > h1 {
    max-width: 600px;
    margin-bottom: 0;
  }
`;

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  width: 100%;
  height: 44%;
  align-items: flex-end;
  & img {
    width: 57.7%;
    aspect-ratio: 1 / 1;
    @media (min-width: ${screens.mobile.xxm}) {
      width: 45%;
    }
    @media (min-width: ${screens.tablet.xs}) {
      width: 35%;
    }
  }
`;

const ItemsSection = memo(() => {
  return (
    <CartProvider>
      <StyledMenuSection>
        <StyledHeaderContainer>
          <Heading as="h1">
            best dispensary to buy weed online in canada
          </Heading>
        </StyledHeaderContainer>
        <FilterSection contents={FilterContent} />
        <BuyCardsCarousel slides_per_view={slidesPerView}>
          <Menu.CoverCard side="center" className="cover-card">
            <img src={vector} alt="" className="back-img" />
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
        </BuyCardsCarousel>
      </StyledMenuSection>
    </CartProvider>
  );
});

export default ItemsSection;
