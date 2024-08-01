/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { getCart, getTotalItems } from "../../features/cart/cartSlice";
import ProgressProvider from "../../context/progressProvider";
import Heading from "../../ui/Heading";
import Item from "./Item";
import Ticket from "./Ticket";
import GetSvg from "./GetSvg";

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

const StyledCart = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 250px;
  .card-price {
    width: fit-content;
  }
`;

const CartBody = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
`;

const YourCart = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-700);
  padding-bottom: 16px;
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

const Items = styled.div``;

const InfoTickets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 0;
  border-top: 1px solid var(--light-600);
  row-gap: 20px;
`;

const Cart = memo(() => {
  const cart = useSelector(getCart);
  const count = useSelector(getTotalItems);

  return (
    <ProgressProvider>
      <StyledCart>
        <ProgressBar />
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
            </Items>
            <InfoTickets>
              {infoT.map((it, i) => (
                <Ticket
                  key={i}
                  title={it.title}
                  offer={it.offer}
                  desc={it.desc}
                >
                  <GetSvg />
                </Ticket>
              ))}
            </InfoTickets>
          </YourCart>
        </CartBody>
      </StyledCart>
    </ProgressProvider>
  );
});

export default Cart;
