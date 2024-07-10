/* eslint-disable react/display-name */

import PropTypes from "prop-types";
import { memo } from "react";
import styled, { css } from "styled-components";
import "swiper/css";
import screens from "../utils/screens";

const ItemCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  width: ${(props) => props.width};
  position: relative;
  ${(props) =>
    props.distribution === "grid" &&
    css`
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 32px 24px;
    `}
  flex-wrap: wrap;
`;

const StyledCardContainer = styled.div`
  text-align: center;
  height: 100%;
`;

const CoverCard = styled(StyledCardContainer)`
  display: flex;
  justify-content: flex-start;
  border-radius: 16px;
  min-width: 232px;

  ${(props) =>
    props.side === "start"
      ? css`
          align-items: flex-start;
          text-align: left;
        `
      : props.side === "center"
      ? css`
          align-items: center;
          text-align: center;
        `
      : css`
          align-items: flex-end;
          text-align: right;
        `};
  flex-direction: column;
  background-color: var(--green-900);
  position: relative;
  overflow-x: hidden;
  width: calc(100vw - 48px);
  & > h3 {
    margin-bottom: 8px;
  }

  @media (max-width: 540px) {
    width: calc(100vw - 48px);
    margin-right: 0;
  }
`;

const CardContainer = styled(StyledCardContainer)`
  ${(props) =>
    props.distribution === "flex"
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          /* row-gap: 12%; */
        `
      : css`
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: 30% 9% 18% 8% 8% 8% 8% 11%;
          grid-template-areas: "img" "type" "title" "review" "label" "price" "weights" "btn";
          @media (max-width: ${screens.mobile.m}) {
            grid-template-rows: 35% 8% 15% 7% 8% 8% 8% 11%;
          }
          @media (min-width: ${screens.mobile.xxl}) {
            grid-template-rows: 37% 9% 11% 8% 8% 8% 8% 11%;
          }
          @media (min-width: ${screens.tablet.xxm}) {
            grid-template-rows: 38% 9% 11% 7% 8% 8% 8% 11%;
          }
        `}
  min-width: 159px;
  border-radius: 8px;
  height: 525px;
  width: calc(100% / 2 - 12px);
  & > h3 {
    margin-bottom: 0;
    margin-top: 0px;
  }
  & button.label {
    color: var(--green-900);
    font-size: var(--font-size-small-50);
    font-weight: 400;
    padding: 5px 8px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${screens.tablet.s}) {
    width: calc(100% / 3 - 16px);
  }

  @media (min-width: ${screens.desktop.xs}) {
    width: calc(100% / 4 - 18px);
  }

  @media (min-width: ${screens.desktop.xm}) {
    width: calc(100% / 5 - 20px);
  }
`;

const ReviewCardContainer = styled(StyledCardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  row-gap: 20px;
  position: relative;
  border: 2px solid #f4f4f4;
  border-radius: 16px;
  padding: 24px;
  height: 347px;
  .date {
    height: 10%;
  }
  & > h3 {
    margin-bottom: 0;
    margin-top: 0px;
  }
  & button.label {
    color: var(--green-900);
    font-size: var(--font-size-small-50);
    font-weight: 400;
    padding: 5px 8px;
  }
`;

const Menu = memo(({ children }) => {
  return { children };
});

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.ItemCards = ItemCards;
Menu.CoverCard = CoverCard;
Menu.CardContainer = CardContainer;
Menu.ReviewCardContainer = ReviewCardContainer;

export default Menu;
