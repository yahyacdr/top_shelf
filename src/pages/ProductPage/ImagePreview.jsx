/* eslint-disable react/display-name */
import { memo, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Carousel from "../../ui/Carousel";
import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import screens from "../../utils/screens";
import { fetchFilteredProducts, useFilter } from "../../context/filterContext";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";
import Image from "./Image";
import { getRandomNumberBased } from "../../utils/helper";
import { EXECLUDE_IMG } from "../../consts";

const StyledImgPreview = styled.div`
  grid-area: image;
  width: 100%;
  margin-top: 24px;
  height: 60%;
  transition: 0.3s ease-in-out;

  .swiper {
    overflow: visible;
    transition: 0.3s ease-in-out;
    .swiper-wrapper {
      margin-bottom: 32px;
      .swiper-slide {
        transition: 0.3s ease-in-out;
        height: fit-content;
        > div {
          transition: 0.3s;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          @media (min-width: ${screens.tablet.xxs}) {
            align-items: flex-start;
          }
        }
      }
    }
    .swiper-pagination {
      position: static;
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
      ${(props) =>
        Array.from(
          { length: props.length },
          (_, i) =>
            `https://pngimg.com/uploads/cannabis/small/cannabis_PNG${getRandomNumberBased(
              3,
              75,
              EXECLUDE_IMG,
              i
            )}.png`
        ).map(
          (img, i) => css`
            span:nth-child(${i + 1}) {
              background-image: url(${img});
            }
          `
        )}
    }
  }

  button {
    display: none;
  }

  &.open {
    height: 100dvh;
    z-index: 9999;
    position: absolute;
    top: 0;
    background-color: rgba(1, 16, 11, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-inline: 24px;
    overflow: hidden;
    margin-top: 0;
    left: 0;
    .swiper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .swiper-wrapper {
        margin-bottom: 0;
        height: fit-content;

        @media (min-width: ${screens.mobile.xl}) {
          margin-bottom: 48px;
        }
        @media (min-width: ${screens.mobile.xxl}) {
          margin-bottom: 0;
          .swiper-slide {
            padding: 64px;
          }
          .indicator {
            right: 82px;
            bottom: 82px;
          }
        }
        @media (min-width: 560px) {
          margin-bottom: 24px;
        }
        @media (min-width: ${screens.tablet.s}) {
          .swiper-slide {
            padding: 96px;
          }
          .indicator {
            right: 112px;
            bottom: 112px;
          }
        }
        @media (min-width: ${screens.tablet.xxm}) {
          .swiper-slide {
            padding: 32px;
          }
          .indicator {
            right: 48px;
            bottom: 48px;
          }
        }
      }
      .swiper-pagination {
        position: static;
        display: none;
      }
    }

    @media (min-width: ${screens.tablet.xxm}) {
      padding: 46px 220px;
    }

    @media (min-width: ${screens.tablet.xxxl}) {
      padding: 46px 300px;
    }
  }

  @media (max-width: ${screens.mobile.m}) {
    margin-bottom: 50px;
  }
  @media (min-width: ${screens.tablet.xxm}) {
    padding: 0 64px 0 40px;
    margin-top: 0;
    height: 100%;

    .swiper {
      overflow-x: hidden;
      .swiper-wrapper {
        height: 55%;
      }
      .swiper-pagination {
        top: auto;
        height: 40%;
      }
    }
  }
  @media (min-width: ${screens.tablet.xl}) {
  }
  @media (min-width: ${screens.desktop.xxs}) {
    .swiper {
      .swiper-wrapper {
        margin-bottom: 64px;
      }
    }
  }
`;

const ImagePreview = memo(({ handleContentLoaded }) => {
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const carouselEl = useRef();
  const { items, currentFilter, isLoading, dispatch } = useFilter();

  useEffect(() => {
    dispatch({
      type: "SET_FILTER",
      payload: {
        name: "Best seller",
        filter: { column: "sales", value: 15, method: "order" },
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

  function handleSlideChange() {
    console.log("slide changed");
  }

  if (!isLoading) handleContentLoaded(true);

  if (isLoading) return <ContentLoadingAnimation />;

  return (
    <StyledImgPreview
      length={items.length}
      className={`${isImagePreviewOpen ? "open" : ""}`}
    >
      <Carousel
        nextBtnClass="btn-next"
        refEl={carouselEl}
        hasDots={true}
        onSwipe={handleSlideChange}
      >
        {items.map((product, i) => (
          <SwiperSlide key={product.id} data-hash={`slide${i + 1}`}>
            <Image
              isImgPrvwOpen={isImagePreviewOpen}
              setIsImgPrvwOpen={setIsImagePreviewOpen}
              index={i}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </StyledImgPreview>
  );
});

ImagePreview.propTypes = {
  handleContentLoaded: PropTypes.func,
};

export default ImagePreview;
