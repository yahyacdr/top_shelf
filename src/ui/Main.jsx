import styled from "styled-components";
import { featureCards } from "../data/Static/StaticData.js";
import Card from "./Card";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
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
              <Card.Title>{fc.title}</Card.Title>
              <Card.Desc>{fc.desc}</Card.Desc>
            </div>
          </StyledCard>
        ))}
      </CardsContainer>
    </StyleMain>
  );
}
