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
    .btn-next {
      @media (max-width: ${screens.xxm}) {
        left: 87%;
      }

      @media (max-width: ${screens.xl}) {
        left: 87%;
      }
      /* left: 87%; */
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
    }
  }
`;

const PanelCardSection = styled.section`
  background-image: url(${conicBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 671px;
  .items-cards {
    height: 100%;

    position: relative;
    z-index: 10;
    .swiper {
      height: 100%;
    }
  }
  .cards-container {
    > div {
      height: 100%;
      grid-template-columns: 100%;
      grid-template-rows: 7% 14% 6% 7% 26% 40%;
      text-align: left;
    }
  }
`;

const LinearBg = styled.div`
  background: linear-gradient(to down, var(--green-900) 0%, #0da870 100%);

  /* opacity: 0.2; */
  height: 100%;
  /* background: conic-gradient(0deg, var(--green-900) 83%, #648a7c, 99%); */
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
        <LinearBg>
          <PanelBuyCardCarousel />
        </LinearBg>
      </PanelCardSection>
    </Main>
  );
}
