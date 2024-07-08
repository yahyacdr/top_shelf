/* eslint-disable react/display-name */

import Main from "../../ui/Main.jsx";
import styled from "styled-components";
import { featureCards } from "../../data/Static/StaticData.js";
import Card from "../../ui/Card.jsx";
import ItemsSection from "./ItemsSection.jsx";
import ReviewSection from "./ReviewSection.jsx";
import ItemsGridSection from "./ItemsGridSection.jsx";
import HowToSection from "./HowToSection.jsx";
import ServiceFeaturesSection from "./ServiceFeaturesSection.jsx";
import RecentlyAddedSection from "./RecentlyAddedSection.jsx";
import WeedTypesSection from "./WeedTypesSection.jsx";
import WeedEduSection from "./WeedEduSection.jsx";
import screens from "../../utils/screens.js";
import { memo } from "react";

const CardsContainer = styled.section`
  background-color: var(--light-400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  padding: 80px 64px;
  width: 100%;
  @media (max-width: ${screens.mobile.xm}) {
    padding: 60px 32px;
  }
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

const Landing = memo(() => {
  return (
    <>
      <Main className="main-landing">
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
      </Main>
    </>
  );
});

export default Landing;
