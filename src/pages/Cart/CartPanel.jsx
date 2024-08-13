/* eslint-disable react/display-name */
import { hexToRgba } from "../../utils/helper";
import { memo, useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getCartItems,
  getTotalItems,
  SET_CART_CHECKOUT_STATE,
  SET_CART_OPEN_STATE,
} from "../../features/cart/cartSlice";
import Btn from "../../ui/Btn";
import Heading from "../../ui/Heading";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import { useProgress } from "../../context/progressProvider";
import screens from "../../utils/screens";

const PANEL_HEIGHT = 87;

const StyledCartPanel = styled.section`
  background-color: ${hexToRgba("01100B", 0.4)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 0;
`;

const NavBtnContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  position: relative;
`;

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
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
  align-items: flex-start;
  align-self: flex-end;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: var(--light-300);
  height: ${PANEL_HEIGHT}%;
  max-width: 592px;
  width: 100%;
  padding: 32px 24px;
  row-gap: 20px;
  position: relative;
  overflow-y: auto;
  @media (min-width: ${screens.tablet.xxs}) {
    width: 60%;
    height: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &.show-panel {
    @media (max-width: ${screens.tablet.xxs}) {
      animation: ShowPanelAnimation 0.3s forwards;
    }

    @media (min-width: ${screens.tablet.xxs}) {
      animation: ShowPanelOnTabletViewAnimation 0.3s forwards;
    }
  }

  &.hide-panel {
    @media (max-width: ${screens.tablet.xxs}) {
      animation: HidePanelAnimation 0.3s forwards;
    }
    @media (min-width: ${screens.tablet.xxs}) {
      animation: HidePanelOnTabletViewAnimation 0.3s forwards;
    }
  }

  @keyframes HidePanelAnimation {
    0% {
      height: 40%;
    }
    100% {
      height: 0%;
    }
  }

  @keyframes HidePanelOnTabletViewAnimation {
    0% {
      width: 60%;
    }
    100% {
      width: 0%;
    }
  }

  @keyframes ShowPanelAnimation {
    0% {
      height: 0%;
    }
    100% {
      height: ${PANEL_HEIGHT}%;
    }
  }

  @keyframes ShowPanelOnTabletViewAnimation {
    0% {
      width: 0%;
    }
    100% {
      width: 60%;
    }
  }

  .item-title {
    max-width: 166px;
  }

  & h4 + div {
    span {
      align-self: center;
    }
  }

  .card-price {
    align-self: center;
    text-align: right;
  }

  > button.checkout-btn {
    padding: 10px 32px;
    text-transform: capitalize;
  }
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
  background-color: var(--light-700);
  padding: 0;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  cursor: ns-resize;
  @media (min-width: ${screens.tablet.xxs}) {
    display: none;
  }
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

const SecurePayments = styled.div`
  margin-bottom: 32px;
  p {
    font-size: var(--font-size-small-50);
    color: var(--dark-300);
    text-transform: uppercase;
    font-weight: 200;
    line-height: 150%;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  > svg:not(.gpay-icon) {
    width: 56px;
    height: 32px;
  }
  > svg.gpay-icon {
    width: 81.33px;
    height: 32px;
    padding: 6px 5px;
  }
  > svg {
    border: 1px solid var(--light-600);
    border-radius: 6px;
  }
`;

const CartPanel = memo(() => {
  const itemCount = useSelector(getTotalItems);
  const items = useSelector(getCartItems);
  const isTabletView = useWindowSize("640");
  const panelRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCurrentPoint } = useProgress();

  const [hidePanel, setHidePanel] = useState(false);

  useEffect(() => {
    if (hidePanel) {
      panelRef.current.classList.add("hide-panel");
    } else {
      panelRef.current.classList.remove("hide-panel");
    }
  }, [hidePanel]);

  function handleAnimationEnd(e) {
    const { animationName } = e;

    if (
      animationName === "HidePanelAnimation" ||
      animationName === "HidePanelOnTabletViewAnimation"
    ) {
      dispatch(SET_CART_OPEN_STATE());
    }

    if (
      animationName === "ShowPanelAnimation" ||
      animationName === "ShowPanelOnTabletViewAnimation"
    ) {
      panelRef.current.classList.remove("show-panel");
    }
  }

  return (
    <StyledCartPanel>
      {isTabletView && (
        <NavBtnContainer>
          <NavBtn onClick={() => setHidePanel(true)}>
            <div>
              <IoIosArrowForward />
            </div>
          </NavBtn>
        </NavBtnContainer>
      )}
      <CartBody
        ref={panelRef}
        className="show-panel"
        onAnimationEnd={handleAnimationEnd}
      >
        <ToggleBtn
          onTouchMove={(e) => moveElement(e, panelRef, setHidePanel, navigate)}
          onTouchEnd={() => resetElementPosition(panelRef)}
        ></ToggleBtn>

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
        {!!itemCount && items.map((item, i) => <Item key={i} item={item} />)}
        {!!itemCount && (
          <Btn
            variation="primary"
            shape="pill"
            size="medium"
            className="checkout-btn"
            onClick={() => {
              setCurrentPoint("checkout");
              setHidePanel(true);
              dispatch(SET_CART_CHECKOUT_STATE(true));
              setTimeout(() => navigate("/cart"), 100);
            }}
          >
            checkout
          </Btn>
        )}
        <SecurePayments>
          <p>secure payments provided by</p>
          <SvgContainer>
            <svg
              width="56"
              height="32"
              viewBox="0 0 56 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="32" rx="6" fill="white" />
              <circle cx="22" cy="16" r="9" fill="#E80B26" />
              <circle cx="34" cy="16" r="9" fill="#F59D31" />
              <path
                d="M28 22.7083C29.8413 21.0603 31 18.6655 31 16C31 13.3345 29.8413 10.9397 28 9.29175C26.1587 10.9397 25 13.3345 25 16C25 18.6655 26.1587 21.0603 28 22.7083Z"
                fill="#FC6020"
              />
            </svg>
            <svg
              width="56"
              height="32"
              viewBox="0 0 56 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="32" rx="6" fill="white" />
              <path
                d="M28.6035 14.064C28.5835 15.5597 30.0126 16.3944 31.0892 16.8906C32.1954 17.3998 32.5669 17.7263 32.5627 18.1816C32.5543 18.8785 31.6803 19.186 30.8623 19.198C29.4353 19.219 28.6057 18.8336 27.946 18.542L27.432 20.8175C28.0937 21.106 29.3192 21.3576 30.59 21.3686C33.5728 21.3686 35.5244 19.9758 35.535 17.8161C35.5466 15.0754 31.5273 14.9237 31.5547 13.6986C31.5642 13.3272 31.9389 12.9308 32.7601 12.8299C33.1664 12.779 34.2884 12.7401 35.5603 13.2942L36.0595 11.0927C35.3756 10.857 34.4964 10.6314 33.4018 10.6314C30.5942 10.6314 28.6194 12.0432 28.6035 14.064ZM40.8568 10.8211C40.3121 10.8211 39.853 11.1216 39.6482 11.5829L35.3872 21.2068H38.3679L38.9611 19.6563H42.6036L42.9477 21.2068H45.5748L43.2823 10.8211H40.8568ZM41.2737 13.6267L42.1339 17.5266H39.778L41.2737 13.6267ZM24.9895 10.8211L22.64 21.2068H25.4803L27.8288 10.8211H24.9895ZM20.7876 10.8211L17.8312 17.89L16.6353 11.8794C16.4949 11.2085 15.9408 10.8211 15.3255 10.8211H10.4924L10.4248 11.1226C11.417 11.3263 12.5442 11.6548 13.2271 12.0062C13.6451 12.2209 13.7644 12.4086 13.9016 12.9188L16.1667 21.2068H19.1685L23.7704 10.8211H20.7876Z"
                fill="url(#paint0_linear_118_3664)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_118_3664"
                  x1="26.5847"
                  y1="21.584"
                  x2="26.8787"
                  y2="10.5558"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#222357" />
                  <stop offset="1" stopColor="#254AA5" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="56"
              height="32"
              viewBox="0 0 56 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="32" rx="6" fill="white" />
              <path
                d="M37.7009 18.4183C36.3647 23.7783 30.9343 27.0365 25.5819 25.7004C20.2217 24.3643 16.9634 18.934 18.2996 13.5817C19.6357 8.22169 25.0584 4.96347 30.4186 6.29958C35.7709 7.62787 39.037 13.0582 37.7009 18.4183Z"
                fill="url(#paint0_linear_118_3666)"
              />
              <path
                d="M32.7612 14.754C32.9565 13.4259 31.9487 12.7072 30.5581 12.2306L31.0112 10.4259L29.9175 10.1525L29.48 11.9103C29.1909 11.84 28.894 11.7697 28.5972 11.7072L29.0347 9.94153L27.9409 9.66809L27.4956 11.465C27.2534 11.4103 27.019 11.3556 26.7925 11.3009V11.2931L25.2769 10.9181L24.9878 12.09C24.9878 12.09 25.8003 12.2775 25.7847 12.2853C26.23 12.3947 26.3081 12.6915 26.2925 12.9259L25.7769 14.9806C25.8081 14.9884 25.8472 14.9962 25.894 15.0197C25.855 15.0118 25.8159 15.004 25.7769 14.9884L25.0581 17.8634C25.0034 17.9962 24.8628 18.1993 24.5581 18.1212C24.5659 18.1368 23.7612 17.9259 23.7612 17.9259L23.2144 19.1837L24.644 19.5431C24.9097 19.6134 25.1675 19.6759 25.4253 19.7462L24.9722 21.5665L26.0659 21.84L26.519 20.0353C26.8159 20.1134 27.1128 20.1915 27.394 20.2618L26.9487 22.0587L28.0425 22.3322L28.4956 20.5118C30.3706 20.8634 31.7769 20.7228 32.3628 19.0275C32.8394 17.6681 32.3394 16.879 31.355 16.3634C32.0815 16.1993 32.6206 15.7228 32.7612 14.754ZM30.2534 18.2697C29.9175 19.629 27.6206 18.8947 26.8784 18.7072L27.48 16.2931C28.2222 16.4806 30.6128 16.8478 30.2534 18.2697ZM30.5972 14.7306C30.2847 15.9728 28.3784 15.34 27.7612 15.1837L28.3081 12.9962C28.9253 13.1525 30.9175 13.4415 30.5972 14.7306Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_118_3666"
                  x1="27.9947"
                  y1="5.99529"
                  x2="27.9947"
                  y2="25.998"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F9AA4B" />
                  <stop offset="1" stopColor="#F7931A" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="56"
              height="32"
              viewBox="0 0 56 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="32" rx="6" fill="white" />
              <mask
                id="mask0_118_3670"
                maskUnits="userSpaceOnUse"
                x="18"
                y="6"
                width="20"
                height="20"
              >
                <path d="M18 6H37.9997V26H18V6Z" fill="white" />
              </mask>
              <g mask="url(#mask0_118_3670)">
                <path
                  d="M19.9507 6.34085H36.0491C36.2606 6.34084 36.4699 6.38246 36.6653 6.46336C36.8606 6.54426 37.0381 6.66283 37.1876 6.81233C37.3371 6.96182 37.4557 7.13929 37.5367 7.33462C37.6176 7.52995 37.6592 7.7393 37.6592 7.95073V24.0495C37.6592 24.2609 37.6176 24.4703 37.5367 24.6656C37.4557 24.8609 37.3371 25.0384 37.1876 25.1878C37.0381 25.3373 36.8607 25.4559 36.6653 25.5368C36.47 25.6177 36.2607 25.6593 36.0493 25.6593H19.9505C19.5236 25.6593 19.1142 25.4897 18.8123 25.1879C18.5105 24.886 18.3409 24.4766 18.3408 24.0497V7.95061C18.3409 7.52367 18.5105 7.11422 18.8124 6.81233C19.1143 6.51045 19.5238 6.34085 19.9507 6.34085Z"
                  fill="#FDB913"
                />
                <path
                  d="M36.0493 6.34073C36.4762 6.34085 36.8856 6.51052 37.1875 6.81244C37.4893 7.11436 37.6589 7.52379 37.6589 7.95072V24.0494C37.6589 24.4763 37.4893 24.8857 37.1875 25.1876C36.8856 25.4895 36.4762 25.6592 36.0493 25.6593H19.9506C19.7392 25.6593 19.5298 25.6177 19.3345 25.5368C19.1391 25.4559 18.9616 25.3373 18.8121 25.1878C18.6626 25.0383 18.5441 24.8609 18.4632 24.6655C18.3823 24.4702 18.3407 24.2608 18.3407 24.0494V7.95072C18.3407 7.73929 18.3823 7.52992 18.4632 7.33458C18.5441 7.13923 18.6626 6.96173 18.8121 6.81222C18.9616 6.66271 19.1391 6.54412 19.3345 6.46322C19.5298 6.38232 19.7392 6.3407 19.9506 6.34073H36.0493ZM36.0493 6H19.9506C19.4334 6.00055 18.9376 6.20625 18.5719 6.57196C18.2062 6.93768 18.0005 7.43354 18 7.95072V24.0494C18.0006 24.5665 18.2063 25.0624 18.572 25.428C18.9376 25.7937 19.4335 25.9994 19.9506 26H36.0493C36.5664 25.9994 37.0622 25.7937 37.4278 25.428C37.7935 25.0623 37.9991 24.5665 37.9997 24.0494V7.95072C37.9992 7.43357 37.7935 6.93773 37.4279 6.57201C37.0622 6.2063 36.5664 6.00058 36.0493 6Z"
                  fill="white"
                />
                <path
                  d="M29.1271 16.2085L29.1255 12.7497L30.0283 12.5355V12.989C30.0283 12.989 30.2622 12.3927 30.8049 12.2543C30.886 12.2282 30.9722 12.2224 31.056 12.2374V13.12C30.8935 13.1221 30.7329 13.1555 30.583 13.2184C30.2494 13.3502 30.0815 13.6376 30.0815 14.0765L30.082 15.9864L29.1271 16.2085ZM24.3678 17.3333C24.3678 17.3333 24.2209 17.1132 24.2209 16.3349V14.6129L23.7565 14.7234V14.0138L24.2221 13.9039V13.1304L25.1821 12.9037V13.6771L25.8603 13.516V14.2247L25.1821 14.3857C25.1821 14.3857 25.1809 15.7967 25.1821 16.1392C25.1821 16.9367 25.3937 17.0898 25.3937 17.0898L24.3678 17.3333ZM25.9607 15.2756C25.9607 14.6607 26.0483 14.2121 26.2363 13.8679C26.46 13.4593 26.8267 13.1931 27.361 13.0714C28.4142 12.8319 28.7944 13.4553 28.7796 14.2912C28.774 14.5902 28.7754 14.7358 28.7754 14.7358L26.9199 15.1719V15.2017C26.9199 15.7859 27.0424 16.063 27.4125 15.9844C27.7322 15.917 27.8211 15.7168 27.8464 15.4691C27.8505 15.4292 27.8525 15.3276 27.8525 15.3276L28.7217 15.1193C28.7217 15.1193 28.7237 15.1905 28.7225 15.2704C28.7149 15.6023 28.6184 16.4256 27.4103 16.7112C26.2659 16.9828 25.9608 16.2839 25.9608 15.2755M27.3996 13.7157C27.0922 13.7855 26.9309 14.0871 26.9239 14.5867L27.8573 14.3644C27.8589 14.3418 27.8591 14.292 27.8589 14.214C27.8573 13.8368 27.7407 13.6376 27.3996 13.7157ZM34.3054 13.253C34.2694 12.1996 34.5426 11.3635 35.7179 11.0973C36.4669 10.9271 36.7514 11.122 36.8955 11.3103C37.034 11.49 37.0875 11.7324 37.0875 12.0718L37.0883 12.1342L36.1688 12.3527L36.1681 12.2247C36.1688 11.8221 36.0569 11.669 35.7645 11.7422C35.4167 11.8296 35.2763 12.1596 35.2763 12.8158C35.2763 13.0488 35.2774 13.0906 35.2774 13.122C35.2774 13.7889 35.3684 14.0942 35.7692 14.0103C36.1169 13.9384 36.1644 13.6332 36.17 13.3655C36.1707 13.3235 36.1725 13.189 36.1725 13.189L37.0906 12.9721C37.0906 12.9721 37.0915 13.04 37.0915 13.1154C37.0892 13.9899 36.6283 14.5409 35.7648 14.7419C34.5752 15.0208 34.3422 14.3333 34.3053 13.253M31.1268 14.7278C31.1268 13.9265 31.5962 13.6731 32.3027 13.3808C32.938 13.118 32.9518 12.9875 32.9544 12.7591C32.9579 12.5669 32.8688 12.4025 32.5525 12.4831C32.4471 12.5044 32.3519 12.5607 32.2824 12.6428C32.2129 12.7249 32.1732 12.8281 32.1697 12.9356C32.1645 12.9947 32.1625 13.0539 32.1637 13.1132L31.2729 13.3235C31.2669 13.146 31.2877 12.9686 31.3344 12.7972C31.4767 12.3181 31.8994 11.9957 32.6288 11.8269C33.5765 11.6085 33.8924 12.0244 33.8935 12.6714V14.2033C33.8935 14.9442 34.0311 15.0528 34.0311 15.0528L33.1566 15.2597C33.1084 15.1586 33.0692 15.0535 33.0395 14.9456C33.0395 14.9456 32.8478 15.428 32.1876 15.5832C31.4941 15.7467 31.1268 15.317 31.1268 14.7278ZM32.9483 13.6336C32.8009 13.737 32.6453 13.8281 32.4831 13.9061C32.1916 14.0485 32.0599 14.2242 32.0599 14.4948C32.0599 14.7291 32.205 14.883 32.4689 14.8179C32.7519 14.7465 32.9483 14.4824 32.9483 14.1155V13.6336ZM19.3484 19.7579C19.2486 19.7578 19.1506 19.7307 19.0649 19.6797C18.9792 19.6286 18.9088 19.5553 18.8612 19.4676C18.8136 19.3799 18.7905 19.2809 18.7944 19.1812C18.7983 19.0814 18.829 18.9846 18.8832 18.9009L18.8894 18.8928L18.8998 18.8901L20.2056 18.5818V19.5735L20.1853 19.5782C19.9448 19.6361 19.7037 19.6921 19.4622 19.7461C19.4248 19.754 19.3866 19.758 19.3484 19.7579ZM19.3484 21.0265C19.2014 21.0265 19.0605 20.9682 18.9566 20.8644C18.8526 20.7605 18.7941 20.6197 18.794 20.4727C18.7937 20.3657 18.8247 20.2609 18.8832 20.1713L18.8894 20.1621L18.8998 20.1593L20.2056 19.8512V20.8429L20.1853 20.8481C19.8891 20.9193 19.5351 21.0012 19.4622 21.0158C19.4247 21.0231 19.3866 21.0266 19.3484 21.0265ZM19.3484 22.2976C19.2014 22.2975 19.0604 22.2391 18.9565 22.1351C18.8525 22.0312 18.7941 21.8903 18.794 21.7433C18.7936 21.6362 18.8246 21.5315 18.8832 21.4419L18.8894 21.4319L20.2056 21.1217V22.1133L20.1853 22.1187C19.8725 22.1939 19.5251 22.2724 19.4622 22.2862C19.4247 22.2938 19.3866 22.2976 19.3484 22.2976ZM20.2055 12.7551V18.3036L19.1943 18.5428L19.1939 12.9942L20.2055 12.7551ZM21.714 18.0707C21.7151 17.988 21.6998 17.9059 21.6689 17.8292C21.638 17.7525 21.5922 17.6827 21.5342 17.6238C21.4761 17.565 21.4069 17.5182 21.3306 17.4863C21.2544 17.4544 21.1725 17.438 21.0898 17.438C21.0071 17.438 20.9253 17.4544 20.849 17.4863C20.7727 17.5182 20.7035 17.565 20.6455 17.6238C20.5874 17.6827 20.5416 17.7525 20.5108 17.8292C20.4799 17.9059 20.4646 17.988 20.4657 18.0707L20.4668 23.2568C20.4674 23.7046 20.6454 24.1339 20.962 24.4507C21.2785 24.7675 21.7077 24.9459 22.1556 24.9467C22.628 24.9467 23.9223 24.9444 23.9223 24.9444L23.9229 22.781L23.9235 20.3683C23.9236 20.2338 23.8906 20.1014 23.8272 19.9827C23.7639 19.8641 23.6723 19.7629 23.5605 19.6881L21.9859 18.6185L21.9855 21.0472C21.9855 21.0649 21.982 21.0823 21.9753 21.0986C21.9685 21.1149 21.9586 21.1297 21.9462 21.1422C21.9337 21.1547 21.9189 21.1645 21.9026 21.1713C21.8863 21.178 21.8688 21.1815 21.8512 21.1815C21.8336 21.1815 21.8161 21.178 21.7998 21.1713C21.7835 21.1645 21.7687 21.1547 21.7563 21.1422C21.7438 21.1297 21.7339 21.1149 21.7272 21.0986C21.7204 21.0823 21.7169 21.0649 21.7169 21.0472C21.7169 21.0212 21.714 18.3914 21.714 18.0707ZM22.5569 14.2015C22.3655 14.2459 22.186 14.3311 22.0306 14.4512C21.8752 14.5713 21.7476 14.7236 21.6565 14.8976V14.5077L20.7456 14.7232L20.7467 17.2135C20.9065 17.1503 21.0806 17.1326 21.2499 17.1622C21.4191 17.1918 21.5768 17.2676 21.7057 17.3812V15.7734C21.7057 15.3881 21.8973 15.0804 22.1712 15.0201C22.3772 14.9749 22.5492 15.0485 22.5492 15.4154L22.5499 17.7614L23.5093 17.5365V15.0547C23.5093 14.453 23.2776 14.0324 22.5569 14.2015ZM36.4965 10.6502C36.3792 10.6503 36.2645 10.6156 36.1668 10.5505C36.0692 10.4853 35.9931 10.3927 35.9481 10.2843C35.9032 10.1759 35.8914 10.0567 35.9142 9.94156C35.9371 9.82646 35.9936 9.72073 36.0766 9.63774C36.1595 9.55476 36.2652 9.49825 36.3803 9.47537C36.4954 9.45249 36.6147 9.46427 36.7231 9.50921C36.8315 9.55416 36.9241 9.63024 36.9893 9.72785C37.0544 9.82546 37.0891 9.94019 37.0891 10.0575C37.0889 10.2147 37.0264 10.3653 36.9154 10.4764C36.8043 10.5875 36.6537 10.65 36.4965 10.6502ZM36.4965 9.53881C36.394 9.53879 36.2937 9.56918 36.2084 9.62615C36.1231 9.68312 36.0566 9.7641 36.0173 9.85885C35.9781 9.95361 35.9678 10.0579 35.9878 10.1585C36.0078 10.2591 36.0571 10.3515 36.1296 10.4241C36.2021 10.4966 36.2945 10.546 36.3951 10.566C36.4957 10.5861 36.6 10.5758 36.6948 10.5366C36.7896 10.4974 36.8706 10.4309 36.9276 10.3456C36.9846 10.2604 37.015 10.1601 37.015 10.0575C37.0149 9.92004 36.9603 9.78821 36.8631 9.69096C36.7659 9.59371 36.634 9.539 36.4965 9.53881Z"
                  fill="#231F20"
                />
                <path
                  d="M36.2803 9.7042H36.5358C36.5608 9.70152 36.5861 9.70451 36.6097 9.71294C36.6334 9.72137 36.6549 9.73502 36.6725 9.75289C36.6902 9.77075 36.7036 9.79237 36.7117 9.81612C36.7199 9.83988 36.7226 9.86517 36.7196 9.89011C36.7196 9.9841 36.6779 10.0563 36.5991 10.0686V10.0699C36.6708 10.0773 36.7086 10.1169 36.7122 10.2187C36.7136 10.2646 36.7143 10.3215 36.7165 10.3658C36.7165 10.3783 36.7197 10.3905 36.7257 10.4015C36.7317 10.4124 36.7404 10.4216 36.7509 10.4283H36.6202C36.6077 10.4092 36.601 10.3869 36.6007 10.3641C36.5967 10.3208 36.5977 10.28 36.5958 10.2274C36.5938 10.1484 36.5696 10.1138 36.4903 10.1138H36.3957V10.4282H36.2803V9.7042ZM36.4882 10.0267C36.5039 10.0281 36.5197 10.026 36.5345 10.0206C36.5493 10.0152 36.5627 10.0066 36.5738 9.99533C36.5848 9.9841 36.5933 9.97056 36.5985 9.95568C36.6036 9.94079 36.6055 9.92495 36.6038 9.90928C36.6038 9.83204 36.5705 9.79142 36.4943 9.79142H36.3957V10.0267H36.4882Z"
                  fill="#231F20"
                />
              </g>
            </svg>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 2387.3 948"
              xmlSpace="preserve"
              className="gpay-icon"
            >
              <g>
                <path
                  d="M1129.1,463.2V741h-88.2V54.8h233.8c56.4-1.2,110.9,20.2,151.4,59.4c41,36.9,64.1,89.7,63.2,144.8
		c1.2,55.5-21.9,108.7-63.2,145.7c-40.9,39-91.4,58.5-151.4,58.4L1129.1,463.2L1129.1,463.2z M1129.1,139.3v239.6h147.8
		c32.8,1,64.4-11.9,87.2-35.5c46.3-45,47.4-119.1,2.3-165.4c-0.8-0.8-1.5-1.6-2.3-2.3c-22.5-24.1-54.3-37.3-87.2-36.4L1129.1,139.3
		L1129.1,139.3z M1692.5,256.2c65.2,0,116.6,17.4,154.3,52.2c37.7,34.8,56.5,82.6,56.5,143.2V741H1819v-65.2h-3.8
		c-36.5,53.7-85.1,80.5-145.7,80.5c-51.7,0-95-15.3-129.8-46c-33.8-28.5-53-70.7-52.2-115c0-48.6,18.4-87.2,55.1-115.9
		c36.7-28.7,85.7-43.1,147.1-43.1c52.3,0,95.5,9.6,129.3,28.7v-20.2c0.2-30.2-13.2-58.8-36.4-78c-23.3-21-53.7-32.5-85.1-32.1
		c-49.2,0-88.2,20.8-116.9,62.3l-77.6-48.9C1545.6,286.8,1608.8,256.2,1692.5,256.2L1692.5,256.2z M1578.4,597.3
		c-0.1,22.8,10.8,44.2,29.2,57.5c19.5,15.3,43.7,23.5,68.5,23c37.2-0.1,72.9-14.9,99.2-41.2c29.2-27.5,43.8-59.7,43.8-96.8
		c-27.5-21.9-65.8-32.9-115-32.9c-35.8,0-65.7,8.6-89.6,25.9C1590.4,550.4,1578.4,571.7,1578.4,597.3L1578.4,597.3z M2387.3,271.5
		L2093,948h-91l109.2-236.7l-193.6-439.8h95.8l139.9,337.3h1.9l136.1-337.3L2387.3,271.5z"
                  fill="#5F6368"
                />
              </g>
              <path
                d="M772.8,403.2c0-26.9-2.2-53.7-6.8-80.2H394.2v151.8h212.9c-8.8,49-37.2,92.3-78.7,119.8v98.6h127.1
	C729.9,624.7,772.8,523.2,772.8,403.2L772.8,403.2z"
                fill="#4285F4"
              />
              <path
                d="M394.2,788.5c106.4,0,196-34.9,261.3-95.2l-127.1-98.6c-35.4,24-80.9,37.7-134.2,37.7
	c-102.8,0-190.1-69.3-221.3-162.7H42v101.6C108.9,704.5,245.2,788.5,394.2,788.5z"
                fill="#34A853"
              />
              <path
                d="M172.9,469.7c-16.5-48.9-16.5-102,0-150.9V217.2H42c-56,111.4-56,242.7,0,354.1L172.9,469.7z"
                fill="#FBBC04"
              />
              <path
                d="M394.2,156.1c56.2-0.9,110.5,20.3,151.2,59.1L658,102.7C586.6,35.7,492.1-1.1,394.2,0
	C245.2,0,108.9,84.1,42,217.2l130.9,101.6C204.1,225.4,291.4,156.1,394.2,156.1z"
                fill="#EA4335"
              />
            </svg>
          </SvgContainer>
        </SecurePayments>
      </CartBody>
    </StyledCartPanel>
  );
});

function moveElement(e, element, setHideElement, navigate) {
  const panelPositionY = window.innerHeight - e.changedTouches[0].clientY;

  const minHeight = (window.innerHeight * 40) / 100;

  element.current.style.height = panelPositionY + "px";

  if (panelPositionY < minHeight) {
    setHideElement(true);
  } else {
    setHideElement(false);
  }

  if (panelPositionY >= window.innerHeight) {
    setHideElement(true);
    setTimeout(() => navigate("/cart"), 600);
  }
}

function resetElementPosition(element) {
  const minHeight = (window.innerHeight * 40) / 100;
  const ePosition = Number(element.current.style.height.slice(0, -2));

  if (ePosition > minHeight && ePosition < window.innerHeight) {
    element.current.style.transition = "height .3s";
    element.current.style.height = PANEL_HEIGHT + "%";
    setTimeout(() => {
      element.current.style.transition = "none";
    }, 400);
  }
}

export default CartPanel;
