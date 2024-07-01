/* eslint-disable react/display-name */

import styled, { css } from "styled-components";
import Heading from "./Heading";
import PropTypes from "prop-types";
import { formatCurrency } from "../utils/helper";
import Btn from "./Btn";
import { memo } from "react";

const StyledImg = styled.img`
  /* width: 50%; */
`;

const Title = styled(Heading).attrs(() => ({ as: "h3" }))`
  text-transform: ${(props) => props.case};
  color: var(${(props) => props.color});
`;

const TitleItem = styled(Heading).attrs(() => ({ as: "h4" }))`
  text-transform: ${(props) => props.case};
  color: var(${(props) => props.color});
  margin-bottom: 0;
`;

const Name = styled(Heading).attrs(() => ({ as: "h4" }))`
  color: var(${(props) => props.color});
  text-transform: capitalize;
`;

const Desc = styled.p`
  font-size: var(--font-size-medium-33);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 150%;
  color: var(${(props) => props.color});
  opacity: ${(props) => props.opacity};
  max-width: ${(props) => props.maxwidth};
  @media (max-width: 640px) {
    font-size: var(--font-size-small-100);
  }
`;

const Date = styled.span`
  font-size: var(--font-size-small-100);
  font-weight: 300;
  color: var(--light-900);
  text-transform: capitalize;
`;

const Tag = styled.span`
  ${(props) =>
    props.shape === "circle" &&
    css`
      border-radius: 50%;
      position: absolute;
      aspect-ratio: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const ItemType = styled.p`
  color: var(--light-900);
  text-transform: uppercase;
  margin-top: 20px;
  font-size: var(--font-size-small-100);
  @media (max-width: 540px) {
    font-size: var(--font-size-small-50);
  }
`;

const StyledReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: var(--dark-900);
  & svg {
    margin-right: 10px;
    @media (max-width: 540px) {
      margin-right: 5px;
    }
  }
  & span {
    color: var(--light-700);
    margin-inline: 10px;
    @media (max-width: 540px) {
      margin-inline: 5px;
    }
  }
  @media (max-width: 540px) {
    font-size: var(--font-size-small-50);
  }
`;

const StyledPrice = styled.div`
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  align-self: flex-end;
  & p.discount {
    color: var(--light-900);
    display: inline-block;
    margin-right: 15px;
    text-decoration: line-through;
  }
  & p.price {
    color: var(--red-600);
    display: inline-block;
    margin-right: 5px;
  }
  & span {
    color: var(--light-700);
    font-size: var(--font-size-small-100);
  }
  @media (max-width: 540px) {
    font-size: var(--font-size-small-100);
  }
`;

const StyledWeightOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & button {
    padding: 5px 10px;
    &:not(:last-child) {
      margin-right: 15px;
      @media (max-width: 540px) {
        margin-right: 5px;
      }
    }
    ${(props) =>
      props.revert &&
      css`
        color: var(--light-300);
        background-color: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-size: var(--font-size-small-50);
      `}
  }
`;

const Card = memo(({ children }) => {
  return { children };
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const Img = memo(({ img }) => {
  return <StyledImg src={img} />;
});

Img.propTypes = {
  img: PropTypes.string,
};

const Review = memo(({ rate, numRate }) => {
  return (
    <StyledReview className="card-review">
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.86495 2.25531L7.74495 4.01531C7.86495 4.26031 8.18495 4.49531 8.45495 4.54031L10.05 4.80531C11.07 4.97531 11.31 5.71531 10.575 6.44531L9.33495 7.68531C9.12495 7.89531 9.00995 8.30031 9.07495 8.59031L9.42995 10.1253C9.70995 11.3403 9.06495 11.8103 7.98995 11.1753L6.49495 10.2903C6.22495 10.1303 5.77995 10.1303 5.50495 10.2903L4.00995 11.1753C2.93995 11.8103 2.28995 11.3353 2.56995 10.1253L2.92495 8.59031C2.98995 8.30031 2.87495 7.89531 2.66495 7.68531L1.42495 6.44531C0.694954 5.71531 0.929955 4.97531 1.94995 4.80531L3.54495 4.54031C3.80995 4.49531 4.12995 4.26031 4.24995 4.01531L5.12995 2.25531C5.60995 1.30031 6.38995 1.30031 6.86495 2.25531Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>
        {rate} /5 <span>|</span> {numRate} <span>Reviews</span>
      </p>
    </StyledReview>
  );
});

Review.propTypes = {
  rate: PropTypes.number,
  numRate: PropTypes.number,
};

const Price = memo(({ hasDiscount, price, currentPrice }) => {
  return (
    <StyledPrice>
      {hasDiscount && <p className="discount">{formatCurrency(price)}</p>}
      <p className="price">{formatCurrency(currentPrice)}</p>
      {!hasDiscount && <span>/ gram</span>}
    </StyledPrice>
  );
});

Price.propTypes = {
  hasDiscount: PropTypes.bool,
  price: PropTypes.number,
  currentPrice: PropTypes.number,
};

const WeightOptions = memo(({ revert }) => {
  return (
    <StyledWeightOptions revert={revert} className="card-weights">
      <div>
        <Btn
          size="small"
          variation="secondary"
          shape="button"
          color="--dark-900"
        >
          28g
        </Btn>
        <Btn
          size="small"
          variation="secondary"
          shape="button"
          color="--dark-900"
        >
          1/2lb
        </Btn>
        <Btn
          size="small"
          variation="secondary"
          shape="button"
          color="--dark-900"
        >
          1/4lb
        </Btn>
      </div>
    </StyledWeightOptions>
  );
});

WeightOptions.propTypes = {
  revert: PropTypes.bool,
};

const RateStars = memo(({ numStars }) => {
  return <div>{returnStars(numStars)}</div>;
});

RateStars.propTypes = {
  numStars: PropTypes.number,
};

function returnStars(num = 1) {
  const filledStars = Array(num).fill(
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
        fill="#F2BC1B"
        stroke="#F2BC1B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const emptyStars = Array(5 - num).fill(
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
        fill="white"
        stroke="#C8C9CB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return [...filledStars, ...emptyStars];
}

Card.Img = Img;
Card.Title = Title;
Card.Desc = Desc;
Card.ItemType = ItemType;
Card.Review = Review;
Card.Price = Price;
Card.WeightOptions = WeightOptions;
Card.Name = Name;
Card.RateStars = RateStars;
Card.Date = Date;
Card.TitleItem = TitleItem;
Card.Tag = Tag;

export default Card;
