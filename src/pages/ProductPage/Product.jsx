/* eslint-disable react/display-name */

import { memo } from "react";
import Main from "../../ui/Main";
import ImagePreview from "./ImagePreview";
import styled from "styled-components";
import CardDetails from "../../features/Description/CardDetails";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import Heading from "../../ui/Heading";
import screens from "../../utils/screens";

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  row-gap: 32px;
  padding: 0 24px;
  @media (min-width: ${screens.tablet.xxm}) {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto;
    grid-template-areas: "image details";
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
  @media (max-width: ${screens.mobile.m}) {
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
  return (
    <Main className="prod-main">
      <ProductContainer>
        <ImagePreview />
        <CardDetails />
      </ProductContainer>
      <ItemsCardsGrid>
        <Heading as="h2">Featured Product</Heading>
        <BuyCardsGrid />
      </ItemsCardsGrid>
    </Main>
  );
});

export default Product;
