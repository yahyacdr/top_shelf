import styled from "styled-components";
import { featureCards } from "../data/Static/StaticData.js";
import Card from "./Card";
import ItemsSection from "./ItemsSection";
import ReviewSection from "./ReviewSection";
import ItemsGridSection from "./ItemsGridSection.jsx";
import HowToSection from "./HowToSection.jsx";
import ServiceFeaturesSection from "./ServiceFeaturesSection.jsx";
import RecentlyAddedSection from "./RecentlyAddedSection.jsx";
import WeedTypesSection from "./WeedTypesSection.jsx";
import WeedEduSection from "./WeedEduSection.jsx";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > section {
    width: 100%;
    &:not(:first-child) {
      @media (max-width: 540px) {
        padding: 64px 24px 0 24px;
      }
      padding: 120px 60px 0 120px;
    }
  }
`;

const CardsContainer = styled.section`
  background-color: var(--light-400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  padding: 80px 64px;
  width: 100%;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 25% 75%;
  column-gap: 24px;
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100px;
  aspect-ratio: 1/1;
  background-color: var(--light-300);
  @media (max-width: 1366px) {
    width: 75px;
  }
`;

export default function Main() {
  return (
    <StyleMain>
      <CardsContainer>
        {featureCards.map((fc) => (
          <StyledCard key={fc.id}>
            <StyledImgContainer>
              <Card.Img img={fc.img} />
            </StyledImgContainer>
            <div>
              <Card.Title case="capitalize" color="--dark-900">
                {fc.title}
              </Card.Title>
              <Card.Desc color="--dark-300" maxwidth="300px">
                {fc.desc}
              </Card.Desc>
            </div>
          </StyledCard>
        ))}
      </CardsContainer>
      <ItemsSection />
      <ReviewSection />
      <ItemsGridSection />
      <HowToSection />
      <ServiceFeaturesSection />
      <RecentlyAddedSection />
      <WeedTypesSection />
      <WeedEduSection />
    </StyleMain>
  );
}
