/* eslint-disable react/display-name */
import { memo } from "react";
import Counter from "./Counter";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import PropTypes from "prop-types";
import screens from "../../utils/screens";
import { useProgress } from "../../context/progressProvider";

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 16px;
  border-bottom: 1px solid var(--light-600);
  padding: 24px 0 16px;
`;

const ImgContainer = styled.div`
  width: 48px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--light-600);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 83.3%;
  }
`;

const CounterContainer = styled.div`
  width: 81%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 12px;

  h4 {
    font-size: var(--font-size-small-100);
  }

  @media (min-width: ${screens.mobile.xxl}) {
    row-gap: 16px;
  }

  @media (min-width: ${screens.tablet.xxs}) {
    width: calc(100% - (48px + 16px));
  }
`;

const ItemsCounter = styled.div`
  display: grid;
  grid-template-columns: 75% 5% 20%;
  grid-template-rows: calc(50% - 6px) calc(50% - 6px);
  grid-template-areas: "title title title" "counter . price";
  row-gap: 12px;
  width: 100%;
  h4 {
    grid-area: title;
    @media (min-width: ${screens.mobile.xxl}) {
      font-size: var(--font-size-medium-33);
    }
  }
  p {
    font-size: var(--font-size-small-100);
    @media (min-width: ${screens.mobile.xxl}) {
      font-size: var(--font-size-medium-33);
    }
  }
  p.price {
    color: var(--dark-900);
  }
  .counter + .card-price {
    p.price {
      color: var(--light-900);
    }
  }
  @media (min-width: ${screens.mobile.xxl}) {
    row-gap: 16px;
  }
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-600);
  padding-top: 16px;
  width: 100%;
  h4 {
    color: var(--light-900);
    margin-bottom: 0;
    text-transform: capitalize;
  }
  h4,
  p {
    font-size: var(--font-size-small-100);
    @media (min-width: ${screens.mobile.xxl}) {
      font-size: var(--font-size-medium-33);
    }
  }
  p.price {
    color: var(--dark-900);
  }
`;

const InitialPrice = styled.div`
  display: flex;
  column-gap: 12px;
  .card-price {
    width: auto;
  }
  span,
  p {
    font-size: var(--font-size-small-100);
    line-height: 150%;
    letter-spacing: 0;
  }
  span {
    color: var(--light-900);
    font-weight: 300;
  }
  p {
    color: var(--dark-900);
    font-weight: 400;
  }
`;

const Item = memo(({ item }) => {
  const { currentPoint } = useProgress();

  return (
    <StyledItem>
      <ImgContainer>
        <Card.Img img={item.img} alt="" />
      </ImgContainer>
      <CounterContainer>
        <ItemsCounter>
          <Card.TitleItem case="capitalize" color="--light-900">
            {item.name} · {item.weight.label}
          </Card.TitleItem>
          {(currentPoint !== "cart" || currentPoint !== "checkout") && (
            <InitialPrice>
              <span>{item.quantity}×</span>
              <Card.Price
                currentPrice={Math.round(
                  item.basePrice * item.weight.weight - item.discount
                )}
                showGram={false}
              />
            </InitialPrice>
          )}
          {currentPoint === "cart" && (
            <Counter
              initialValue={item.quantity}
              itemId={item.id}
              toCount="item"
              price={Math.round(
                item.basePrice * item.weight.weight - item.discount
              )}
            />
          )}
          <Card.Price currentPrice={item.price} showGram={false} />
        </ItemsCounter>
        {item.additions.integras.length && (
          <>
            {item.additions.integras.map((integra, i) => (
              <ItemsCounter key={i}>
                <Card.TitleItem case="capitalize" color="--light-900">
                  add integra pack - {integra.label}
                </Card.TitleItem>
                {currentPoint === "cart" && (
                  <Counter
                    itemId={item.id}
                    integraId={integra.id}
                    initialValue={integra.quantity}
                    toCount="integra"
                    price={Math.round(integra.price)}
                  />
                )}
                {currentPoint === "order" && (
                  <InitialPrice>
                    <span>{integra.quantity}×</span>
                    <Card.Price currentPrice={integra.price} showGram={false} />
                  </InitialPrice>
                )}
                <Card.Price
                  currentPrice={integra.price * integra.quantity}
                  showGram={false}
                />
              </ItemsCounter>
            ))}
            <SubTotal>
              <Heading as="h4">subtotal</Heading>
              <Card.Price currentPrice={item.totalPrice} showGram={false} />
            </SubTotal>
          </>
        )}
      </CounterContainer>
    </StyledItem>
  );
});

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
