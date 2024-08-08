/* eslint-disable react/display-name */

import styled from "styled-components";
import Logo from "../ui/Logo";
import Btn from "./Btn";
import SearchBar from "../ui/SearchBar";
import PagesNavBar from "./PagesNavBar";
import { memo, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import humbergerMenu from "../assets/humberger-menu-animation-1.json";
import CurtainPagesNavbar from "./CurtainPagesNavbar";
import useWindowSize from "../hooks/useWindowSize";
import screens from "../utils/screens";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotalItems, SET_CART_OPEN_STATE } from "../features/cart/cartSlice";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > div {
    width: 100%;
  }
  .search-bar-container {
    width: 100%;
    grid-area: search;
    justify-self: center;
  }
`;

const StyledGlobalNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 23px;
  border-bottom: 1px solid var(--light-600);
  position: relative;
  > div:not(:last-child) {
    position: relative;
    z-index: 1;
    background-color: var(--light-300);
  }
  @media (max-width: ${screens.tablet.xm}) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-template-areas: "logo accCart" "search search";
    row-gap: 16px;
  }
  @media (max-width: ${screens.mobile.m}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, calc(100% / 3));
    grid-template-areas: "logo logo" "accCart accCart" "search search";
    padding: 8px 16px;
    row-gap: 0px;
  }
`;

const DivideBar = styled.span`
  width: 12px;
  height: 1px;
  background-color: var(--light-600);
  transform: rotate(90deg);
`;

const bottom = 12;
const left = 85;

const ItemsCounter = styled.div`
  background-color: #eb2606;
  border-radius: 50%;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${bottom}%;
  left: ${left}%;
  transform: translate(${-1 * left}%, ${-1 * bottom}%);
  width: 16px;
  height: 16px;
`;

const StyledCartBtn = styled.div`
  position: relative;
  width: 37px;
`;

const StyleAccCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-grow: 0;
  grid-area: accCart;

  @media (max-width: ${screens.tablet.xm}) {
    justify-content: flex-start;
    justify-self: flex-end;
  }

  @media (max-width: ${screens.mobile.m}) {
    justify-self: center;
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 0;
  grid-area: logo;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;

  @media (max-width: 480px) {
    width: 160px;
  }

  @media (max-width: ${screens.mobile.m}) {
    width: 100%;
  }
`;

const StyledBurgerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .humberger-menu-player {
    width: 32px;
    aspect-ratio: 1;
    @media (max-width: 480px) {
      width: 24px;
    }
  }
`;

const Navbar = memo(() => {
  const isTabletView = useWindowSize(640);
  const [menuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <GlobalNav
          mobileSize={isTabletView}
          menuOpen={menuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {isTabletView && <PagesNavBar />}
      </StyledNav>
    </>
  );
});

const GlobalNav = memo(({ mobileSize, menuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate("");
  const totalItems = useSelector(getTotalItems);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledGlobalNav>
        <LogoContainer>
          {!mobileSize && (
            <BurgerIcon menuOpen={menuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
          <Logo type="regular" />
        </LogoContainer>
        <SearchBar />
        <StyleAccCart>
          <Btn size="small" color="--dark-600" variation="regular" shape="none">
            Your Account
          </Btn>

          <DivideBar />

          <StyledCartBtn>
            <Btn
              size="small"
              color="--nocolor"
              variation="regular"
              shape="none"
              onClick={() => dispatch(SET_CART_OPEN_STATE())}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 7.66952V6.69952C7.5 4.44952 9.31 2.23952 11.56 2.02952C14.24 1.76952 16.5 3.87952 16.5 6.50952V7.88952"
                  stroke="#46494F"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
                  stroke="#46494F"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.4955 12H15.5045"
                  stroke="#46494F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.49451 12H8.50349"
                  stroke="#46494F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Btn>
            <ItemsCounter>
              <p>{totalItems}</p>
            </ItemsCounter>
          </StyledCartBtn>
        </StyleAccCart>
      </StyledGlobalNav>
      {!mobileSize && menuOpen && <CurtainPagesNavbar open={menuOpen} />}
    </div>
  );
});

const BurgerIcon = memo(({ menuOpen, setIsMenuOpen }) => {
  const menuPlayer = useRef();

  function handleMenuAnimation() {
    if (!menuOpen) {
      menuPlayer.current.setPlayerDirection(1);
      menuPlayer.current.play();
      setTimeout(() => {
        menuPlayer.current.pause();
        menuPlayer.current.setSeeker("50%");
      }, 500);
      setIsMenuOpen(true);
    } else {
      menuPlayer.current.setPlayerDirection(-1);
      menuPlayer.current.play();
      setIsMenuOpen(false);
    }
  }

  return (
    <StyledBurgerIcon style={{ color: "#000" }} onClick={handleMenuAnimation}>
      <Player
        src={humbergerMenu}
        speed={2}
        className="humberger-menu-player"
        ref={menuPlayer}
      />
    </StyledBurgerIcon>
  );
});

export default Navbar;
