/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import { memo } from "react";
import CartProvider from "../../features/cart/cartContext";
import FilterSection from "./FilterSection";
import screens from "../../utils/screens";
import FilterProvider from "../../context/filterContext";
import PaginationProvider from "../../context/paginationContext";

const FilterContent = [
  {
    name: "flowers",
    filter: { column: "type", value: "flower", method: "eq" },
  },
  {
    name: "mushrooms",
    filter: { column: "category", value: "mushrooms", method: "ilike" },
  },
  {
    name: "edibles",
    filter: { column: "type", value: "edible", method: "eq" },
  },
  {
    name: "shop all weed",
    filter: { column: "", value: "", method: "all" },
  },
];

const StyledItemsGridSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  & h1 {
    color: var(--dark-800);
    margin-bottom: 0;
  }
  /* & > div:last-child() {
    & > div {
      height: 568px;
    }
  } */

  .cards-container {
  }
  .card-container {
    @media (max-width: ${screens.mobile.m}) {
      width: 100%;
    }
    .img-container {
      img {
        @media (min-width: ${screens.mobile.xxs}) {
          width: 45%;
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
        <Heading as="h1">choose your weed</Heading>
        <FilterProvider>
          <FilterSection
            contents={FilterContent}
            defaultFilter={FilterContent[0]}
          />
          <PaginationProvider>
            <BuyCardsGrid />
          </PaginationProvider>
        </FilterProvider>
      </StyledItemsGridSection>
    </CartProvider>
  );
});

export default ItemsGridSection;
