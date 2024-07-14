import styled, { css } from "styled-components";
import Btn from "../../ui/Btn";
import Card from "../../ui/Card";
import PropTypes from "prop-types";
import screens from "../../utils/screens";
import BuyCardBtn from "./BuyCardBtn";
import Price from "./Price";
import useSetCart from "../../hooks/useSetCart";
import { useCart } from "../cart/cartContext";

const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    position: relative;
    z-index: 2;
  }
`;
const ImgCardContainer = styled(ImgContainer)`
  grid-area: img;
  ${(props) =>
    props.type === "item"
      ? css`
          width: 100%;
          background-color: var(--light-600);
          border-radius: inherit;
          align-items: center;
          height: 100%;
          & img {
            @media (min-width: ${screens.mobile.xxs}) {
              width: 70%;
            }
            @media (min-width: ${screens.mobile.xm}) {
              width: 50%;
            }
            @media (min-width: ${screens.mobile.l}) {
              width: 40%;
            }
            @media (min-width: ${screens.mobile.xxl}) {
              width: 40%;
            }
            @media (min-width: ${screens.tablet.xxs}) {
              width: 35%;
            }
            @media (min-width: ${screens.tablet.xs}) {
              width: 40%;
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

const ImgPanelCardContainer = styled(ImgContainer)`
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  img {
    width: 70%;
    @media (min-width: ${screens.mobile.xm}) {
      width: 50%;
    }
    @media (min-width: ${screens.mobile.xxl}) {
      width: 45%;
    }
    @media (min-width: ${screens.mobile.xxl}) {
      width: 45%;
    }
    @media (min-width: ${screens.tablet.xxs}) {
      width: 30%;
    }
    @media (min-width: ${screens.tablet.xs}) {
      width: 50%;
    }
    @media (min-width: ${screens.tablet.xl}) {
      width: 35%;
    }
  }
`;

const OutOfStockBadge = styled.div`
  border-radius: 50px;
  background-color: rgba(5, 66, 44, 0.3);
  width: 136px;
  height: 48px;
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
`;

const Offer = styled.div`
  background-color: var(--gold);
  width: 96px;
  height: 32px;
  border-top-left-radius: inherit;
  border-bottom-right-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    color: var(--light-300);
    font-size: var(--font-size-small-100);
    font-weight: 300;
  }
`;

const Oval = styled.div`
  position: absolute;
  top: 70%;
  background-color: var(--light-400);
  width: 120%;
  aspect-ratio: 3/1;
  border-radius: 50%;
`;

const BtnPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    width: fit-content;
    align-self: center;
    margin-bottom: 0;
    font-size: var(--font-size-medium-66);
    display: flex;
    .price {
      color: var(--gold);
    }
    .discount {
      order: 1;
    }
  }
`;

const LabelContainer = styled.div`
  grid-area: label;
  height: 100%;
`;

const TypeContainer = styled.div`
  grid-area: type;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BuyCard({ bc, bgRevert }) {
  useSetCart(bc);
  const { name, img, label, type, rate, quantity_stock, offer } = useCart();

  return (
    <>
      <ImgCardContainer
        type="item"
        className="img-container"
        style={{
          backgroundColor: bgRevert && "var(--light-300)",
        }}
      >
        {!quantity_stock && (
          <OutOfStockBadge>
            <span>out of stock</span>
          </OutOfStockBadge>
        )}
        {offer && (
          <Offer>
            <span>{offer}</span>
          </Offer>
        )}
        {bgRevert && <Oval />}
        <Card.Img img={img} />
      </ImgCardContainer>
      <TypeContainer>
        <Card.ItemType>{type}</Card.ItemType>
      </TypeContainer>
      <Price bc={bc} />
      <Card.TitleItem color="--dark-900">{name}</Card.TitleItem>
      <Card.Review rate={rate} numRate={135} />
      <LabelContainer className="label-container">
        {label && (
          <Btn
            size="small"
            variation="label"
            shape="button"
            disabled={true}
            className="label"
          >
            {label}
          </Btn>
        )}
      </LabelContainer>

      <Card.WeightOptions />
      <BuyCardBtn bc={bc} />
    </>
  );
}

export function PanelBuyCard({ bc, handleClick }) {
  useSetCart(bc);
  const { name, img, type, rate, price, discount, quantity_stock, offer } =
    useCart();

  return (
    <>
      <Card.ItemType className="card-item-type">{type}</Card.ItemType>
      <Card.TitleItem color="--light-300">{name}</Card.TitleItem>
      <Card.Review rate={rate} numRate={135} />
      <Card.WeightOptions revert={true} />
      <BtnPrice>
        <Btn
          size="medium"
          variation="primary"
          shape="pill"
          color="--light-300"
          disabled={!quantity_stock}
          onClick={handleClick}
        >
          Add to Cart
        </Btn>
        <Card.Price
          hasDiscount={!!discount}
          price={price + discount}
          currentPrice={price}
        />
      </BtnPrice>
      <ImgPanelCardContainer className="card-img-container">
        {!quantity_stock && (
          <OutOfStockBadge>
            <span>out of stock</span>
          </OutOfStockBadge>
        )}
        {offer && (
          <Offer>
            <span>{offer}</span>
          </Offer>
        )}
        <Card.Img img={img} />
      </ImgPanelCardContainer>
    </>
  );
}

BuyCard.propTypes = {
  bc: PropTypes.object,
  bgRevert: PropTypes.bool,
  handleClick: PropTypes.func,
};

PanelBuyCard.propTypes = {
  bc: PropTypes.object,
  handleClick: PropTypes.func,
};
