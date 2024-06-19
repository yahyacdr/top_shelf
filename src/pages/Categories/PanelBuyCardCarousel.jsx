import { SwiperSlide } from "swiper/react";
import { buyCards } from "../../data/Static/StaticData";
import Carousel from "../../ui/Carousel";
import Menu from "../../ui/Menu";
import { PanelBuyCard } from "../../features/BuyCard/BuyCard";
import { useRef } from "react";

export default function PanelBuyCardCarousel() {
  const carouselEl = useRef();

  return (
    <Menu.ItemCards width="100%" height="610" className="items-cards">
      <Carousel
        nextBtnClass="btn-next"
        refEl={carouselEl}
        slides_per_view={1}
        hasDots={true}
      >
        {buyCards.map((bc, i) => (
          <SwiperSlide key={bc.id} data-hash={`slide${i + 1}`}>
            <Menu.CardContainer width="100%" className="cards-container">
              <PanelBuyCard bc={bc} />
            </Menu.CardContainer>
          </SwiperSlide>
        ))}
      </Carousel>
    </Menu.ItemCards>
  );
}
