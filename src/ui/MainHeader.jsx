/* eslint-disable react/display-name */

import styled from "styled-components";
import Navbar from "./Navbar";
import PromoBanner from "../pages/Landing/PromoBanner";
import { useLocation } from "react-router-dom";
import { memo } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MainHeader = memo(() => {
  const location = useLocation();
  return (
    <StyledHeader>
      <Navbar />
      {location.pathname === "/" && <PromoBanner />}
    </StyledHeader>
  );
});

export default MainHeader;
