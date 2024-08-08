/* eslint-disable react/display-name */

import styled from "styled-components";
import Menu from "../../ui/Menu";
import { weedTypes } from "../../data/Static/StaticData";
import Card from "../../ui/Card";
import { Link } from "react-router-dom";
import { memo } from "react";
import screens from "../../utils/screens";

const StyledWeedTypesSection = styled.section`
  .card-items {
    row-gap: 24px;
    border-top: 1px solid var(--dark-300);
    padding-top: 64px;
    @media (min-width: ${screens.desktop.xm}) {
      column-gap: 64px;
    }
  }
  .card-container {
    height: auto;
    > p {
      text-align: left;
    }
    @media (min-width: ${screens.tablet.xxs}) {
      width: calc(100% / 2 - 12px);
    }
    @media (min-width: ${screens.tablet.xxxl}) {
      width: calc(100% / 3 - 16px);
    }
    @media (min-width: ${screens.desktop.xm}) {
      width: calc(100% / 3 - 43px);
    }
  }
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
  & img {
    aspect-ratio: 0.9/1;
    width: 47.37%;
    @media (min-width: ${screens.tablet.xxs}) {
      width: 32%;
    }

    @media (min-width: ${screens.tablet.s}) {
      width: 28%;
    }
  }
`;

const WeedTypesSection = memo(() => {
  return (
    <StyledWeedTypesSection>
      <Menu.ItemCards distribution="grid" className="card-items">
        {weedTypes.map((wt) => (
          <Menu.ReviewCardContainer
            distribution="flex"
            key={wt.id}
            width="379px"
            className="card-container"
          >
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
          </Menu.ReviewCardContainer>
        ))}
      </Menu.ItemCards>
    </StyledWeedTypesSection>
  );
});

export default WeedTypesSection;
