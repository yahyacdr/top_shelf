/* eslint-disable react/display-name */
import { hexToRgba } from "../../utils/helper";
import { memo } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTotalItems } from "../../features/cart/cartSlice";
import Btn from "../../ui/Btn";
import Heading from "../../ui/Heading";
import useWindowSize from "../../hooks/useWindowSize";

const StyledCartPanel = styled.section`
  background-color: ${hexToRgba("01100B", 0.4)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-color: var(--light-300);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 10;
  box-shadow: 0 6px 16px 0 #0000001f;
  > div {
    display: flex;
    > svg {
      width: 20px;
      height: 20px;
      fill: var(--dark-800);
      stroke: var(--dark-800);
    }
  }
`;

const EmptyCartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--light-400);
  svg {
    width: 56px;
    height: 56px;
  }
`;

const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: var(--light-300);
  height: 90%;
  max-width: 592px;
  width: 100%;
  padding: 32px 24px;
  /* width: 0px; */
`;

const EmptyCartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 64px;
  width: 100%;
  flex-grow: 1;
  > button {
    padding: 11px 24px;
    text-transform: capitalize;
    font-size: var(--font-size-small-50);
    font-weight: 400;
  }
`;

const ToggleBtn = styled.button`
  width: 40px;
  height: 4px;
  border-radius: 100px;
  background-color: var(--light-600);
  padding: 0;
  position: relative;
  top: -24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-600);
  padding-bottom: 16px;
  width: 100%;
  h3 {
    text-transform: capitalize;
    color: var(--dark-900);
    margin-bottom: 0;
  }
`;

const Total = styled.p`
  color: var(--light-900);
  font-size: var(--font-size-medium-50);
  font-weight: light;
  line-height: 150%;
  letter-spacing: 0;
`;

const CartPanel = memo(() => {
  const itemCount = useSelector(getTotalItems);
  const isTabletView = useWindowSize("968");
  return (
    <StyledCartPanel>
      {isTabletView && (
        <NavBtn>
          <div>
            <IoIosArrowForward />
          </div>
        </NavBtn>
      )}
      <CartBody>
        <ToggleBtn></ToggleBtn>

        <Container>
          <Heading as="h3">your cart</Heading>
          <Total>({itemCount})</Total>
        </Container>
        {!itemCount && (
          <EmptyCartBody>
            <EmptyCartIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 7.66952V6.69952C7.5 4.44952 9.31 2.23952 11.56 2.02952C14.24 1.76952 16.5 3.87952 16.5 6.50952V7.88952"
                  stroke="#05422C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
                  stroke="#05422C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.4955 12H15.5045"
                  stroke="#05422C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.49451 12H8.50349"
                  stroke="#05422C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </EmptyCartIcon>
            <Btn
              variation="primary"
              size="medium"
              shape="pill"
              color="--light-300"
            >
              show product
            </Btn>
          </EmptyCartBody>
        )}
      </CartBody>
    </StyledCartPanel>
  );
});

export default CartPanel;
