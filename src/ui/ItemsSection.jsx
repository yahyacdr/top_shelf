import styled, { css } from "styled-components";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import Heading from "./Heading";
import { Filter } from "./Filter";
import Btn from "./Btn";
import Card from "./Card";
import weedImg1 from "../data/images/image_13_prev_ui_1.png";
import { buyCards } from "../data/Static/StaticData";
import vector from "../data/images/vector.png";
import Menu from "./Menu";
import Carousel from "./Carousel";
import BuyCard from "../features/BuyCard/BuyCard";

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 0 0 120px;
  width: 100%;
  overflow: hidden;
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
          }
        `}
`;

export default function ItemsSection() {
  const carouselEl = useRef();
  const [active, setActive] = useState(true);
  let a = 1;
  if (a === 0) setActive(true);

  return (
    <StyledMenuSection>
      <StyledHeaderContainer>
        <Heading as="h1">best dispensary to buy weed online in canada</Heading>
      </StyledHeaderContainer>
      <FilterSection>
        <Filter>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color={`${active ? "--green-900" : "--dark-300"}`}
            active={active}
            custom={{ "max-width": "280px" }}
          >
            Best seller
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            Bundles & Promotions
          </Btn>
          <Btn
            size="medium"
            variation="secondary"
            shape="pill"
            color="--dark-300"
            custom={{ "max-width": "280px" }}
          >
            On Sale
          </Btn>
        </Filter>
      </FilterSection>
      <Menu.ItemCards width="1348px" height="568px">
        <Menu.CoverCard side="center">
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
        <Carousel nextBtnClass="btn-next" refEl={carouselEl}>
          {buyCards.map((bc) => (
            <SwiperSlide key={bc.id}>
              <Menu.CardContainer>
                <BuyCard bc={bc} />
              </Menu.CardContainer>
            </SwiperSlide>
          ))}
          {/* <CarouselBtnNext clsName="btn-next" carouselEl={carouselEl}>
            <div>
              <IoIosArrowForward />
            </div>
          </CarouselBtnNext>
          <CarouselBtnPrev clsName="btn-prev" carouselEl={carouselEl}>
            <div>
              <IoIosArrowBack />
            </div>
          </CarouselBtnPrev> */}
        </Carousel>
      </Menu.ItemCards>
    </StyledMenuSection>
  );
}
