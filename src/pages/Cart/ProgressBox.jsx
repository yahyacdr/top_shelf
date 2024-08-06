/* eslint-disable react/display-name */
import Card from "../../ui/Card";
import { memo } from "react";
import styled from "styled-components";
import { useProgress } from "../../context/progressProvider";
import ProgressBar from "./ProgressBar";
import screens from "../../utils/screens";

const StyledProgressBox = styled.div`
  grid-area: progress-bar;
  background-color: var(--light-600);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: calc(100% + 48px);

  @media (min-width: ${screens.tablet.m}) {
    padding: 28px 0;
  }

  @media (min-width: ${screens.tablet.xxl}) {
    width: calc(100% + 24px);

    margin-left: -12px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4.5px;
  cursor: pointer;
  h4 {
    font-size: var(--font-size-small-100);
    line-height: 150%;
    letter-spacing: 0;
    display: none;
    @media (min-width: ${screens.tablet.xxs}) {
      display: block;
    }
  }
`;

const ImgContainer = styled.div`
  background-color: var(--light-300);
  width: 30px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background-color: var(--green-900);
  }
`;

const ProgressBox = memo(() => {
  const { currentPoint, setCurrentPoint, progress } = useProgress();

  return (
    <StyledProgressBox>
      <Box>
        <Point onClick={() => setCurrentPoint("cart")}>
          <ImgContainer className="active">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.375 4.47454V3.9087C4.375 2.5962 5.43083 1.30704 6.74333 1.18454C8.30667 1.03287 9.625 2.2637 9.625 3.79787V4.60287"
                stroke="white"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25014 12.8337H8.75014C11.0951 12.8337 11.5151 11.8945 11.6376 10.7512L12.0751 7.25116C12.2326 5.82783 11.8243 4.66699 9.33348 4.66699H4.66681C2.17598 4.66699 1.76764 5.82783 1.92514 7.25116L2.36264 10.7512C2.48514 11.8945 2.90514 12.8337 5.25014 12.8337Z"
                stroke="white"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.03944 6.99967H9.04468"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.95545 6.99967H4.96069"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ImgContainer>
          <Card.TitleItem
            case="capitalize"
            color="--dark-900"
            style={{
              color:
                currentPoint === "cart" ? "var(--dark-900)" : "var(--dark-300)",
              fontWeight: currentPoint === "cart" ? 500 : 400,
              display: currentPoint === "cart" && "block",
            }}
          >
            shopping cart
          </Card.TitleItem>
        </Point>

        <ProgressBar
          showInnerBar={currentPoint === "cart"}
          progress={progress}
          outerBarColor={"#c3d2cc"}
          innerBarColor={"var(--green-900)"}
        />

        <Point onClick={() => setCurrentPoint("checkout")}>
          <ImgContainer>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3337 6.99967V9.91634C13.3337 11.6663 12.167 12.833 10.417 12.833H4.58366C2.83366 12.833 1.66699 11.6663 1.66699 9.91634V6.99967C1.66699 5.41301 2.62366 4.30467 4.11116 4.11801C4.26283 4.09467 4.42033 4.08301 4.58366 4.08301H10.417C10.5687 4.08301 10.7145 4.08883 10.8545 4.11217C12.3595 4.28717 13.3337 5.40134 13.3337 6.99967Z"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8547 4.11282C10.7147 4.08949 10.5688 4.08367 10.4172 4.08367H4.58383C4.42049 4.08367 4.26299 4.09533 4.11133 4.11866C4.19299 3.95533 4.30966 3.80366 4.44966 3.66366L6.34549 1.76199C7.14466 0.968659 8.43966 0.968659 9.23883 1.76199L10.2597 2.7945C10.633 3.162 10.8313 3.62866 10.8547 4.11282Z"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3337 7.29199H11.5837C10.942 7.29199 10.417 7.81699 10.417 8.45866C10.417 9.10033 10.942 9.62533 11.5837 9.62533H13.3337"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ImgContainer>
          <Card.TitleItem
            case="capitalize"
            color="--dark-900"
            style={{
              color:
                currentPoint === "checkout"
                  ? "var(--dark-900)"
                  : "var(--dark-300)",
              fontWeight: currentPoint === "checkout" ? 500 : 400,
            }}
          >
            checkout
          </Card.TitleItem>
        </Point>

        <ProgressBar
          showInnerBar={currentPoint === "checkout"}
          progress={progress}
          outerBarColor={"#c3d2cc"}
          innerBarColor={"var(--green-900)"}
        />

        <Point onClick={() => setCurrentPoint("order")}>
          <ImgContainer>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0305 8.57104C11.0305 9.32354 11.6488 9.93604 12.4013 9.93604C12.4013 12.1235 11.853 12.6719 9.66551 12.6719H4.19384C2.00634 12.6719 1.45801 12.1235 1.45801 9.93604V9.66771C2.21051 9.66771 2.82884 9.04937 2.82884 8.29687C2.82884 7.54437 2.21051 6.92604 1.45801 6.92604V6.65771C1.46384 4.47021 2.00634 3.92188 4.19384 3.92188H9.65968C11.8472 3.92188 12.3955 4.47021 12.3955 6.65771V7.20604C11.643 7.20604 11.0305 7.81271 11.0305 8.57104Z"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.4568 3.92178H4.1543L5.86346 2.21262C7.25763 0.81845 7.95763 0.81845 9.3518 2.21262L9.7018 2.56262C9.3343 2.93012 9.2468 3.47262 9.4568 3.92178Z"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7627 3.92188L5.7627 12.6719"
                stroke="#05422C"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5 5"
              />
            </svg>
          </ImgContainer>
          <Card.TitleItem
            case="capitalize"
            color="--dark-900"
            style={{
              color:
                currentPoint === "order"
                  ? "var(--dark-900)"
                  : "var(--dark-300)",
              fontWeight: currentPoint === "order" ? 500 : 400,
            }}
          >
            order complete
          </Card.TitleItem>
        </Point>
      </Box>
    </StyledProgressBox>
  );
});

export default ProgressBox;
