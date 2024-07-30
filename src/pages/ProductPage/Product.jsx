/* eslint-disable react/display-name */

import { memo, useState } from "react";
import Main from "../../ui/Main";
import ImagePreview from "./ImagePreview";
import styled from "styled-components";
import CardDetails from "../../features/Description/CardDetails";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import Heading from "../../ui/Heading";
import screens from "../../utils/screens";
import FilterProvider from "../../context/filterContext";
import PaginationProvider from "../../context/paginationContext";
import FilterContent from "../../features/Description/FilterContent";
import PostProvider from "../../context/postContext";
import CartProvider from "../../features/cart/cartContext";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  row-gap: 32px;
  padding: 0 24px;

  .pill-filter {
    grid-area: filter;
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
    display: grid;
    grid-template-columns: 48.6% 51.4%;
    grid-template-rows: auto;
    grid-template-areas: "image details" "image filter" "image filter-section";
    align-items: flex-start;
    margin-top: 40px;
  }
`;

const ItemsCardsGrid = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 64px 57px; */
  text-align: left;
  margin-bottom: 284px;
  padding: 0 24px;

  h2 {
    color: var(--dark-900);
    text-align: left;
  }

  @media (max-width: 375px) {
    > .cards-container {
      justify-content: center;
      > div {
        width: 100%;
        height: 480px;
      }
    }
  }

  @media (min-width: ${screens.tablet.xs}) {
    margin-bottom: 384px;
  }
`;

const Product = memo(() => {
  const [contentLoaded, setContentLoaded] = useState(false);

  return (
    <Main className="prod-main">
      <ProductContainer>
        <CartProvider>
          <FilterProvider>
            <ImagePreview handleContentLoaded={setContentLoaded} />
            {contentLoaded ? (
              <>
                <CardDetails />
                <PostProvider>
                  <FilterContent />
                </PostProvider>
              </>
            ) : (
              <ContentLoadingAnimation />
            )}
          </FilterProvider>
        </CartProvider>
      </ProductContainer>
      <ItemsCardsGrid>
        <Heading as="h2">Featured Product</Heading>
        <FilterProvider>
          <PaginationProvider>
            <BuyCardsGrid
              filterDefaultValue={{
                name: "random",
                filter: { column: "", value: 15, method: "random" },
              }}
            />
          </PaginationProvider>
        </FilterProvider>
      </ItemsCardsGrid>
    </Main>
  );
});

export default Product;
