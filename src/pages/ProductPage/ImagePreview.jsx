/* eslint-disable react/display-name */
import { memo, useRef } from "react";
import styled, { css } from "styled-components";
import Carousel from "../../ui/Carousel";
import { SwiperSlide } from "swiper/react";
import { buyCards } from "../../data/Static/StaticData";
import useFetchProducts from "../../hooks/useFetchProducts";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";

const StyledImgPreview = styled.div`
  width: 100%;
  margin-top: 24px;
  height: 60%;

  .swiper {
    height: 100%;
    overflow: visible;
    .swiper-wrapper {
      .swiper-slide {
        height: auto;
        aspect-ratio: 1/1;
      }
    }
    .swiper-pagination {
      top: 110%;
      bottom: 0;
      span {
        width: 56px;
        height: unset;
        aspect-ratio: 1/1;
        border-radius: 8px;
        background-color: var(--light-600);
        background-position: center;
        background-size: 40px 40px;
        background-repeat: no-repeat;
        &.swiper-pagination-bullet-active {
          border: 1px solid var(--green-200);
        }
      }
      ${buyCards.map(
        (bc, i) => css`
          span:nth-child(${i + 1}) {
            background-image: url(${bc.img});
          }
        `
      )}
    }
  }
  button {
    display: none;
  }
`;

const ImgCard = styled.div`
  background-color: var(--light-400);
  border-radius: 24px;
  border: 1px solid var(--light-600);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > img {
    width: 70%;
  }
`;

const Indicator = styled.span`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    overflow: visible;
    path:not(:last-child) {
      transition: transform 0.3s ease-in-out;
    }
  }
  &.out:hover {
    path:not(:last-child) {
      transform: translate(3px, -3px);
    }
  }
  &.in:hover {
    path:not(:last-child) {
      transform: translate(-3px, 3px);
    }
  }
`;

const ImagePreview = memo(() => {
  const carouselEl = useRef();
  const { items, isLoading } = useFetchProducts();

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <StyledImgPreview>
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
        {items.map((product, i) => (
          <SwiperSlide key={product.id} data-hash={`slide${i + 1}`}>
            <ImgCard>
              <img src={product.imgUrl} alt="" />
              <Indicator>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8333 9.16634L17.6667 2.33301"
                    stroke="#05422C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3333 5.66699V1.66699H14.3333"
                    stroke="#05422C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16666 1.66699H7.49999C3.33332 1.66699 1.66666 3.33366 1.66666 7.50033V12.5003C1.66666 16.667 3.33332 18.3337 7.49999 18.3337H12.5C16.6667 18.3337 18.3333 16.667 18.3333 12.5003V10.8337"
                    stroke="#05422C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Indicator>
            </ImgCard>
          </SwiperSlide>
        ))}
      </Carousel>
    </StyledImgPreview>
  );
});

export default ImagePreview;
