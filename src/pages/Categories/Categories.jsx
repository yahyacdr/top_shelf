import styled from "styled-components";
import { featureCards } from "../../data/Static/StaticData";
import Card from "../../ui/Card";
import Main from "../../ui/Main";
import screens from "../../utils/screens";
import Divider from "../../ui/Divider";
import FilterSection from "./FilterSection";
import DescSection from "./DescSection";
import BuyCardsCarousel from "../../ui/BuyCardsCarousel";
import Heading from "../../ui/Heading";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import PanelBuyCardCarousel from "./PanelBuyCardCarousel";
import conicBg from "../../data/images/conic-bg.png";
import linearBg from "../../data/images/linear-bg-low-opacity.png";
import SideFilterSection from "./SideFilterSection";

const CardsContainer = styled.section`
  grid-area: section1;
  background-color: var(--light-400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  padding: 16px;
  width: 100vw;
  margin-left: -16px;
  @media (min-width: ${screens.mobile.xxs}) {
    h3 {
      font-size: var(--font-size-small-100);
      max-width: 80px;
      font-weight: 400;
    }
  }
  @media (min-width: ${screens.tablet.xxs}) {
    h3 {
      max-width: none;
      margin-bottom: 0;
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > span {
      margin-left: -28px;
    }
  }
  @media (min-width: ${screens.mobile.xxs}) {
    align-items: flex-start;
    flex-direction: column;
  }
  @media (min-width: ${screens.tablet.xxs}) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100px;
  aspect-ratio: 1/1;
  img {
    width: 60%;
  }
  background-color: var(--light-300);

  @media (min-width: ${screens.mobile.xxs}) {
    width: 32px;
    margin-bottom: 8px;
  }

  @media (min-width: ${screens.tablet.xxs}) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const TopSellingSection = styled.section`
  grid-area: section4;
  background-color: var(--light-400);
  padding-inline: 24px;
  border-radius: 16px;
  h3 {
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: var(--dark-900);
    margin: 24px 0;
  }

  .items-cards {
    margin-bottom: 24px;
    .swiper-slide {
      > div {
        height: 487px;
        @media (min-width: ${screens.tablet.xxs}) {
          height: 587px;
        }
      }
    }
    .cards-container {
      > div {
        > *:not(.img-container) {
          position: relative;
          z-index: 10;
        }
      }
    }
  }
  .label-container {
    & button {
      background-color: var(--light-300);
    }
  }
`;

const ItemsGridSection = styled.section`
  border-radius: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  &.grid-section1 {
    grid-area: section5;
  }
  &.grid-section2 {
    grid-area: section7;
  }
  .cards-container {
    gap: 24px;
    > div {
      width: 45%;
      height: 491px;
      @media (max-width: ${screens.mobile.m}) {
        width: 80%;
      }
      @media (min-width: ${screens.tablet.xxs}) {
        height: 591px;
      }
    }
    @media (min-width: ${screens.mobile.xm}) {
      justify-content: flex-start;
    }
  }
`;

const PanelCardSection = styled.section`
  grid-area: section6;
  border-radius: 16px;
  background-image: url(${conicBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 671px;
  padding: 24px;
  position: relative;
  .items-cards {
    height: 100%;

    position: relative;
    z-index: 10;
    .swiper {
      height: 100%;
      > button {
        top: 70%;
        @media (min-width: ${screens.tablet.xs}) {
          top: 50%;
        }
      }
      @media (min-width: ${screens.tablet.xs}) {
        button.btn-prev {
          left: 52%;
        }
      }
    }
  }
  .cards-container {
    height: 100%;
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 7% 11% 6% 7% 13% 56%;
    text-align: left;
    .card-item-type {
      letter-spacing: 2px;
    }
    h4 {
      @media (max-width: ${screens.mobile.s}) {
        font-size: var(--font-size-medium-100);
      }
      @media (min-width: ${screens.mobile.m}) {
        font-size: var(--font-size-large-33);
      }
    }
    .card-review {
      color: var(--light-300);
      justify-content: flex-start;
      span:last-child {
        color: rgba(255, 255, 255, 0.5);
      }
      @media (min-width: ${screens.mobile.m}) {
        font-size: var(--font-size-small-100);
      }
    }

    .card-weights {
      justify-content: flex-start;
    }

    @media (min-width: ${screens.tablet.xxs}) {
      .card-img-container {
        & img {
          width: 30%;
        }
      }
    }

    @media (min-width: ${screens.tablet.xs}) {
      grid-template-columns: 49% 49%;
      grid-template-rows: 10% 44% 12% 14% 20%;
      grid-template-areas: "itemType img" "title img" "reviews img" "weights img" "btn img";
      column-gap: 2%;
      .card-item-type {
        letter-spacing: 4px;
        grid-area: itemType;
        font-size: var(--font-size-small-100);
        margin-top: 0;
      }
      > h4 {
        grid-area: title;
        font-size: var(--font-size-large-66);
      }
      .card-review {
        grid-area: reviews;
        font-size: var(--font-size-small-100);
        margin-bottom: 0;
        > svg {
          width: 16px;
          height: 17.33px;
        }
      }
      .card-weights {
        grid-area: weights;
      }
      > div:nth-last-child(2) {
        grid-area: btn;
      }
      .card-img-container {
        grid-area: img;
        & img {
          width: 50%;
        }
      }
    }
  }

  .swiper-pagination {
    > span {
      background-color: rgba(255, 255, 255, 0.2);
    }
    > span.swiper-pagination-bullet-active {
      background-color: var(--light-300);
      outline: 3px solid rgba(255, 255, 255, 0.08);
    }
    @media (min-width: ${screens.tablet.xs}) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 90px;
    }
  }

  @media (min-width: ${screens.tablet.xs}) {
    padding: 56px 24px;
    height: 460px;
  }
`;

const LinearBg = styled.div`
  background-image: url(${linearBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export default function Categories() {
  return (
    <Main className="main-cat">
      <CardsContainer>
        {featureCards.map((fc, i) => (
          <>
            <StyledCard key={fc.id}>
              <div>
                {i > 0 && (
                  <Divider polarity="vertical" width="24px" color="#c3d2cc" />
                )}
                <StyledImgContainer>
                  <Card.Img img={fc.img} />
                </StyledImgContainer>
              </div>
              <div>
                <Card.Title case="capitalize" color="--dark-900">
                  {fc.title}
                </Card.Title>
              </div>
            </StyledCard>
          </>
        ))}
      </CardsContainer>
      <FilterSection />
      <DescSection />
      <TopSellingSection>
        <Heading as="h3">top selling</Heading>
        <BuyCardsCarousel bgRevert={true} slides_per_view={{ 920: 2 }} />
      </TopSellingSection>
      <ItemsGridSection className="grid-section1">
        <BuyCardsGrid />
      </ItemsGridSection>
      <PanelCardSection className="panel-section">
        <LinearBg></LinearBg>
        <PanelBuyCardCarousel />
      </PanelCardSection>
      <ItemsGridSection className="grid-section2">
        <BuyCardsGrid />
      </ItemsGridSection>
      <SideFilterSection />
    </Main>
  );
}
