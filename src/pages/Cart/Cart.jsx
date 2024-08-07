/* eslint-disable react/display-name */
import { memo, useRef } from "react";
import ProgressProvider from "../../context/progressProvider";
import ProgressBox from "./ProgressBox";
import ProcceedBox from "./ProcceedBox";
import styled from "styled-components";
import screens from "../../utils/screens";
import CartContainer from "./CartContainer";

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
    &.order-box {
      grid-template-rows: auto auto auto;
      grid-template-areas: "progress-bar progress-bar" "cart cart" "proceed-box proceed-box";
    }
  }
`;

const Cart = memo(() => {
  const formRef = useRef();
  return (
    <ProgressProvider>
      <StyledCart className="cart-box">
        <ProgressBox />
        <CartContainer formRef={formRef} />
        <ProcceedBox formRef={formRef} />
      </StyledCart>
    </ProgressProvider>
  );
});

export default Cart;
