/* eslint-disable react/display-name */
import { memo } from "react";
import Card from "../../ui/Card";
import { useCart } from "../../features/cart/cartContext";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPriceReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 8px;
  width: 100%;

  > div {
    width: fit-content;
    align-self: center;
    margin-bottom: 0;
    display: flex;
  }
  > div:first-child {
    p {
      font-size: var(--font-size-medium-33);
    }
  }
  > div:last-child {
    p {
      font-size: var(--font-size-small-100);
    }
  }
`;

const PriceReview = memo(() => {
  const { price, rate, discount } = useCart();

  return (
    <StyledPriceReview>
      <Card.Price
        hasDiscount={!!discount}
        price={price + discount}
        currentPrice={price}
      />
      <Card.Review rate={rate} numRate={135} />
    </StyledPriceReview>
  );
});

PriceReview.propTypes = {
  items: PropTypes.array,
};

export default PriceReview;
