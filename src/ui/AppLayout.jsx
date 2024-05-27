import styled from "styled-components";
import OfferBar from "./OfferBar";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;
export default function AppLayout() {
  return (
    <StyledLayout>
      <OfferBar />
      <Outlet />
    </StyledLayout>
  );
}
