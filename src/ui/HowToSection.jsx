import styled, { css } from "styled-components";
import Heading from "./Heading";
import Menu from "./Menu";
import Card from "./Card";
import { howToCards } from "../data/Static/StaticData";
import Btn from "./Btn";

const StyledHowToSection = styled.section`
  background-color: var(--dark-900);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & h1 {
    text-align: center;
    max-width: 950px;
  }
  p {
    max-width: 800px;
    font-size: var(--font-size-medium-33);
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    text-align: center;
    color: var(--light-900);
  }
`;

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  ${(props) =>
    props.type === "item"
      ? css`
          width: 100%;
          background-color: var(--light-600);
          border-radius: inherit;
          align-items: center;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 50%;

          align-items: flex-end;
          & img {
            width: 74%;
          }
        `}
`;

export default function HowToSection() {
  return (
    <StyledHowToSection>
      <Heading as="h1">
        how to order weed online from top shelf bc - mail order marijuana
      </Heading>
      <p>
        Ordering weed online from Top Shelf BC is easy. We are proud to have
        made the process accessible across multiple platforms and simple to
        understand, meaning that more people can come to us to buy their
        cannabis products online.
      </p>
      <Menu.ItemCards distribution="grid">
        {howToCards.map((htc) => (
          <Menu.CardContainer distribution="flex" key={htc.id}>
            <ImgCardContainer>
              <Card.Tag shape="circle">1</Card.Tag>
              <Card.Img img={howToCards.img} />
            </ImgCardContainer>
            <Card.TitleItem case="uppercase" color="--light-300">
              {htc.name}
            </Card.TitleItem>
            <Card.Desc color="--light-600" opacity="1" maxwidth="600px">
              {htc.desc}
            </Card.Desc>
          </Menu.CardContainer>
        ))}
        <Btn variation="primary" size="medium" shape="pill" color="--light-300">
          Choose your Weed
        </Btn>
      </Menu.ItemCards>
    </StyledHowToSection>
  );
}
