import styled from "styled-components";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { eduCards } from "../data/Static/StaticData";
import Card from "./Card";

const StyledWeedEduSection = styled.section`
  background-color: var(--light-600);
  padding-bottom: 320px !important;

  .cards-container {
    justify-content: space-between;
  }
  .card-container {
    row-gap: 8px;
    align-items: flex-start;
    border-radius: 8px;
    & h3 {
      text-align: left;
    }
    & p {
      text-transform: none;
      text-align: left;
    }
    & a {
      font-size: var(--font-size-medium-33);
    }
    @media (max-width: 920px) {
      width: 352px;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--light-700);
  & h2 {
    color: var(--dark-900);
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;

const ImgCardContainer = styled.div`
  border-radius: inherit;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  & img {
    width: 100%;
    border-radius: inherit;
  }
`;
export default function WeedEduSection() {
  return (
    <StyledWeedEduSection>
      <Header>
        <Heading as="h2">weed education</Heading>
        <Link to="/">Show All</Link>
      </Header>
      <Menu.ItemCards distribution="grid" className="cards-container">
        {eduCards.map((ec) => (
          <Menu.CardContainer
            key={ec.id}
            distribution="flex"
            width="379px"
            className="card-container"
          >
            <ImgCardContainer>
              <Card.Img img={ec.img} />
            </ImgCardContainer>
            <Card.Date color="--dark-300">{ec.date}</Card.Date>
            <Card.Title color="--dark-900">{ec.title}</Card.Title>
            <Card.Desc color="--dark-900">{ec.desc}</Card.Desc>
            <Link to="/">Read More</Link>
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
    </StyledWeedEduSection>
  );
}
