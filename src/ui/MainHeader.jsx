import styled from "styled-components";
import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function MainHeader() {
  return (
    <StyledHeader>
      <Navbar />
      <PromoBanner />
    </StyledHeader>
  );
}
