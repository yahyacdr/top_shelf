/* eslint-disable react/display-name */

import styled from "styled-components";
import OfferBar from "./OfferBar";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { memo, useEffect } from "react";
import CartPanel from "../pages/Cart/CartPanel";
import { useSelector } from "react-redux";
import { getCartToggleState } from "../features/cart/cartSlice";
import ProgressProvider from "../context/progressProvider";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const AppLayout = memo(() => {
  const isCartOpen = useSelector(getCartToggleState);
  useEffect(() => {
    if (isCartOpen) document.querySelector("body").style.overflowY = "hidden";
    else document.querySelector("body").style.overflowY = "scroll";
  }, [isCartOpen]);

  return (
    <StyledLayout>
      <OfferBar />
      <MainHeader />
      {isCartOpen && (
        <ProgressProvider>
          <CartPanel />
        </ProgressProvider>
      )}
      <Outlet />
      <Footer />
    </StyledLayout>
  );
});

export default AppLayout;
