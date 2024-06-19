import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Heading from "../../ui/Heading";
import Filter from "../../ui/Filter";
import Card from "../../ui/Card";
import weedImg1 from "../../data/images/image_13_prev_ui_1.png";
import vector from "../../data/images/vector.png";
import Menu from "../../ui/Menu";
import BuyCardsCarousel from "../../ui/BuyCardsCarousel";

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 0 0 120px;
  width: 100%;
  overflow: hidden;
  .items-cards {
    height: 568px;
    @media (max-width: 920px) {
      height: calc((568px * 2) + 100px);
    }
    @media (max-width: 540px) {
      /* display: block; */
    }
  }
  .cover-card {
    height: 568px;
  }
  .swiper-slide {
    height: 568px;
  }
`;

const FilterSection = styled.div`
  padding: 30px 0 0;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;
`;

const StyledHeaderContainer = styled.div`
  text-align: center;
  margin-inline: auto;
  color: var(--dark-900);
  & > h1 {
    max-width: 900px;
  }
  @media (max-width: 1366px) {
    & > h1 {
      max-width: 600px;
    }
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
            @media (max-width: 540px) {
              width: 58%;
            }
          }
        `}
`;

export default function ItemsSection() {
  return (
    <StyledMenuSection>
      <StyledHeaderContainer>
        <Heading as="h1">best dispensary to buy weed online in canada</Heading>
      </StyledHeaderContainer>
      <FilterSection>
        <Filter>
          <Filter.Pill content="Best seller" active={true} />
          <Filter.Pill content="Bundles & Promotions" active={false} />
          <Filter.Pill content="On Sale" active={false} />
        </Filter>
      </FilterSection>
      <BuyCardsCarousel>
        <Menu.CoverCard side="center" className="cover-card">
          <img src={vector} alt="" />
          <ImgCardContainer type="cover">
            <Card.Img img={weedImg1} />
          </ImgCardContainer>
          <Card.Title color="--light-300">Shop our Best Sellers</Card.Title>
          <Card.Desc maxwidth="250px" color="--light-300" opacity="0.6">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.{" "}
          </Card.Desc>
          <Link to="/">View all</Link>
        </Menu.CoverCard>
      </BuyCardsCarousel>
    </StyledMenuSection>
  );
}
