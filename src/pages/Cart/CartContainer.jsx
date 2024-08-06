/* eslint-disable react/display-name */
import { memo } from "react";
import ShoppingCart from "./ShoppingCart";
import styled from "styled-components";
import { useProgress } from "../../context/progressProvider";
import Checkout from "./Checkout";

const StyledCartContainer = styled.div`
  grid-area: cart;
  width: 100%;
`;

const CartContainer = memo(() => {
  const { currentPoint } = useProgress();
  return (
    <StyledCartContainer>
      {currentPoint === "cart" && <ShoppingCart />}
      {currentPoint === "checkout" && <Checkout />}
    </StyledCartContainer>
  );
});

export default CartContainer;
