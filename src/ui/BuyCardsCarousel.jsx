import Menu from "./Menu";
import { useRef } from "react";
import { buyCards } from "../data/Static/StaticData";
import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";
import BuyCard from "../features/BuyCard/BuyCard";
import PropTypes from "prop-types";

export default function BuyCardsCarousel({ children, bgRevert }) {
  const carouselEl = useRef();

  return (
    <Menu.ItemCards width="100%" height="610" className="items-cards">
      {children}
      <Carousel nextBtnClass="btn-next" refEl={carouselEl}>
        {buyCards.map((bc) => (
          <SwiperSlide key={bc.id} className="cards-container">
            <Menu.CardContainer width="">
              <BuyCard bc={bc} bgRevert={bgRevert} />
            </Menu.CardContainer>
          </SwiperSlide>
        ))}
      </Carousel>
    </Menu.ItemCards>
  );
}

BuyCardsCarousel.propTypes = {
  children: PropTypes.element,
  bgRevert: PropTypes.bool,
};
