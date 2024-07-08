/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import { memo } from "react";
import CartProvider from "../../features/cart/cartContext";
import FilterSection from "./FilterSection";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import screens from "../../utils/screens";

const FilterContent = ["flowers", "concentrates", "edibles", "topicals"];

const StyledRecentlyAddedSection = styled.section`
  & h1 {
    color: var(--dark-800);
  }
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 96px;
    padding: 30px 32px 0 0;
  }
  & > div:last-child {
    & > div {
      height: 568px;
    }
  }
  & a {
    font-size: inherit;
  }
  .view-all-btn {
    /* width: 66px; */
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
`;

const RecentlyAddedSection = memo(() => {
  return (
    <CartProvider>
      <StyledRecentlyAddedSection>
        <BuyCardsGrid>
          <Heading as="h1">recently added</Heading>
          <FilterSection contents={FilterContent} />
        </BuyCardsGrid>
      </StyledRecentlyAddedSection>
    </CartProvider>
  );
});

export default RecentlyAddedSection;
