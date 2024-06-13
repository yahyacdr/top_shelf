import styled from "styled-components";
import FloatingPanel from "./FloatingPanel";
import Heading from "./Heading";
import Divider from "./Divider";
import Btn from "./Btn";
import logo_revert from "../data/images/Logo_invert.png";
import mastercard from "../data/images/mastercard.svg";
import visa from "../data/images/visa.svg";
import bitcoin from "../data/images/bitcoin.svg";
import interac from "../data/images/interac.svg";
import screens from "../utils/screens";
import { useEffect, useState } from "react";

const StyledFooter = styled.footer`
  background: linear-gradient(0deg, var(--dark-900) 0%, #01100b 100%);
  position: relative;
  .offer-floating-panel {
    padding: 64px;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      row-gap: 32px;
      width: 100%;
      .head {
        max-width: 700px;
        color: var(--light-300);
        @media (max-width: ${screens.xs}) {
          font-size: var(--font-size-medium-66);
        }
      }
      p {
        color: #c3d2cc;
        font-size: var(--font-size-medium-100);
        @media (max-width: ${screens.xs}) {
          font-size: var(--font-size-small-50);
        }
      }
      > * {
        width: 100%;
      }
    }
    @media (max-width: 460px) {
      padding: 64px 32px;
    }
    @media (max-width: 390px) {
      padding: 24px;
    }
    @media (max-width: ${screens.xs}) {
      padding: 32px 16px;
    }
  }
`;

const Input = styled.input`
  border-radius: 50px;
  flex-grow: 1;
  border: 1px solid var(--green-700);
  background-color: transparent;
  color: var(--light-300);
  font-size: var(--font-size-medium-33);
  padding: 24px 44px;

  &::-webkit-input-placeholder {
    color: var(--green-400);
  }

  &::-ms-input-placeholder {
    color: var(--green-400);
  }

  &:-ms-input-placeholder {
    color: var(--green-400);
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: ${screens.xs}) {
    padding: 12px 22px;
    font-size: var(--font-size-small-50);
  }
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 32px;
  flex-wrap: wrap;
  row-gap: 32px;
  @media (max-width: 640px) {
    > button {
      width: 100%;
      flex-grow: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 380px 120px 64px;
  p {
    color: var(--light-900);
    font-size: var(--font-size-medium-33);
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
    margin-bottom: 16px;
  }
  @media (max-width: 640px) {
    padding: 380px 30px 64px 64px;
  }
`;

const Column = styled.div`
  flex-grow: 1;
  & > h4,
  & > img {
    margin-bottom: 24px;
  }
  & > h4 {
    text-transform: uppercase;
  }
  & > img {
    width: 173px;
  }
  & > p {
    max-width: 300px;
  }
  > div:not(:last-child) {
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  > .links {
    max-width: 680px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    > div {
      width: 46%;
    }
  }
  &.column-1 {
    margin-right: 132px;
    @media (max-width: ${screens.xm}) {
      margin-right: 0;
    }
  }
`;

const Imgs = styled.div`
  > img {
    margin-right: 16px;
  }
`;

const BottomLinks = styled.div`
  padding: 0 64px 64px;
  p {
    color: var(--light-900);
    font-size: var(--font-size-medium-33);
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 0;
    /* margin-top: 16px; */
  }
  display: grid;
  grid-template-columns: 35% 1fr 35%;
  grid-template-rows: 50% 50%;
  grid-template-areas: "br br br" "copyright . links";
  width: 100%;
  justify-content: space-between;
  > span {
    grid-area: br;
    margin-bottom: 40px;
  }
  > p {
    grid-area: copyright;
  }
  > div {
    grid-area: links;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 0px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <OfferFloatingPanel />
      <Container>
        <Column className="column-1">
          <img src={logo_revert} alt="" />
          <p>
            #1 Canadian top rated online dispensary that meets the customers
            needs in every single medical marijuana aspect. The team here at
            TopShelfBC is heavily involved in the Canadian cannabis industry for
            over 15 years. We strive to provide the top quality products,
            service and care at the lowest prices you’ll ever find.
          </p>
        </Column>
        <Column>
          <Heading as="h4">quick link</Heading>
          <div className="links">
            <div>
              <p>Track Your Order</p>
              <p>Shop All</p>
              <p>Flower</p>
              <p>Edibles</p>
              <p>Concentrates</p>
              <p>Refunds</p>
            </div>
            <div>
              <p>Mushrooms</p>
              <p>Promotions / Bundles</p>
              <p>Support</p>
              <p>Reward</p>
              <p>Blog</p>
              <p>Shipping Faq</p>
            </div>
          </div>
          <Heading as="h4">contact us</Heading>
          <div>
            <p>info@topshelfbc.cc</p>
          </div>
          <Heading as="h4">more</Heading>
          <div className="links">
            <div>
              <p>Buy weed online in Canada</p>
              <p>Buy weed on line in New Brunswick</p>
              <p>Buy weed on line in Prince Edward Island</p>
              <p>Buy weed on line in Northwest Territories</p>
              <p>Buy weed on line in Saskatchewan</p>
            </div>
            <div>
              <p>Buy weed online in Manitoba</p>
              <p>Buy weed on line in Quitebec</p>
              <p>Buy weed on line in British Columnbia</p>
              <p>Buy weed on line in Ontario</p>
              <p>Buy weed on line in Alberta</p>
            </div>
          </div>
          <Imgs>
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={bitcoin} alt="" />
            <img src={interac} alt="" />
          </Imgs>
        </Column>
      </Container>
      <BottomLinks>
        <Divider polarity="horizontal" color="#46494F" width="100%" />
        <p>© 2022 Top Shelf BC. All Rights Reserved.</p>
        <div>
          <p>Out Of Stock</p>
          <p>Privace Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </BottomLinks>
    </StyledFooter>
  );
}

function OfferFloatingPanel() {
  const [isSizeXS, setIsSizeXS] = useState(window.innerWidth <= 360);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsSizeXS(window.innerWidth <= 280)
    );
  }, [isSizeXS]);
  return (
    <FloatingPanel className="offer-floating-panel">
      <div>
        <div>
          <Heading as="h1" className="head">
            unlock 20% off your first order
          </Heading>
          <p>Reveal coupon code by entering your email</p>
        </div>
        <Divider width="100%" color="var(--green-700)" polarity="horizontal" />
        <EmailContainer>
          <Input type="email" placeholder="Email Address" />
          <Btn
            variation="primary"
            size={isSizeXS ? "medium" : "large"}
            shape="pill"
            color="--light-300"
          >
            Reveal coupoun
          </Btn>
        </EmailContainer>
      </div>
    </FloatingPanel>
  );
}
