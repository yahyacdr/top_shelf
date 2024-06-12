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
      <Carousel nextBtnClass="btn-next" refEl={carouselEl}>
        {buyCards.map((bc) => (
          <SwiperSlide key={bc.id} className="cards-container">
            <Menu.CardContainer width="">
              <PanelBuyCard bc={bc} />
            </Menu.CardContainer>
          </SwiperSlide>
        ))}
      </Carousel>
    </Menu.ItemCards>
  );
}
