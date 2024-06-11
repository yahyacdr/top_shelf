import styled, { css, keyframes } from "styled-components";
import Btn from "./Btn";
// import { createPortal } from "react-dom";

const PagesNames = [
  "Shop All",
  "Flower",
  "Edibles",
  "Mushrooms",
  "Promotions/Bundles",
  "Support",
  "Rewards",
  "Blog",
];

const FadeInAnimation = keyframes`
    0% {
        left: -100%;
    }
    100%{
        left: 0;
    }
`;

const FadeOutAnimation = keyframes`
    0% {
        left: -100%;
    }
    100%{
        left: 0;
    }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  row-gap: 12px;
  flex-wrap: wrap;
  padding: 32px;
  position: absolute;
  z-index: 0;
  background-color: var(--light-300);
  top: 100%;
  left: -100%;
  /* transform: translateY(-18%); */
  transition: 0.3s;
  height: 100vh;
  ${(props) =>
    props.open
      ? css`
          animation: ${FadeInAnimation} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${FadeOutAnimation} 0.5s ease-in-out forwards;
        `};
`;

export default function CurtainPagesNavbar() {
  return (
    <StyledContainer>
      {PagesNames.map((pn) => (
        <Btn
          size="small"
          variation="regular"
          shape="none"
          color="--dark-600"
          key={pn}
          className="pages-btns"
          disabled={true}
        >
          {pn}
        </Btn>
      ))}
    </StyledContainer>
  );
}
