/* eslint-disable react/display-name */

import { memo, useEffect } from "react";
import Main from "../../ui/Main";
import ImagePreview from "./ImagePreview";
import styled from "styled-components";
import CardDetails from "./CardDetails";
import { buyCards } from "../../data/Static/StaticData";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import Heading from "../../ui/Heading";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";

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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  console.log(data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Main className="prod-main">
      <ProductContainer>
        <ImagePreview />
        <CardDetails bc={buyCards[0]} />
        <ItemsCardsGrid>
          <Heading as="h2">Featured Product</Heading>
          <BuyCardsGrid />
        </ItemsCardsGrid>
      </ProductContainer>
    </Main>
  );
});

export default Product;
