/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "./Heading";
import { memo } from "react";
import Menu from "./Menu";
import { buyCards } from "../data/Static/StaticData";
import BuyCard from "../features/BuyCard/BuyCard";
import CartProvider from "../features/cart/cartContext";
import FilterSection from "../pages/Landing/FilterSection";

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
    @media (max-width: 480px) {
      /* width: 100%; */
      h4 {
        font-size: var(--font-size-medium-66);
      }
    }
  }
`;

const RecentlyAddedSection = memo(() => {
  return (
    <CartProvider>
      <StyledRecentlyAddedSection>
        <Heading as="h1">recently added</Heading>
        <FilterSection contents={FilterContent} />
        <Menu.ItemCards distribution="grid">
          {buyCards.slice(4).map((bc) => (
            <Menu.CardContainer
              key={bc.id}
              width="291px"
              className="card-container"
            >
              <BuyCard bc={bc} />
            </Menu.CardContainer>
          ))}
        </Menu.ItemCards>
      </StyledRecentlyAddedSection>
    </CartProvider>
  );
});

export default RecentlyAddedSection;
