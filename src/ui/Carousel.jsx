/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

function Carousel({ children, nextBtnClass, prevBtnClass, refEl }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      navigation={{ nextEl: "." + nextBtnClass, prevEl: "." + prevBtnClass }}
      ref={refEl}
    >
      {children}
    </Swiper>
  );
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  nextBtnClass: PropTypes.string,
  prevBtnClass: PropTypes.string,
};

export function CarouselCard({ children }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

CarouselCard.propTypes = {
  children: PropTypes.element,
};

export function CarouselBtnNext({ children, clsName, carouselEl }) {
  console.log(carouselEl);
  return (
    <button
      className={clsName}
      onClick={() => carouselEl.current.swiper.slideNext()}
    >
      {children}
    </button>
  );
}

CarouselBtnNext.propTypes = {
  children: PropTypes.element,
  clsName: PropTypes.string,
};

export function CarouselBtnPrev({ children, clsName, carouselEl }) {
  return (
    <button
      className={clsName}
      onClick={() => carouselEl.current.swiper.slidePrev()}
    >
      {children}
    </button>
  );
}

CarouselBtnPrev.propTypes = {
  children: PropTypes.element,
  clsName: PropTypes.string,
};

export default Carousel;
