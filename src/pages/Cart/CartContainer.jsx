/* eslint-disable react/display-name */
import { memo } from "react";
import ShoppingCart from "./ShoppingCart";
import styled from "styled-components";
import { useProgress } from "../../context/progressProvider";
import Checkout from "./Checkout";
import Order from "./Order";
import PropTypes from "prop-types";
import screens from "../../utils/screens";

const StyledCartContainer = styled.div`
  grid-area: cart;
  width: 100%;
  &.order-container {
    @media (min-width: ${screens.tablet.xxl}) {
      padding-inline: 135px;
    }
  }
`;

const CartContainer = memo(({ formRef }) => {
  const { currentPoint } = useProgress();
  return (
    <StyledCartContainer
      className={currentPoint === "order" && "order-container"}
    >
      {currentPoint === "cart" && <ShoppingCart />}
      {currentPoint === "checkout" && <Checkout formRef={formRef} />}
      {currentPoint === "order" && <Order />}
    </StyledCartContainer>
  );
});

CartContainer.propTypes = {
  formRef: PropTypes.any,
};

export default CartContainer;
