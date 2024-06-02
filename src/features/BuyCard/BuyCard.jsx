import styled, { css } from "styled-components";
import Btn from "../../ui/Btn";
import Card from "../../ui/Card";
import PropTypes from "prop-types";

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  ${(props) =>
    props.type === "item"
      ? css`
          width: 100%;
          background-color: var(--light-600);
          border-radius: inherit;
          align-items: center;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 50%;

          align-items: flex-end;
          & img {
            width: 83%;
          }
        `}
`;
export default function BuyCard({ bc }) {
  return (
    <>
      <ImgCardContainer type="item">
        <Card.Img img={bc.img} />
      </ImgCardContainer>
      <Card.ItemType>{bc.type}</Card.ItemType>
      <Card.Title color="--dark-900">{bc.title}</Card.Title>
      <Card.Review rate={bc.rate} numRate={bc.numRate} />
      <div>
        {bc.label && (
          <Btn
            size="small"
            variation="label"
            shape="button"
            disabled={true}
            className="label"
          >
            {bc.label}
          </Btn>
        )}
      </div>
      <Card.Price
        hasDiscount={!!bc.discount}
        price={bc.price}
        currentPrice={bc.currentPrice}
      />
      <Card.WeightOptions />
      <div>
        <Btn size="medium" variation="primary" shape="pill" color="--light-300">
          Add to Cart
        </Btn>
      </div>
    </>
  );
}

BuyCard.propTypes = {
  bc: PropTypes.object,
};
