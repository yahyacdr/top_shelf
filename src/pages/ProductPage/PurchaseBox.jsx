/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Btn from "../../ui/Btn";
import { useCart } from "../../features/cart/cartContext";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helper";

const StyledPurchaseBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--light-600);
  width: 100%;
  row-gap: 24px;
`;

const PurchasedItem = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr 1fr;
  color: var(--dark-900);
  font-size: var(--font-size-small-100);
  line-height: 150%;
  font-weight: 400;
  letter-spacing: 0;
  row-gap: 12px;
  width: 100%;
  > p:nth-child(even) {
    text-align: right;
  }
  span {
    margin-left: 16px;
    color: var(--light-900);
  }
`;

const AddToCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 16px;
  border-top: 1px solid var(--light-600);
  border-bottom: 1px solid var(--light-600);
  padding: 20px 0;
  > button:last-child {
    font-size: var(--font-size-small-100);
    line-height: 150%;
    font-weight: 400;
    letter-spacing: 0;
    padding: 13.5px 24px;
    > * {
      display: inline-block;
    }
    > p {
      margin-right: 16px;
    }
    > span {
      margin-left: 16px;
    }
  }
`;

const PurchaseServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
  row-gap: 12px;
  > p {
    display: flex;
    align-items: center;
    font-size: var(--font-size-small-50);
    letter-spacing: 0;
    font-weight: 400;
    line-height: 150%;
    color: var(--dark-600);
    svg {
      margin-right: 8px;
    }
    span {
      color: var(--gold);
      margin-left: 3px;
    }
  }
`;
const PurchaseBox = memo(({ item }) => {
  const { weight, quantity, additions, price } = useCart();

  return (
    <StyledPurchaseBox>
      <PurchasedItem>
        <p>
          {item.name} {weight.label}
          <span>{quantity}x</span>
        </p>
        <p>{formatCurrency(price * quantity)}</p>
        {!!additions.price && (
          <>
            <p>Add Integra Pack - {additions.label}g</p>
            <p>{formatCurrency(additions.price)}</p>
          </>
        )}
      </PurchasedItem>
      <AddToCart>
        <Counter />
        <Btn shape="pill" variation="primary" size="medium">
          <p>Add to Cart</p>|
          <span>{formatCurrency(price * quantity + additions.price)}</span>
        </Btn>
      </AddToCart>
      <PurchaseServiceDetails>
        <p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99998 14.6663C11.6666 14.6663 14.6666 11.6663 14.6666 7.99967C14.6666 4.33301 11.6666 1.33301 7.99998 1.33301C4.33331 1.33301 1.33331 4.33301 1.33331 7.99967C1.33331 11.6663 4.33331 14.6663 7.99998 14.6663Z"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.16669 7.99995L7.05335 9.88661L10.8334 6.11328"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Free Xpress Shipping on orders over <span>${149}</span>
        </p>
        <p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99998 14.6663C11.6666 14.6663 14.6666 11.6663 14.6666 7.99967C14.6666 4.33301 11.6666 1.33301 7.99998 1.33301C4.33331 1.33301 1.33331 4.33301 1.33331 7.99967C1.33331 11.6663 4.33331 14.6663 7.99998 14.6663Z"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.16669 7.99995L7.05335 9.88661L10.8334 6.11328"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Order before 12:00pm for same day dispatch
        </p>
        <p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99998 14.6663C11.6666 14.6663 14.6666 11.6663 14.6666 7.99967C14.6666 4.33301 11.6666 1.33301 7.99998 1.33301C4.33331 1.33301 1.33331 4.33301 1.33331 7.99967C1.33331 11.6663 4.33331 14.6663 7.99998 14.6663Z"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.16669 7.99995L7.05335 9.88661L10.8334 6.11328"
              stroke="#17AF26"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Support & ordering open 7 days a week
        </p>
      </PurchaseServiceDetails>
    </StyledPurchaseBox>
  );
});

PurchaseBox.propTypes = {
  item: PropTypes.object,
};

export default PurchaseBox;
