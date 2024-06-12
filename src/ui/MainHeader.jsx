import styled from "styled-components";
import Navbar from "./Navbar";
import PromoBanner from "../pages/Landing/PromoBanner";
import { useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function MainHeader() {
  const location = useLocation();
  return (
    <StyledHeader>
      <Navbar />
      {location.pathname === "/" && <PromoBanner />}
    </StyledHeader>
  );
}
