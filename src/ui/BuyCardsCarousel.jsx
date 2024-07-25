import Menu from "./Menu";
import { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";
import BuyCard from "../features/BuyCard/BuyCard";
import PropTypes from "prop-types";
import { memo } from "react";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import CartProvider from "../features/cart/cartContext";
import { fetchFilteredProducts, useFilter } from "../context/filterContext";
import Heading from "./Heading";
import { containsArray } from "../utils/helper";

// eslint-disable-next-line react/display-name
const BuyCardsCarousel = memo(
  ({ children, bgRevert, slides_per_view, className = "" }) => {
    const carouselEl = useRef();
    const { items, isLoading, currentFilter, dispatch } = useFilter();
    useEffect(() => {
      dispatch({
        type: "SET_FILTER",
        payload: {
          name: "Best seller",
          filter: { column: "sales", value: 30, method: "order" },
        },
      });
    }, [dispatch]);

    useEffect(() => {
      async function fetchData() {
        dispatch({
          type: "SET_DATA",
          payload: await fetchFilteredProducts(currentFilter, dispatch),
        });
      }
      fetchData();
    }, [currentFilter, dispatch]);

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
            containsArray(items) ? (
              items.map((item) => {
                item.map((bc) => (
                  <SwiperSlide key={bc.id} className="cards-container">
                    <Menu.CardContainer width="" className={className}>
                      <CartProvider>
                        <BuyCard bc={bc} bgRevert={bgRevert} />
                      </CartProvider>
                    </Menu.CardContainer>
                  </SwiperSlide>
                ));
              })
            ) : (
              items.map((bc) => (
                <SwiperSlide key={bc.id} className="cards-container">
                  <Menu.CardContainer width="" className={className}>
                    <CartProvider>
                      <BuyCard bc={bc} bgRevert={bgRevert} />
                    </CartProvider>
                  </Menu.CardContainer>
                </SwiperSlide>
              ))
            )
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
  defaultFilter: PropTypes.object,
};

export default BuyCardsCarousel;
