import styled from "styled-components";
import Logo from "../ui/Logo";
import Btn from "./Btn";
import SearchBar from "../ui/SearchBar";
import PagesNavBar from "./PagesNavBar";
import { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  padding: 18px 3% 23px;
  border-bottom: 1px solid var(--light-600);
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-template-areas: "logo accCart" "search search";
    row-gap: 16px;
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
  @media (max-width: 640px) {
    justify-content: flex-start;
    justify-self: flex-end;
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
`;

const StyledBurgerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Navbar() {
  const [mobileSize, setWindowWidth] = useState(window.innerWidth >= 540);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowWidth(window.innerWidth >= 540)
    );
  }, [mobileSize]);

  return (
    <StyledNav>
      <GlobalNav mobileSize={mobileSize} />
      {mobileSize && <PagesNavBar />}
      {/* {windowWidth < 540 && <PagesNavBar />} */}
    </StyledNav>
  );
}

function GlobalNav({ mobileSize }) {
  return (
    <StyledGlobalNav>
      <LogoContainer>
        {!mobileSize && <BurgerIcon />}
        <Logo type="regular" />
      </LogoContainer>
      <SearchBar />
      <StyleAccCart>
        <Btn size="small" color="--dark-600" variation="regular" shape="none">
          Your Account
        </Btn>

        <DivideBar />

        <StyledCartBtn>
          <Btn size="small" color="--nocolor" variation="regular" shape="none">
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
            <p>0</p>
          </ItemsCounter>
        </StyledCartBtn>
      </StyleAccCart>
    </StyledGlobalNav>
  );
}

function BurgerIcon() {
  return (
    <StyledBurgerIcon style={{ color: "#000" }}>Burger Icon</StyledBurgerIcon>
  );
}
