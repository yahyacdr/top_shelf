/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useSelector } from "react-redux";
import { getCart } from "../../features/cart/cartSlice";
import Item from "./Item";
import Card from "../../ui/Card";
import { formatCurrency } from "../../utils/helper";

const StyledOrder = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-700);
  padding-bottom: 16px;
  width: 100%;
  h3 {
    text-transform: capitalize;
    color: var(--dark-900);
    margin-bottom: 0;
  }
`;

const State = styled.p`
  display: flex;
  align-items: center;
  color: var(--green-200);
  font-size: var(--font-size-medium-50);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  text-transform: capitalize;
  column-gap: 3px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

const Total = styled.div`
  text-transform: uppercase;
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: var(--dark-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--light-600);

  h3 {
    margin-bottom: 0;
  }
  .card-price {
    width: auto;
  }
  p.price {
    color: var(--red-600);
    font-weight: 500;
    font-size: var(--font-size-medium-100);
  }
`;

const ShippingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--light-600);
  padding-bottom: 16px;
`;

const ShippingInfo = styled.p`
  color: var(--light-900);
  text-transform: capitalize;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-small-100);
  font-weight: 400;
  span {
    color: var(--dark-900);
    span {
      text-transform: uppercase;
    }
  }
`;

const Order = memo(() => {
  const {
    items,
    totalPrice,
    shippingDetails: {
      town,
      country: { short },
    },
  } = useSelector(getCart);
  console.log(items);

  return (
    <StyledOrder>
      <Container>
        <Heading as="h3">your order</Heading>
        <State>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9386 7.62855L12.9386 7.6286L12.9445 7.62251C13.3461 7.20706 13.3546 6.54245 12.9386 6.12645C12.5258 5.71368 11.8492 5.71368 11.4364 6.12645L7.935 9.62789L6.56355 8.25645C6.15079 7.84368 5.47421 7.84368 5.06145 8.25645C4.64868 8.66921 4.64868 9.34579 5.06145 9.75855L7.18395 11.8811C7.38164 12.0788 7.65089 12.1925 7.935 12.1925C8.21911 12.1925 8.48836 12.0788 8.68605 11.8811L12.9386 7.62855ZM2 9C2 5.14364 5.14364 2 9 2C12.8564 2 16 5.14364 16 9C16 12.8564 12.8564 16 9 16C5.14364 16 2 12.8564 2 9Z"
              fill="#17AF26"
              stroke="#17AF26"
            />
          </svg>
          paid
        </State>
      </Container>
      <Items>
        {items.map((item, i) => (
          <Item item={item} key={i} />
        ))}
        <Total>
          <Heading as="h3">total</Heading>
          <Card.Price currentPrice={totalPrice} showGram={false} />
        </Total>
      </Items>
      <ShippingDetails>
        <ShippingInfo>
          shipping
          <span>
            {town}, <span>{short}</span>
          </span>
        </ShippingInfo>
        <ShippingInfo>
          shipping options
          <span>same-day dispatching</span>
        </ShippingInfo>
        <ShippingInfo>
          subtotal
          <span>{formatCurrency(totalPrice)}</span>
        </ShippingInfo>
        <ShippingInfo>
          discount
          <span>{formatCurrency(0)}</span>
        </ShippingInfo>
        <ShippingInfo>
          shipping costs
          <span>{formatCurrency(50)}</span>
        </ShippingInfo>
        <ShippingInfo>
          point
          <span>{formatCurrency(0)}</span>
        </ShippingInfo>
      </ShippingDetails>
      <Total>
        <Heading as="h3">total</Heading>
        <Card.Price currentPrice={totalPrice + 50} showGram={false} />
      </Total>
    </StyledOrder>
  );
});

export default Order;
