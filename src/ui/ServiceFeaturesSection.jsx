import styled from "styled-components";
import Heading from "./Heading";
import Menu from "./Menu";
import Card from "./Card";
import { featureCards2 } from "../data/Static/StaticData";

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
      img {
        margin-bottom: 32px;
      }
      p {
        text-transform: none;
        font-size: var(--font-size-small-100);
      }
    }
  }
`;

export default function ServiceFeaturesSection() {
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
          <Menu.CardContainer distribution="flex" key={fc2.id} width="379px">
            <Card.Img img={fc2.img} />
            <Card.Title case="capitalize" color="--dark-900">
              {fc2.title}
            </Card.Title>
            <Card.Desc color="--dark-300" opacity="1" maxwidth="300px">
              {fc2.desc}
            </Card.Desc>
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
    </StyledServiceFeaturesSection>
  );
}
