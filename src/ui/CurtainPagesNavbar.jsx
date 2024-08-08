/* eslint-disable react/display-name */

import styled, { css, keyframes } from "styled-components";
import Btn from "./Btn";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Pages = [
  { name: "Shop All", to: "/product" },
  { name: "Flower", to: "/category" },
  { name: "Edibles", to: "/category" },
  { name: "Mushrooms", to: "/category" },
  { name: "Promotions/Bundles", to: "/category" },
  { name: "Support", to: "/" },
  { name: "Rewards", to: "/" },
  { name: "Blog", to: "/" },
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
  z-index: 99;
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

const CurtainPagesNavbar = memo(() => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      {Pages.map((p, i) => (
        <Btn
          size="small"
          variation="regular"
          shape="none"
          color="--dark-600"
          key={i}
          className="pages-btns"
          onClick={() => navigate(p.to)}
        >
          {p.name}
        </Btn>
      ))}
    </StyledContainer>
  );
});

export default CurtainPagesNavbar;
