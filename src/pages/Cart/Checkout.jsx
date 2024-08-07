/* eslint-disable react/display-name */
import { memo } from "react";
import Heading from "../../ui/Heading";
import { useSelector } from "react-redux";
import { getTotalItems } from "../../features/cart/cartSlice";
import styled from "styled-components";
import CheckoutForm from "./CheckoutForm";
import screens from "../../utils/screens";
import PropTypes from "prop-types";

const StyledCheckout = styled.div`
  width: 100%;
  .country {
    select {
      font-size: var(--font-size-small-100);
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0;
      width: 100%;
    }
  }
  .check-for-different-address {
    > div {
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
      column-gap: 16px;
    }
    & label {
      text-transform: none;
      font-size: var(--font-size-medium-33);
      font-weight: 500;
      color: var(--dark-900);
    }
  }

  .town,
  .province {
    @media (min-width: ${screens.mobile.xxl}) {
      width: calc(100% / 2 - 10px);
    }

    @media (min-width: ${screens.tablet.xs}) {
      width: calc(100% / 3 - 40px);
    }
  }

  .town,
  .province,
  .postcode {
    @media (min-width: ${screens.tablet.xs}) {
      width: calc(100% / 3 - 14px);
    }
  }

  form {
    > span {
      margin: 20px 0 32px;
    }
  }

  h4 {
    color: var(--dark-900);
    font-weight: 500;
    font-size: var(--font-size-medium-33);
    margin-bottom: 0;
  }
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

const Total = styled.p`
  color: var(--light-900);
  font-size: var(--font-size-medium-50);
  font-weight: light;
  line-height: 150%;
  letter-spacing: 0;
`;

const Checkout = memo(({ formRef }) => {
  const count = useSelector(getTotalItems);

  return (
    <StyledCheckout>
      <Container>
        <Heading as="h3">your cart</Heading>
        <Total>({count})</Total>
      </Container>
      <CheckoutForm formRef={formRef} />
    </StyledCheckout>
  );
});

Checkout.propTypes = {
  formRef: PropTypes.any,
};

export default Checkout;
