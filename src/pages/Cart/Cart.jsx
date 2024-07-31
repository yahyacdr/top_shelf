/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Card from "../../ui/Card";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { getCart, getTotalItems } from "../../features/cart/cartSlice";
import ProgressProvider from "../../context/progressProvider";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helper";
import Counter from "./Counter";

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

const StyledTicket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 16px;
  h4 {
    font-size: var(--font-size-medium-50);
    font-weight: 500;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 16px;
  padding: 16px;
  border: 1px solid var(--light-600);
  border-radius: 12px;
  p {
    font-weight: 400;
  }
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 16px;
  border-bottom: 1px solid var(--light-900);
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 12px;
`;

const ItemsCounter = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  grid-template-rows: 50% 50%;
  grid-template-areas: "title . ." "counter . price";
  h4 {
    grid-area: title;
  }
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-900);
`;

const Cart = memo(() => {
  const cart = useSelector(getCart);
  const count = useSelector(getTotalItems);
  console.log(cart);
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
                  <GetSvg index={i} />
                </Ticket>
              ))}
            </InfoTickets>
          </YourCart>
        </CartBody>
      </StyledCart>
    </ProgressProvider>
  );
});

const Ticket = memo(({ children, title = "", offer = "", desc }) => {
  return (
    <StyledTicket>
      {title && (
        <Card.TitleItem case="capitalize" color="--green-200">
          {title}
        </Card.TitleItem>
      )}
      <Info>
        {children}
        {offer && <Card.TitleItem color={"--dark-900"}>{offer}</Card.TitleItem>}
        <Card.Desc color="--dark-300">{desc}</Card.Desc>
      </Info>
    </StyledTicket>
  );
});

Ticket.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  offer: PropTypes.string,
  desc: PropTypes.string,
};

const Item = memo(({ item }) => {
  console.log(item);

  return (
    <StyledItem>
      <Card.img src={item.img} />
      <CounterContainer>
        <ItemsCounter>
          <Card.TitleItem case="capitalize" color="--light-900">
            {item.name}
          </Card.TitleItem>
          <Counter initialValue={item.quantity} itemId={item.id} count="item" />
          <Card.Price>{formatCurrency(2)}</Card.Price>
        </ItemsCounter>
        {item.additions && (
          <ItemsCounter>
            <Card.TitleItem case="capitalize" color="--light-900">
              {item.name}
            </Card.TitleItem>
            <Counter
              initialValue={item.quantity}
              itemId={item.id}
              count="item"
            />
            <SubTotal>
              <Card.Price>{formatCurrency(245)}</Card.Price>
            </SubTotal>
          </ItemsCounter>
        )}
      </CounterContainer>
    </StyledItem>
  );
});

