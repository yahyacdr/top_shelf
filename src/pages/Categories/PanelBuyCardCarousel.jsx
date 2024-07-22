/* eslint-disable react/display-name */

import { SwiperSlide } from "swiper/react";
import Carousel from "../../ui/Carousel";
import Menu from "../../ui/Menu";
import { PanelBuyCard } from "../../features/BuyCard/BuyCard";
import { memo, useEffect, useRef } from "react";
import CartProvider from "../../features/cart/cartContext";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";
import { fetchFilteredProducts, useFilter } from "../../context/filterContext";

const PanelBuyCardCarousel = memo(() => {
  const carouselEl = useRef();
  const { items, isLoading, currentFilter, dispatch } = useFilter();
  useEffect(() => {
    dispatch({
      type: "SET_FILTER",
      payload: {
        name: "top 30",
        filter: { column: "sales", value: 30, method: "order" },
      },
    });
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      if (currentFilter)
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
          1520: 1,
          1920: 1,
        }}
      >
        {items.map((bc, i) => (
          <SwiperSlide key={bc.id} data-hash={`slide${i + 1}`}>
            <Menu.CardContainer width="100%" className="cards-container">
              <CartProvider>
                <PanelBuyCard bc={bc} />
              </CartProvider>
            </Menu.CardContainer>
          </SwiperSlide>
        ))}
      </Carousel>
    </Menu.ItemCards>
  );
});

export default PanelBuyCardCarousel;
