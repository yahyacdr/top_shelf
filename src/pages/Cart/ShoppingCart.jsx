/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Item from "./Item";
import Ticket from "./Ticket";
import GetSvg from "./GetSvg";
import PropTypes from "prop-types";
import Btn from "../../ui/Btn";
import { useDispatch } from "react-redux";
import { CLEAR_CART } from "../../features/cart/cartSlice";
import screens from "../../utils/screens";

const infoT = [
  {
    id: 0,
    title: "delivery",
    offer: "Order by 10pm for free next day delivery on Orders overs $100",
    desc: "We deliver Monday to Saturday - excluding Holidays",
  },
  {
    id: 1,
    title: "",
    offer: "Free next day delivery to stores.",
    desc: "Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100",
  },
  {
    id: 2,
    title: "free returns",
    offer: "",
    desc: "30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE",
  },
];

const StyledShoppingCart = styled.section`
  grid-area: cart;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .card-price {
    width: fit-content;
  }

  @media (min-width: ${screens.tablet.xxl}) {
    max-width: 686px;
    justify-self: center;
  }
`;

const CartBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const YourCart = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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

const Items = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--light-600);
  > button {
    margin: 24px 0;
    background-color: var(--green-700);
  }
`;

const InfoTickets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 0;
  border-top: 1px solid var(--light-600);
  gap: 20px;
  width: 100%;
  @media (min-width: ${screens.tablet.xxxl}) {
    flex-direction: row;
  }
`;

const ShoppingCart = memo(({ cart, count }) => {
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(CLEAR_CART());
  }
  return (
    <StyledShoppingCart>
      <CartBody>
        <YourCart>
          <Container>
            <Heading as="h3">your cart</Heading>
            <Total>({count})</Total>
          </Container>
          <Items>
            {cart.map((item, i) => (
              <Item item={item} key={i} />
            ))}
            {cart.length && (
              <Btn
                variation="primary"
                size="medium"
                shape="button"
                onClick={handleClearCart}
              >
                Clear cart
              </Btn>
            )}
          </Items>
          <InfoTickets>
            {infoT.map((it, i) => (
              <Ticket key={i} title={it.title} offer={it.offer} desc={it.desc}>
                <GetSvg />
              </Ticket>
            ))}
          </InfoTickets>
        </YourCart>
      </CartBody>
    </StyledShoppingCart>
  );
});

ShoppingCart.propTypes = {
  cart: PropTypes.array,
  count: PropTypes.number,
};

export default ShoppingCart;
