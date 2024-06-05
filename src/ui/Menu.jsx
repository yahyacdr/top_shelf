import styled, { css } from "styled-components";
import "swiper/css";

const ItemCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  ${(props) =>
    props.distribution === "grid" &&
    css`
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 32px;
      /* min-height: 1136px; */
    `}
`;

const StyledCardContainer = styled.div`
  text-align: center;
  height: 100%;
`;

const CoverCard = styled(StyledCardContainer)`
  display: flex;
  justify-content: flex-start;
  margin-right: 32px;
  border-radius: 16px;

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
  width: 379px;
  padding: 40px 40px 0;
  & > p {
    margin-bottom: 20px;
  }
  & > img {
    position: absolute;
    width: 261.68px;
    height: 371px;
    transform: rotate(5deg) translate(-80%, 50%);
    left: 100%;
    top: -50%;
    z-index: 0;
  }
  & > h3 {
    margin-bottom: 8px;
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
          grid-template-columns: 1fr;
          grid-template-rows:
            40% calc((60% / 7))
            calc((60% / 7) * 1.2)
            calc((60% / 7) / 1.2)
            calc((60% / 7) / 1.5)
            calc(60% / 7)
            calc(60% / 7)
            calc((60% / 7) * 1.3);
        `}

  /* margin-left: 15px; */
  border-radius: 8px;
  width: ${(props) => props.width};
  & > h3 {
    margin-bottom: 0;
    margin-top: 0px;
  }
  & > p {
    text-transform: uppercase;
    margin-top: 20px;
  }
  & button.label {
    color: var(--green-900);
    font-size: var(--font-size-small-50);
    font-weight: 400;
    padding: 5px 8px;
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Menu({ children }) {
  return { children };
}

Menu.ItemCards = ItemCards;
Menu.CoverCard = CoverCard;
Menu.CardContainer = CardContainer;

export default Menu;
