import styled from "styled-components";
import Menu from "./Menu";
import { weedTypes } from "../data/Static/StaticData";
import Card from "./Card";
import { Link } from "react-router-dom";

const StyledWeedTypesSection = styled.section`
  margin-top: 120px;
  position: relative;
  padding-top: 64px !important;
  & > div {
    align-items: flex-start;
    column-gap: 32px;
    > div {
      padding: 32px;
      align-items: flex-start;
      border-radius: 8px;
      border: 1px solid var(--light-400);
    }
  }
  p {
    text-align: left;
    text-transform: none;
    font-size: var(--font-size-small-100);
  }
`;

const TopBar = styled.span`
  width: 100%;
  margin-inline: auto;
  height: 1px;
  background-color: var(--dark-300);
  position: absolute;
  top: 0;
`;

const ImgCardContainer = styled.div`
  border-radius: inherit;
  padding: 50px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--light-400);
  margin-bottom: 32px;
  & img {
    /* aspect-ratio: 3.61/4; */
    width: calc(361px / 4);
    height: calc(400px / 4);
  }
`;

Menu.CardContainer = styled(Menu.CardContainer)`
  margin-top: 64px;
`;

export default function WeedTypesSection() {
  return (
    <StyledWeedTypesSection>
      <Menu.ItemCards distribution="grid">
        <TopBar />
        {weedTypes.map((wt) => (
          <Menu.CardContainer distribution="flex" key={wt.id} width="379px">
            <ImgCardContainer>
              <Card.Img img={wt.img} />
            </ImgCardContainer>
            <Card.Title case="capitalize" color="--dark-900">
              {wt.title}
            </Card.Title>
            <Card.Desc color="--dark-300">{wt.desc}</Card.Desc>
            <Link to="/">
              Shop <span>{wt.title}</span>
            </Link>
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
    </StyledWeedTypesSection>
  );
}
