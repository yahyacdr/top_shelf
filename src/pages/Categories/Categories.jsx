import styled from "styled-components";
import { featureCards } from "../../data/Static/StaticData";
import Card from "../../ui/Card";
import Main from "../../ui/Main";
import screens from "../../utils/screens";
import Divider from "../../ui/Divider";
import useWindowSize from "../../hooks/useWindowSize";
import FilterSection from "./FilterSection";
import DescSection from "./DescSection";
import BuyCardsCarousel from "../../ui/BuyCardsCarousel";
import Heading from "../../ui/Heading";
import BuyCardsGrid from "../../ui/BuyCardsGrid";
import PanelBuyCardCarousel from "./PanelBuyCardCarousel";
import conicBg from "../../data/images/conic-bg.png";
import linearBg from "../../data/images/linear-bg-low-opacity.png";

const CardsContainer = styled.section`
  background-color: var(--light-400);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  padding: 16px;
  width: 100%;
  @media (max-width: ${screens.xxxl}) {
    h3 {
      font-size: var(--font-size-small-100);
      max-width: 80px;
      font-weight: 400;
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${screens.xxxl}) {
    align-items: flex-start;
    flex-direction: column;
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
  @media (max-width: ${screens.xxxl}) {
    width: 32px;
    margin-bottom: 8px;
  }
`;

const TopSellingSection = styled.section`
  background-color: var(--light-400);
  padding-inline: 24px;
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
`;

const ItemsGridSection = styled.section`
  padding: 24px;
  .cards-container {
    gap: 24px;
    > div {
      width: 45%;
      height: 491px;
      @media (max-width: ${screens.m}) {
        width: 80%;
      }
    }
    @media (min-width: ${screens.xm}) {
      justify-content: flex-start;
    }
  }
`;

const PanelCardSection = styled.section`
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
      }
    }
  }
  .cards-container {
    > div {
      height: 100%;
      width: 100%;
      grid-template-columns: 100%;
      grid-template-rows: 7% 11% 6% 7% 13% 56%;
      text-align: left;
    }
    h4 {
      @media (max-width: ${screens.s}) {
        font-size: var(--font-size-medium-100);
      }
      @media (min-width: ${screens.m}) {
        font-size: var(--font-size-large-33);
      }
    }
    .card-review {
      color: var(--light-300);
      justify-content: flex-start;
      span:last-child {
        color: rgba(255, 255, 255, 0.5);
      }
      @media (min-width: ${screens.m}) {
        font-size: var(--font-size-small-100);
      }
    }

    .card-weights {
      justify-content: flex-start;
    }
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
`;

export default function Categories() {
  const isTabletView = useWindowSize(540);

  return (
    <Main className="main-cat">
      <CardsContainer>
        {featureCards.map((fc, i) => (
          <>
            <StyledCard key={fc.id}>
              <StyledImgContainer>
                <Card.Img img={fc.img} />
              </StyledImgContainer>
              <div>
                <Card.Title case="capitalize" color="--dark-900">
                  {fc.title}
                </Card.Title>
              </div>
            </StyledCard>
            {i < featureCards.length - 1 && (
              <Divider polarity="vertical" width="24px" color="#c3d2cc" />
            )}
          </>
        ))}
      </CardsContainer>
      <FilterSection isTabletView={isTabletView} />
      <DescSection />
      <TopSellingSection>
        <Heading as="h3">top selling</Heading>
        <BuyCardsCarousel bgRevert={true} />
      </TopSellingSection>
      <ItemsGridSection>
        <BuyCardsGrid />
      </ItemsGridSection>
      <PanelCardSection>
        <LinearBg></LinearBg>
        <PanelBuyCardCarousel />
      </PanelCardSection>
      <ItemsGridSection>
        <BuyCardsGrid />
      </ItemsGridSection>
    </Main>
  );
}
