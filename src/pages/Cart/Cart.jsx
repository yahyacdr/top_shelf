/* eslint-disable react/display-name */
import { memo } from "react";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const StyledCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartBody = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
`;
const Cart = memo(() => {
  return (
    <StyledCart>
      <ProgressBar />
      <CartBody>
        <YourCart>
          <Items></Items>
          <InfoTickets>
            <Ticket></Ticket>
          </InfoTickets>
        </YourCart>
      </CartBody>
    </StyledCart>
  );
});

const Ticket = memo(() => {
  return (
    <StyledTicket>
      <Heading as="h3">delivery</Heading>
      <Info>
        <Heading as="h3">
          Order by 10pm for free next day delivery on Orders overs $100
        </Heading>
        <TicketP>We deliver Monday to Sturday - excluding Holidays</TicketP>
      </Info>
    </StyledTicket>
  );
});

export default Cart;
