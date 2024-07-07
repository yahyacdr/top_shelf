import Menu from "./Menu";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";
import BuyCard from "../features/BuyCard/BuyCard";
import PropTypes from "prop-types";
import { memo } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ContentLoadingAnimation from "./ContentLoadingAnimation";

// eslint-disable-next-line react/display-name
const BuyCardsCarousel = memo(({ children, bgRevert, slides_per_view }) => {
  const carouselEl = useRef();
  const { items, isLoading } = useFetchProducts();

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <Menu.ItemCards width="100%" height="610" className="items-cards">
      {children}
      <Carousel
        nextBtnClass="btn-next"
        refEl={carouselEl}
        slides_per_view={slides_per_view}
      >
        {items.map((bc) => (
          <SwiperSlide key={bc.id} className="cards-container">
            <Menu.CardContainer width="">
              <BuyCard bc={bc} bgRevert={bgRevert} />
            </Menu.CardContainer>
          </SwiperSlide>
        ))}
      </Carousel>
    </Menu.ItemCards>
  );
});

BuyCardsCarousel.propTypes = {
  children: PropTypes.element,
  bgRevert: PropTypes.bool,
  slides_per_view: PropTypes.object,
};

export default BuyCardsCarousel;
