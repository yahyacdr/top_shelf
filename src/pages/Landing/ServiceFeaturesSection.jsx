/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Menu from "../../ui/Menu";
import Card from "../../ui/Card";
import { featureCards2 } from "../../data/Static/StaticData";
import { memo } from "react";

const StyledServiceFeaturesSection = styled.section`
  h1 {
    color: var(--dark-900);
    max-width: 900px;
    margin-bottom: 0;
    & span {
      color: var(--gold);
    }
  }
  > p {
    color: var(--dark-300);
    font-size: var(--font-size-medium-33);
    max-width: 800px;
    margin-bottom: 88px;
  }
  & > div {
    row-gap: 40px;
    & > div {
      text-align: left;
      align-items: flex-start;
      border: 1px solid rgba(206, 207, 213, 0.5);
      padding: 32px;
      p {
        text-transform: none;
        font-size: var(--font-size-small-100);
      }
    }
  }
  .card-container {
    @media (max-width: 920px) {
      width: 352px;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;

const ServiceFeaturesSection = memo(() => {
  return (
    <StyledServiceFeaturesSection>
      <Heading as="h1">
        what makes us the <span>#1</span> online marijuana dispensary in canada
      </Heading>
      <p>
        When it comes to what makes us the foremost online marijuana dispensary
        in Canada, we could wax lyrical about our positive qualities. Instead,
        to make this information clearer, we’ve highlighted the six prioritized
        features that we feel makes us a cut above the rest.
      </p>
      <Menu.ItemCards distribution="grid">
        {featureCards2.map((fc2) => (
          <Menu.ReviewCardContainer
            className="card-container"
            distribution="flex"
            key={fc2.id}
            width="379px"
          >
            <Card.Img img={fc2.img} />
            <Card.Title case="capitalize" color="--dark-900">
              {fc2.title}
            </Card.Title>
            <Card.Desc color="--dark-300" opacity="1" maxwidth="300px">
              {fc2.desc}
            </Card.Desc>
          </Menu.ReviewCardContainer>
        ))}
      </Menu.ItemCards>
    </StyledServiceFeaturesSection>
  );
});

export default ServiceFeaturesSection;
