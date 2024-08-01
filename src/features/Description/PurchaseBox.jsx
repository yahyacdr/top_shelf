/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import BuyCardBtn from "../BuyCard/BuyCardBtn";
import { useCart } from "../cart/cartContext";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helper";
import screens from "../../utils/screens";

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
  grid-template-rows: 1fr 1fr 1fr;
  color: var(--dark-900);
  font-size: var(--font-size-small-100);
  line-height: 150%;
  font-weight: 400;
  letter-spacing: 0;
  row-gap: 12px;
  width: 100%;
  > p:nth-child(even) {
    text-align: right;
    max-width: 90%;
  }
  span {
    margin-left: 16px;
    color: var(--light-900);
  }

  @media (min-width: ${screens.mobile.xxl}) {
    font-size: var(--font-size-medium-33);
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
const PurchaseBox = memo(() => {
  const { name, weight, quantity_buy, additions, price, totalPrice } =
    useCart();
  console.log(additions.integras);

  return (
    <StyledPurchaseBox>
      <PurchasedItem>
        <p>
          {name} {weight.label}
          <span>{quantity_buy}x</span>
        </p>
        <p>{formatCurrency(price)}</p>
        {!!additions.integras.length &&
          additions.integras.map((integra) => (
            <>
              <p>Add Integra Pack - {integra.label}g</p>
              <p>{formatCurrency(integra.price)}</p>
            </>
          ))}
      </PurchasedItem>
      <AddToCart>
        <Counter />
        <BuyCardBtn>
          <p>Add to Cart</p>|<span>{formatCurrency(totalPrice)}</span>
        </BuyCardBtn>
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
