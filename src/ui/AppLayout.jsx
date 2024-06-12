import styled from "styled-components";
import OfferBar from "./OfferBar";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export default function AppLayout() {
  return (
    <StyledLayout>
      <OfferBar />
      <MainHeader />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
}
