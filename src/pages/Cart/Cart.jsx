/* eslint-disable react/display-name */
import { memo } from "react";
import { useSelector } from "react-redux";
import { getCart, getTotalItems } from "../../features/cart/cartSlice";
import ProgressProvider from "../../context/progressProvider";
import ShoppingCart from "./ShoppingCart";
import ProgressBox from "./ProgressBox";
import ProcceedBox from "./ProcceedBox";
import styled from "styled-components";
import screens from "../../utils/screens";

const StyledCart = styled.main`
  margin-bottom: 250px;
  width: 100%;
  padding-inline: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 24px;
  @media (min-width: ${screens.mobile.xxm}) {
    margin-bottom: 350px;
  }

  @media (min-width: ${screens.tablet.xxl}) {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto auto;
    grid-template-areas: "progress-bar progress-bar" "cart proceed-box";
    column-gap: 24px;
    justify-content: center;
    row-gap: 32px;
  }
`;

const Cart = memo(() => {
  const cart = useSelector(getCart);
  const count = useSelector(getTotalItems);
  console.log(cart);

  return (
    <ProgressProvider>
      <StyledCart>
        <ProgressBox />
        <ShoppingCart cart={cart.items} count={count} />
        <ProcceedBox totalPrice={cart.totalPrice} />
      </StyledCart>
    </ProgressProvider>
  );
});

export default Cart;
