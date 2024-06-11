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
          & img {
            width: 164px;
            @media (max-width: 540px) {
              width: 120px;
            }
          }
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

const OutOfStockBadge = styled.div`
  border-radius: 50px;
  background-color: rgba(5, 66, 44, 0.3);
  width: 152px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & span {
    text-transform: capitalize;
    font-size: var(--font-size-small-100);
    font-weight: 300;
    color: var(--light-300);
  }
  backdrop-filter: blur(5px);
  @media (max-width: 540px) {
    width: 136px;
    height: 48px;
  }
`;

const Offer = styled.div`
  background-color: var(--gold);
  width: 103px;
  height: 36px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &span {
    color: var(--light-300);
    font-size: var(--font-size-small-100);
    font-weight: 300;
  }
`;

export default function BuyCard({ bc }) {
  return (
    <>
      <ImgCardContainer type="item">
        {!bc.quantity && (
          <OutOfStockBadge>
            <span>out of stock</span>
          </OutOfStockBadge>
        )}
        {bc.offer && (
          <Offer>
            <span>{bc.offer}</span>
          </Offer>
        )}
        <Card.Img img={bc.img} />
      </ImgCardContainer>
      <Card.ItemType>{bc.type}</Card.ItemType>
      <Card.TitleItem color="--dark-900">{bc.title}</Card.TitleItem>
      <Card.Review rate={bc.rate} numRate={bc.numRate} />
      <div className="label-container">
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
        <Btn
          size="medium"
          variation="primary"
          shape="pill"
          color="--light-300"
          disabled={!bc.quantity}
        >
          Add to Cart
        </Btn>
      </div>
    </>
  );
}

BuyCard.propTypes = {
  bc: PropTypes.object,
};
