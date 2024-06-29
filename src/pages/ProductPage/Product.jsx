/* eslint-disable react/display-name */

import { memo } from "react";
import Main from "../../ui/Main";
import ImagePreview from "./ImagePreview";
import styled from "styled-components";
import CardDetails from "./CardDetails";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import Heading from "../../ui/Heading";

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  row-gap: 32px;
  padding: 0 24px;
  margin-bottom: 284px;
`;

const ItemsCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 64px 57px; */
  text-align: left;
  h2 {
    color: var(--dark-900);
    text-align: left;
  }
`;

const Product = memo(() => {
  return (
    <Main className="prod-main">
      <ProductContainer>
        <ImagePreview />
        <CardDetails />
        <ItemsCardsGrid>
          <Heading as="h2">Featured Product</Heading>
          <BuyCardsGrid />
        </ItemsCardsGrid>
      </ProductContainer>
    </Main>
  );
});

export default Product;
