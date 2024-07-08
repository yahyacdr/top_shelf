/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import { memo } from "react";
import CartProvider from "../../features/cart/cartContext";
import FilterSection from "./FilterSection";
import screens from "../../utils/screens";

const FilterContent = [
  "flowers",
  "mushrooms",
  "concentrate",
  "edibles",
  "shop all weed",
];

const StyledItemsGridSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  & h1 {
    color: var(--dark-800);
    margin-bottom: 0;
  }
  & > div:last-child {
    & > div {
      height: 568px;
    }
  }

  .cards-container {
  }
  .card-container {
    @media (max-width: ${screens.mobile.m}) {
      width: 100%;
    }
    .img-container {
      img {
        @media (min-width: ${screens.mobile.xxs}) {
          width: 50%;
        }
        @media (min-width: ${screens.mobile.xm}) {
          width: 70%;
        }
        @media (min-width: ${screens.mobile.l}) {
          width: 60%;
        }
        @media (min-width: ${screens.mobile.xxl}) {
          width: 50%;
        }
        @media (min-width: ${screens.tablet.xxs}) {
          width: 40%;
        }
        @media (min-width: ${screens.tablet.xs}) {
          width: 40%;
        }
        @media (min-width: ${screens.tablet.s}) {
          width: 50%;
        }
        @media (min-width: ${screens.tablet.xxl}) {
          width: 40%;
        }
      }
    }
  }
  .label-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ItemsGridSection = memo(() => {
  return (
    <CartProvider>
      <StyledItemsGridSection>
        <BuyCardsGrid>
          <Heading as="h1">choose your weed</Heading>
          <FilterSection contents={FilterContent} />
        </BuyCardsGrid>
      </StyledItemsGridSection>
    </CartProvider>
  );
});

export default ItemsGridSection;
