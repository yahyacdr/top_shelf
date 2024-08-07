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
import FilterProvider from "../../context/filterContext";

const FilterContent = [
  {
    name: "Best seller",
    filter: { column: "sales", value: 10, method: "order" },
  },
  {
    name: "Bundles & Promotions",
    filter: { column: "category", value: "bundles", method: "eq" },
  },
  { name: "On Sale", filter: { column: "quantity", value: 0, method: "gt" } },
];

const slidesPerView = {
  640: 2,
  920: 2,
  1080: 2,
  1200: 2,
  1366: 3,
  1440: 3,
  1520: 4,
  1920: 4,
};

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  row-gap: 25px;
  @media (min-width: ${screens.tablet.xxm}) {
    row-gap: 64px;
  }
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
    row-gap: 32px;
    column-gap: 32px;
    @media (min-width: ${screens.tablet.xxm}) {
      height: 568px;
      width: calc(100% + 120px);
      flex-wrap: nowrap;
      .swiper {
        height: 100%;
        width: auto;
      }
    }
  }
  .cover-card {
    padding: 28px 40px;
    > :not(.back-img) {
      position: relative;
      z-index: 1;
    }
    @media (max-width: ${screens.mobile.s}) {
      padding: 8px 24px;
    }
    @media (min-width: ${screens.tablet.xxm}) {
      height: 100%;
      width: 350px;
      min-width: 350px;
    }
  }

  .cards-container {
    @media (min-width: ${screens.tablet.xxm}) {
      > div {
        height: 100%;
      }
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
    @media (min-width: ${screens.tablet.xxm}) {
      max-width: 948px;
    }
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
    @media (min-width: ${screens.tablet.xxm}) {
      width: 80%;
    }
    @media (min-width: ${screens.desktop.m}) {
      width: 65%;
    }
  }
`;

const ItemsSection = memo(() => {
  return (
    <CartProvider>
      <StyledMenuSection className="menu-section">
        <StyledHeaderContainer>
          <Heading as="h1">
            best dispensary to buy weed online in canada
          </Heading>
        </StyledHeaderContainer>
        <FilterProvider>
          <FilterSection
            contents={FilterContent}
            hasTitle={false}
            defaultFilter={{
              name: "Best seller",
              filter: { column: "sales", value: 30, method: "order" },
            }}
          />
          <BuyCardsCarousel slides_per_view={slidesPerView} setFilter={false}>
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
        </FilterProvider>
      </StyledMenuSection>
    </CartProvider>
  );
});

export default ItemsSection;
