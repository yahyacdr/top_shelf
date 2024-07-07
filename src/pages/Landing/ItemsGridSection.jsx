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
      .img-container {
        img {
          width: 50%;
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
