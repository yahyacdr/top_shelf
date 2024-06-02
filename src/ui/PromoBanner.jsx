import styled from "styled-components";
import Heading from "./Heading";
import Btn from "./Btn";
import bgImg from "../data/images/MainHeaderBackgroundDesktop.png";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: black;
  width: 100%;
  aspect-ratio: 2/0.7;
  padding: 30px 60px 35px;
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

const StyledPromoText = styled.p`
  display: flex;
  font-size: var(--font-size-large-33);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: var(--light-400);
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin-bottom: 50px;

  @media (max-width: 1366px) {
    margin-bottom: 40px;
    margin-top: 20px;
    width: 300px;
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
  @media (max-width: 1366px) {
    max-width: 565px;
    padding: 37px 0 37px;
  }
`;

export default function PromoBanner() {
  return (
    <StyledContainer>
      <StyledLeftSideContainer>
        <div style={{ marginBottom: "10%" }}>
          <GoldenText>best seller</GoldenText>
          <Heading as="h1">Best dispensary to buy weed online</Heading>
          <p>Vitamins & Supplements</p>
        </div>
        <div>
          <StyledPromoText>
            Get 25% off <DivideBar /> Free Shipping
          </StyledPromoText>
          <Btn
            size="large"
            variation="primary"
            shape="pill"
            color="--light-400"
          >
            Shop All
          </Btn>
        </div>
      </StyledLeftSideContainer>
    </StyledContainer>
  );
}