const GetSvg = memo(({ index }) => {
  if (index === 0)
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#F2F6F4" />
        <path
          d="M19.1673 31.058C19.9189 30.2513 21.0648 30.3155 21.7248 31.1955L22.6506 32.433C23.3931 33.4138 24.5939 33.4138 25.3364 32.433L26.2623 31.1955C26.9223 30.3155 28.0681 30.2513 28.8198 31.058C30.4514 32.7997 31.7806 32.2222 31.7806 29.7838V19.453C31.7806 15.7588 30.9189 14.833 27.4539 14.833H20.5239C17.0589 14.833 16.1973 15.7588 16.1973 19.453V29.7747C16.2064 32.2222 17.5448 32.7905 19.1673 31.058Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.4795 22.167H26.5212"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (index === 1)
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#F2F6F4" />
        <path
          d="M15.9053 19.8193L23.9994 24.5035L32.0386 19.8468"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.999 32.8083V24.4941"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.8087 21.4055V26.5939C32.8087 26.6397 32.8088 26.6763 32.7996 26.7222C32.1579 26.163 31.3329 25.833 30.4162 25.833C29.5546 25.833 28.7571 26.1355 28.1246 26.6397C27.2812 27.3089 26.7496 28.3447 26.7496 29.4997C26.7496 30.1872 26.9421 30.838 27.2812 31.388C27.3637 31.5347 27.4646 31.6722 27.5746 31.8005L25.8971 32.7264C24.8521 33.313 23.1471 33.313 22.1021 32.7264L17.2071 30.013C16.0979 29.3989 15.1904 27.8589 15.1904 26.5939V21.4055C15.1904 20.1405 16.0979 18.6005 17.2071 17.9864L22.1021 15.273C23.1471 14.6863 24.8521 14.6863 25.8971 15.273L30.7921 17.9864C31.9013 18.6005 32.8087 20.1405 32.8087 21.4055Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.0833 29.4997C34.0833 30.5997 33.5975 31.5805 32.8367 32.2497C32.1858 32.818 31.3425 33.1663 30.4167 33.1663C28.3908 33.1663 26.75 31.5255 26.75 29.4997C26.75 28.3447 27.2817 27.3088 28.125 26.6397C28.7575 26.1355 29.555 25.833 30.4167 25.833C32.4425 25.833 34.0833 27.4738 34.0833 29.4997Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.6458 28.3535V29.7285L29.5 30.416"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (index === 2)
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#F2F6F4" />
        <path
          d="M26.7497 14.833V23.9997C26.7497 25.008 25.9247 25.833 24.9163 25.833H14.833V19.9847C15.5022 20.7822 16.5289 21.2772 17.6655 21.2497C18.5914 21.2313 19.4255 20.8738 20.0488 20.278C20.333 20.0397 20.5714 19.7372 20.7547 19.4072C21.0847 18.848 21.268 18.188 21.2497 17.5005C21.2222 16.428 20.7455 15.4838 20.003 14.833H26.7497Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.1663 25.833V28.583C33.1663 30.1047 31.938 31.333 30.4163 31.333H29.4997C29.4997 30.3247 28.6747 29.4997 27.6663 29.4997C26.658 29.4997 25.833 30.3247 25.833 31.333H22.1663C22.1663 30.3247 21.3413 29.4997 20.333 29.4997C19.3247 29.4997 18.4997 30.3247 18.4997 31.333H17.583C16.0613 31.333 14.833 30.1047 14.833 28.583V25.833H24.9163C25.9247 25.833 26.7497 25.008 26.7497 23.9997V17.583H28.4364C29.0964 17.583 29.7014 17.9405 30.0314 18.5089L31.5988 21.2497H30.4163C29.9122 21.2497 29.4997 21.6622 29.4997 22.1663V24.9163C29.4997 25.4205 29.9122 25.833 30.4163 25.833H33.1663Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.3333 33.1667C21.3459 33.1667 22.1667 32.3459 22.1667 31.3333C22.1667 30.3208 21.3459 29.5 20.3333 29.5C19.3208 29.5 18.5 30.3208 18.5 31.3333C18.5 32.3459 19.3208 33.1667 20.3333 33.1667Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.6663 33.1667C28.6789 33.1667 29.4997 32.3459 29.4997 31.3333C29.4997 30.3208 28.6789 29.5 27.6663 29.5C26.6538 29.5 25.833 30.3208 25.833 31.3333C25.833 32.3459 26.6538 33.1667 27.6663 33.1667Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.1667 24V25.8333H30.4167C29.9125 25.8333 29.5 25.4208 29.5 24.9167V22.1667C29.5 21.6625 29.9125 21.25 30.4167 21.25H31.5991L33.1667 24Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2503 17.5837C21.2503 18.6837 20.7645 19.6645 20.0037 20.3337C19.3528 20.902 18.5095 21.2503 17.5837 21.2503C15.5578 21.2503 13.917 19.6095 13.917 17.5837C13.917 16.4287 14.4487 15.3928 15.292 14.7237C15.9245 14.2195 16.722 13.917 17.5837 13.917C19.6095 13.917 21.2503 15.5578 21.2503 17.5837Z"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8128 16.4375V17.8125L16.667 18.5"
          stroke="#05422C"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
});

GetSvg.propTypes = {
  index: PropTypes.number,
};

export default Cart;
