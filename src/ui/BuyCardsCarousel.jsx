import Menu from "./Menu";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";
import BuyCard from "../features/BuyCard/BuyCard";
import PropTypes from "prop-types";
import { memo } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import CartProvider from "../features/cart/cartContext";
import { useFilter } from "../context/filterContext";
import Heading from "./Heading";

// eslint-disable-next-line react/display-name
const BuyCardsCarousel = memo(
  ({ children, bgRevert, slides_per_view, className = "" }) => {
    const carouselEl = useRef();
    const { currentFilter } = useFilter();
    const { items, isLoading } = useFetchProducts(currentFilter.filter, true);

    if (isLoading) return <ContentLoadingAnimation />;

    return (
      <Menu.ItemCards width="100%" height="610" className="items-cards">
        {children}
        <Carousel
          nextBtnClass="btn-next"
          refEl={carouselEl}
          slides_per_view={slides_per_view}
        >
          {items.length ? (
            items.map((bc) => (
              <SwiperSlide key={bc.id} className="cards-container">
                <Menu.CardContainer width="" className={className}>
                  <CartProvider>
                    <BuyCard bc={bc} bgRevert={bgRevert} />
                  </CartProvider>
                </Menu.CardContainer>
              </SwiperSlide>
            ))
          ) : (
            <Heading
              as="h2"
              style={{ color: "var(--dark-900)", marginInline: "auto" }}
            >
              Unfortunately {currentFilter.name} are not available!
            </Heading>
          )}
        </Carousel>
      </Menu.ItemCards>
    );
  }
);

BuyCardsCarousel.propTypes = {
  children: PropTypes.element,
  bgRevert: PropTypes.bool,
  slides_per_view: PropTypes.object,
  className: PropTypes.string,
};

export default BuyCardsCarousel;
