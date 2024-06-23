/* eslint-disable react/display-name */

import { SwiperSlide } from "swiper/react";
import { buyCards } from "../../data/Static/StaticData";
import Carousel from "../../ui/Carousel";
import Menu from "../../ui/Menu";
import { PanelBuyCard } from "../../features/BuyCard/BuyCard";
import { memo, useRef } from "react";

const PanelBuyCardCarousel = memo(() => {
  const carouselEl = useRef();

  return (
    <Menu.ItemCards width="100%" height="610" className="items-cards">
      <Carousel
        nextBtnClass="btn-next"
        refEl={carouselEl}
        hasDots={true}
        slides_per_view={{
          0: 1,
          640: 1,
          920: 1,
          1080: 1,
          1200: 1,
          1366: 1,
          1440: 1,
        }}
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
});

export default PanelBuyCardCarousel;
