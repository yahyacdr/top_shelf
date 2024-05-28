import styled from "styled-components";
import Logo from "../ui/Logo";
import Btn from "./Btn";
import SearchBar from "../ui/SearchBar";
import PagesNavBar from "./PagesNavBar";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledGlobalNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 3% 23px;
  border-bottom: 1px solid var(--light-600);
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
`;

const LogoContainer = styled.div`
  flex-grow: 0;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <GlobalNav />
      <PagesNavBar />
    </StyledNav>
  );
}

function GlobalNav() {
  return (
    <StyledGlobalNav>
      <LogoContainer>
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
