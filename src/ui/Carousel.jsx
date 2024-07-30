/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { memo } from "react";
import useWindowSize from "../hooks/useWindowSize";

const NavBtn = styled.button`
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-color: var(--light-300);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 10;
  box-shadow: 0 6px 16px 0 #0000001f;
  > div {
    display: flex;
    > svg {
      width: 20px;
      height: 20px;
      fill: var(--dark-800);
      stroke: var(--dark-800);
    }
  }
  ${(props) =>
    props.className.includes("btn-next") &&
    css`
      @media (max-width: 540px) {
        right: 1%;
      }
      right: 1%;
    `};
  ${(props) =>
    props.className.includes("btn-prev") &&
    css`
      left: 1%;
    `};
`;

const Carousel = memo(
  ({
    children,
    nextBtnClass,
    prevBtnClass,
    refEl,
    slides_per_view = false,
    hasDots = false,
    onSwipe,
  }) => {
    useWindowSize(0);
    return (
      <Swiper
        loop={true}
        navigation={{ nextEl: "." + nextBtnClass, prevEl: "." + prevBtnClass }}
        ref={refEl}
        breakpoints={{
          0: {
            spaceBetween: 24,
            slidesPerView: slides_per_view["0"] ? slides_per_view["0"] : 1,
            centeredSlides: true,
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
          },
          640: {
            spaceBetween: 24,
            slidesPerView: slides_per_view["640"] ? slides_per_view["640"] : 1,
          },
          920: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["920"] ? slides_per_view["920"] : 1,
          },
          1080: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1080"]
              ? slides_per_view["1080"]
              : 1,
          },
          1200: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1200"]
              ? slides_per_view["1200"]
              : 1,
          },
          1366: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1366"]
              ? slides_per_view["1366"]
              : 1,
          },
          1440: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1440"]
              ? slides_per_view["1440"]
              : 1,
          },
          1520: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1520"]
              ? slides_per_view["1520"]
              : 1,
          },
          1920: {
            spaceBetween: 32,
            slidesPerView: slides_per_view["1920"]
              ? slides_per_view["1920"]
              : 1,
          },
        }}
        pagination={{
          clickable: hasDots,
        }}
        hashNavigation={{
          watchState: hasDots,
        }}
        modules={hasDots && [Pagination, Navigation, HashNavigation]}
        onSlideChange={onSwipe}
      >
        {children}
        <CarouselBtnNext carouselEl={refEl}>
          <div>
            <IoIosArrowForward />
          </div>
        </CarouselBtnNext>
        <CarouselBtnPrev carouselEl={refEl} hasDots={hasDots}>
          <div>
            <IoIosArrowBack />
          </div>
        </CarouselBtnPrev>
      </Swiper>
    );
  }
);

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  nextBtnClass: PropTypes.string,
  prevBtnClass: PropTypes.string,
  onSwipe: PropTypes.func,
};

const CarouselCard = memo(({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
});

const CarouselBtnNext = memo(({ children, carouselEl }) => {
  return (
    <NavBtn
      className={`btn-next nav-btn`}
      onClick={() => carouselEl.current.swiper.slidePrev()}
    >
      {children}
    </NavBtn>
  );
});

CarouselBtnNext.propTypes = {
  children: PropTypes.element,
};

const CarouselBtnPrev = memo(({ children, carouselEl, hasDots }) => {
  return (
    <NavBtn
      className={`btn-prev nav-btn`}
      onClick={() => {
        hasDots
          ? carouselEl.current.swiper.slidePrev()
          : carouselEl.current.swiper.slideNext();
      }}
    >
      {children}
    </NavBtn>
  );
});

CarouselBtnPrev.propTypes = {
  children: PropTypes.element,
};

export { CarouselCard, CarouselBtnNext, CarouselBtnPrev };

export default Carousel;
