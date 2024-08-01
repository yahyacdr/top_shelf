/* eslint-disable react/display-name */
import { memo } from "react";
import Counter from "./Counter";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  }
  p {
    font-size: var(--font-size-small-100);
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
  }
`;

const Item = memo(({ item }) => {
  console.log(item);

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
          <Counter
            initialValue={item.quantity}
            itemId={item.id}
            toCount="item"
          />
          <Card.Price price={2} showGram={false} />
        </ItemsCounter>
        {item.additions.integras.length && (
          <>
            {item.additions.integras.map((integra, i) => (
              <ItemsCounter key={i}>
                <Card.TitleItem case="capitalize" color="--light-900">
                  add integra pack - {integra.label}
                </Card.TitleItem>
                <Counter
                  itemId={integra.id}
                  initialValue={integra.quantity}
                  toCount="integra"
                />
                <Card.Price price={2} showGram={false} />
              </ItemsCounter>
            ))}
            <SubTotal>
              <Heading as="h4">subtotal</Heading>
              <Card.Price price={245} showGram={false} />
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
