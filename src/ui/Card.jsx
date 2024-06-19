import styled, { css } from "styled-components";
import Heading from "./Heading";
import PropTypes from "prop-types";
import { formatCurrency } from "../utils/helper";
import Btn from "./Btn";

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

export default function Card({ children }) {
  return { children };
}

function Img({ img }) {
  return <StyledImg src={img} />;
}

Img.propTypes = {
  img: PropTypes.string,
};

function Review({ rate, numRate }) {
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
}

Review.propTypes = {
  rate: PropTypes.number,
  numRate: PropTypes.number,
};

function Price({ hasDiscount, price, currentPrice }) {
  return (
    <StyledPrice>
      {hasDiscount && <p className="discount">{formatCurrency(price)}</p>}
      <p className="price">{formatCurrency(currentPrice)}</p>
      {!hasDiscount && <span>/ gram</span>}
    </StyledPrice>
  );
}

Price.propTypes = {
  hasDiscount: PropTypes.bool,
  price: PropTypes.number,
  currentPrice: PropTypes.number,
};

function WeightOptions({ revert }) {
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
}

WeightOptions.propTypes = {
  revert: PropTypes.bool,
};

function RateStars({ numStars }) {
  if (numStars === 5)
    return (
      <svg
        width="106"
        height="18"
        viewBox="0 0 106 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2977 2.63297L11.6177 5.27297C11.7977 5.64047 12.2777 5.99297 12.6827 6.06047L15.0752 6.45797C16.6052 6.71297 16.9652 7.82297 15.8627 8.91797L14.0027 10.778C13.6877 11.093 13.5152 11.7005 13.6127 12.1355L14.1452 14.438C14.5652 16.2605 13.5977 16.9655 11.9852 16.013L9.74268 14.6855C9.33768 14.4455 8.67018 14.4455 8.25768 14.6855L6.01518 16.013C4.41018 16.9655 3.43518 16.253 3.85518 14.438L4.38768 12.1355C4.48518 11.7005 4.31268 11.093 3.99768 10.778L2.13768 8.91797C1.04268 7.82297 1.39518 6.71297 2.92518 6.45797L5.31768 6.06047C5.71518 5.99297 6.19518 5.64047 6.37518 5.27297L7.69518 2.63297C8.41518 1.20047 9.58518 1.20047 10.2977 2.63297Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.2977 2.63297L33.6177 5.27297C33.7977 5.64047 34.2777 5.99297 34.6827 6.06047L37.0752 6.45797C38.6052 6.71297 38.9652 7.82297 37.8627 8.91797L36.0027 10.778C35.6877 11.093 35.5152 11.7005 35.6127 12.1355L36.1452 14.438C36.5652 16.2605 35.5977 16.9655 33.9852 16.013L31.7427 14.6855C31.3377 14.4455 30.6702 14.4455 30.2577 14.6855L28.0152 16.013C26.4102 16.9655 25.4352 16.253 25.8552 14.438L26.3877 12.1355C26.4852 11.7005 26.3127 11.093 25.9977 10.778L24.1377 8.91797C23.0427 7.82297 23.3952 6.71297 24.9252 6.45797L27.3177 6.06047C27.7152 5.99297 28.1952 5.64047 28.3752 5.27297L29.6952 2.63297C30.4152 1.20047 31.5852 1.20047 32.2977 2.63297Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M54.2977 2.63297L55.6177 5.27297C55.7977 5.64047 56.2777 5.99297 56.6827 6.06047L59.0752 6.45797C60.6052 6.71297 60.9652 7.82297 59.8627 8.91797L58.0027 10.778C57.6877 11.093 57.5152 11.7005 57.6127 12.1355L58.1452 14.438C58.5652 16.2605 57.5977 16.9655 55.9852 16.013L53.7427 14.6855C53.3377 14.4455 52.6702 14.4455 52.2577 14.6855L50.0152 16.013C48.4102 16.9655 47.4352 16.253 47.8552 14.438L48.3877 12.1355C48.4852 11.7005 48.3127 11.093 47.9977 10.778L46.1377 8.91797C45.0427 7.82297 45.3952 6.71297 46.9252 6.45797L49.3177 6.06047C49.7152 5.99297 50.1952 5.64047 50.3752 5.27297L51.6952 2.63297C52.4152 1.20047 53.5852 1.20047 54.2977 2.63297Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.2977 2.63297L77.6177 5.27297C77.7977 5.64047 78.2777 5.99297 78.6827 6.06047L81.0752 6.45797C82.6052 6.71297 82.9652 7.82297 81.8627 8.91797L80.0027 10.778C79.6877 11.093 79.5152 11.7005 79.6127 12.1355L80.1452 14.438C80.5652 16.2605 79.5977 16.9655 77.9852 16.013L75.7427 14.6855C75.3377 14.4455 74.6702 14.4455 74.2577 14.6855L72.0152 16.013C70.4102 16.9655 69.4352 16.253 69.8552 14.438L70.3877 12.1355C70.4852 11.7005 70.3127 11.093 69.9977 10.778L68.1377 8.91797C67.0427 7.82297 67.3952 6.71297 68.9252 6.45797L71.3177 6.06047C71.7152 5.99297 72.1952 5.64047 72.3752 5.27297L73.6952 2.63297C74.4152 1.20047 75.5852 1.20047 76.2977 2.63297Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.2977 2.63297L99.6177 5.27297C99.7977 5.64047 100.278 5.99297 100.683 6.06047L103.075 6.45797C104.605 6.71297 104.965 7.82297 103.863 8.91797L102.003 10.778C101.688 11.093 101.515 11.7005 101.613 12.1355L102.145 14.438C102.565 16.2605 101.598 16.9655 99.9852 16.013L97.7427 14.6855C97.3377 14.4455 96.6702 14.4455 96.2577 14.6855L94.0152 16.013C92.4102 16.9655 91.4352 16.253 91.8552 14.438L92.3877 12.1355C92.4852 11.7005 92.3127 11.093 91.9977 10.778L90.1377 8.91797C89.0427 7.82297 89.3952 6.71297 90.9252 6.45797L93.3177 6.06047C93.7152 5.99297 94.1952 5.64047 94.3752 5.27297L95.6952 2.63297C96.4152 1.20047 97.5852 1.20047 98.2977 2.63297Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (numStars === 4)
    return (
      <svg
        width="96"
        height="16"
        viewBox="0 0 96 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1533 2.33977L30.3266 4.68643C30.4866 5.0131 30.9133 5.32643 31.2733 5.38643L33.3999 5.73977C34.7599 5.96643 35.0799 6.9531 34.0999 7.92643L32.4466 9.57977C32.1666 9.85977 32.0133 10.3998 32.0999 10.7864L32.5733 12.8331C32.9466 14.4531 32.0866 15.0798 30.6533 14.2331L28.6599 13.0531C28.2999 12.8398 27.7066 12.8398 27.3399 13.0531L25.3466 14.2331C23.9199 15.0798 23.0533 14.4464 23.4266 12.8331L23.8999 10.7864C23.9866 10.3998 23.8333 9.85977 23.5533 9.57977L21.8999 7.92643C20.9266 6.9531 21.2399 5.96643 22.5999 5.73977L24.7266 5.38643C25.0799 5.32643 25.5066 5.0131 25.6666 4.68643L26.8399 2.33977C27.4799 1.06643 28.5199 1.06643 29.1533 2.33977Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.1533 2.33977L50.3266 4.68643C50.4866 5.0131 50.9133 5.32643 51.2733 5.38643L53.3999 5.73977C54.7599 5.96643 55.0799 6.9531 54.0999 7.92643L52.4466 9.57977C52.1666 9.85977 52.0133 10.3998 52.0999 10.7864L52.5733 12.8331C52.9466 14.4531 52.0866 15.0798 50.6533 14.2331L48.6599 13.0531C48.2999 12.8398 47.7066 12.8398 47.3399 13.0531L45.3466 14.2331C43.9199 15.0798 43.0533 14.4464 43.4266 12.8331L43.8999 10.7864C43.9866 10.3998 43.8333 9.85977 43.5533 9.57977L41.8999 7.92643C40.9266 6.9531 41.2399 5.96643 42.5999 5.73977L44.7266 5.38643C45.0799 5.32643 45.5066 5.0131 45.6666 4.68643L46.8399 2.33977C47.4799 1.06643 48.5199 1.06643 49.1533 2.33977Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M69.1533 2.33977L70.3266 4.68643C70.4866 5.0131 70.9133 5.32643 71.2733 5.38643L73.3999 5.73977C74.7599 5.96643 75.0799 6.9531 74.0999 7.92643L72.4466 9.57977C72.1666 9.85977 72.0133 10.3998 72.0999 10.7864L72.5733 12.8331C72.9466 14.4531 72.0866 15.0798 70.6533 14.2331L68.6599 13.0531C68.2999 12.8398 67.7066 12.8398 67.3399 13.0531L65.3466 14.2331C63.9199 15.0798 63.0533 14.4464 63.4266 12.8331L63.8999 10.7864C63.9866 10.3998 63.8333 9.85977 63.5533 9.57977L61.8999 7.92643C60.9266 6.9531 61.2399 5.96643 62.5999 5.73977L64.7266 5.38643C65.0799 5.32643 65.5066 5.0131 65.6666 4.68643L66.8399 2.33977C67.4799 1.06643 68.5199 1.06643 69.1533 2.33977Z"
          fill="#F2BC1B"
          stroke="#F2BC1B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M89.1533 2.33977L90.3266 4.68643C90.4866 5.0131 90.9133 5.32643 91.2733 5.38643L93.3999 5.73977C94.7599 5.96643 95.0799 6.9531 94.0999 7.92643L92.4466 9.57977C92.1666 9.85977 92.0133 10.3998 92.0999 10.7864L92.5733 12.8331C92.9466 14.4531 92.0866 15.0798 90.6533 14.2331L88.6599 13.0531C88.2999 12.8398 87.7066 12.8398 87.3399 13.0531L85.3466 14.2331C83.9199 15.0798 83.0533 14.4464 83.4266 12.8331L83.8999 10.7864C83.9866 10.3998 83.8333 9.85977 83.5533 9.57977L81.8999 7.92643C80.9266 6.9531 81.2399 5.96643 82.5999 5.73977L84.7266 5.38643C85.0799 5.32643 85.5066 5.0131 85.6666 4.68643L86.8399 2.33977C87.4799 1.06643 88.5199 1.06643 89.1533 2.33977Z"
          fill="#F4F4F4"
          stroke="#F4F4F4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
}

RateStars.propTypes = {
  numStars: PropTypes.number,
};

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
