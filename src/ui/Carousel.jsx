/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
        left: 92%;
      }
      left: 95%;
    `};
  ${(props) =>
    props.className.includes("btn-prev") &&
    css`
      left: 1%;
    `};
`;

function Carousel({ children, nextBtnClass, prevBtnClass, refEl }) {
  return (
    <Swiper
      loop={true}
      navigation={{ nextEl: "." + nextBtnClass, prevEl: "." + prevBtnClass }}
      ref={refEl}
      breakpoints={{
        0: {
          spaceBetween: 24,
          slidesPerView: 1.4,
          centeredSlides: true,
          centerInsufficientSlides: true,
          centeredSlidesBounds: true,
        },
        640: {
          spaceBetween: 24,
          slidesPerView: 1.5,
        },
        720: {
          spaceBetween: 24,
          slidesPerView: 2,
        },
        920: {
          spaceBetween: 24,
          slidesPerView: 2.5,
        },
        1080: {
          spaceBetween: 32,
          slidesPerView: 1.8,
        },
        1200: {
          spaceBetween: 32,
          slidesPerView: 2,
        },
        1366: {
          spaceBetween: 32,
          slidesPerView: 2.5,
        },
        1440: {
          spaceBetween: 32,
          slidesPerView: 2.8,
        },
      }}
    >
      {children}
      <CarouselBtnNext carouselEl={refEl}>
        <div>
          <IoIosArrowForward />
        </div>
      </CarouselBtnNext>
      <CarouselBtnPrev carouselEl={refEl}>
        <div>
          <IoIosArrowBack />
        </div>
      </CarouselBtnPrev>
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

export function CarouselBtnNext({ children, carouselEl }) {
  return (
    <NavBtn
      className={`btn-next nav-btn`}
      onClick={() => carouselEl.current.swiper.slidePrev()}
    >
      {children}
    </NavBtn>
  );
}

CarouselBtnNext.propTypes = {
  children: PropTypes.element,
};

export function CarouselBtnPrev({ children, carouselEl }) {
  return (
    <NavBtn
      className={`btn-prev nav-btn`}
      onClick={() => carouselEl.current.swiper.slideNext()}
    >
      {children}
    </NavBtn>
  );
}

CarouselBtnPrev.propTypes = {
  children: PropTypes.element,
};

export default Carousel;
