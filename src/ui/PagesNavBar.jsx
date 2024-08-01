/* eslint-disable react/display-name */

import styled from "styled-components";
import Btn from "./Btn";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Pages = [
  { name: "Shop All", to: "/product" },
  { name: "Flower", to: "/" },
  { name: "Edibles", to: "/" },
  { name: "Mushrooms", to: "/" },
  { name: "Promotions/Bundles", to: "/" },
  { name: "Support", to: "/" },
  { name: "Rewards", to: "/" },
  { name: "Blog", to: "/" },
];

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  column-gap: 48px;
  flex-wrap: wrap;
  padding-inline: 32px;
`;

const PagesNavBar = memo(() => {
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

export default PagesNavBar;
