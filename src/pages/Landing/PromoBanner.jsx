/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Btn from "../../ui/Btn";
import bgImgDesktop from "../../data/images/MainHeaderBackgroundDesktop.png";
import bgImgMobile from "../../data/images/MainHeaderBackgroundMobile.png";
import useWindowSize from "../../hooks/useWindowSize";
import { memo } from "react";
import screens from "../../utils/screens";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: black;
  width: 100%;
  aspect-ratio: 2/1;
  padding: 120px 64px;
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 540px) {
    aspect-ratio: 1.95/3.47;
    justify-content: flex-start;
    padding: 56px 24px;
  }

  @media (max-width: 480px) {
    button {
      font-size: var(--font-size-medium-33);
    }
  }
`;

const GoldenText = styled.p`
  font-size: var(--font-size-medium-33);
  line-height: 150%;
  letter-spacing: 4px;
  font-weight: 300;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const PromoBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 24px;
`;

const StyledPromoText = styled.p`
  display: flex;
  font-size: var(--font-size-medium-66);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: var(--light-400);
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  word-break: break-all;
  column-gap: 12px;

  @media (min-width: ${screens.mobile.xl}) {
    font-size: var(--font-size-medium-100);
  }

  @media (min-width: ${screens.tablet.xxm}) {
    font-size: var(--font-size-large-33);
  }
`;

const DivideBar = styled.span`
  width: 12px;
  height: 1px;
  background-color: var(--light-600);
  transform: rotate(90deg);
`;

const StyledLeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 760px;
  row-gap: 64px;
  max-width: 672px;

  @media (min-width: ${screens.tablet.xxs}) {
    h1 {
      font-size: 3.2em;
    }
  }

  @media (min-width: ${screens.tablet.xxm}) {
    row-gap: 102px;

    h1 {
      font-size: var(--font-size-large-100);
    }

    h1 + p {
      font-size: var(--font-size-large-33);
    }
  }
`;

const PromoBanner = memo(() => {
  const isTableView = useWindowSize(540);

  return (
    <StyledContainer bgImg={isTableView ? bgImgDesktop : bgImgMobile}>
      <StyledLeftSideContainer>
        <div>
          <GoldenText>best seller</GoldenText>
          <Heading as="h1">Best dispensary to buy weed online</Heading>
          <p>Vitamins & Supplements</p>
        </div>
        <PromoBtn>
          <StyledPromoText>
            Get 25% off <DivideBar /> Free Shipping
          </StyledPromoText>
          <Btn
            size={"large"}
            variation="primary"
            shape="pill"
            color="--light-400"
          >
            Shop All
          </Btn>
        </PromoBtn>
      </StyledLeftSideContainer>
    </StyledContainer>
  );
});

export default PromoBanner;
