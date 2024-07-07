/* eslint-disable react/display-name */
import { memo, useRef } from "react";
import useFetchReviews from "../../hooks/useFetchReviews";
import ContentLoadingAnimation from "../../ui/ContentLoadingAnimation";
import { SwiperSlide } from "swiper/react";
import Menu from "../../ui/Menu";
import styled from "styled-components";
import Card from "../../ui/Card";
import Divider from "../../ui/Divider";
import { formatDate } from "../../utils/helper";
import Carousel from "../../ui/Carousel";
import { createPortal } from "react-dom";

const StyledReviewsCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 20%;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    & h4 {
      margin-bottom: 0;
      text-align: left;
      font-size: var(--font-size-medium-33);
      height: fit-content;
      align-self: center;
    }
  }
`;

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--green-300);
  margin-right: 16px;
  & img {
    aspect-ratio: 1.31/1.4;
    border-radius: inherit;
  }
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 10px;
  height: 70%;
  & p {
    font-weight: 500;
    text-align: left;
    text-overflow: ellipsis;
    /* white-space: wrap; */
    overflow: hidden;
    height: 100%;
  }
`;

const ToolTip = styled.p`
  position: sticky;
  bottom: 5%;
  left: 95%;
  transform: translate(-5%, -5%);
  padding: 12px 16px;
  border: 1px solid var(--light-600);
  border-radius: 8px;
  color: var(--dark-900);
  z-index: 999;
  font-size: var(--font-size-small-50);
  background-color: var(--light-300);
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 222px;
  text-align: center;
`;

const ReviewCardsCarousel = memo(() => {
  const { reviews, isLoading: isLoadingReviews } = useFetchReviews();
  const carouselEl = useRef();
  const toolTip = useRef();

  if (isLoadingReviews) return <ContentLoadingAnimation />;

  return (
    <Carousel refEl={carouselEl}>
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <Menu.ReviewCardContainer
            distribution="flex"
            width="100%"
            className="card-container"
            onMouseEnter={() => {
              toolTip.current.style.opacity = 1;
            }}
            onMouseLeave={() => {
              toolTip.current.style.opacity = 0;
            }}
          >
            <StyledReviewsCardHeader>
              <div>
                <ImgCardContainer>
                  <Card.Img img={`https://robohash.org/${review.id}`} />
                </ImgCardContainer>
                <Card.Name color="--dark-900">{review.name}</Card.Name>
              </div>
              <Divider
                polarity="horizonal"
                color="var(--light-600)"
                width="100%"
              />
            </StyledReviewsCardHeader>
            <StyledDesc>
              <Card.RateStars numStars={review.rate} />
              <Card.Desc color="--dark-600">{review.review}</Card.Desc>
            </StyledDesc>
            <Card.Date className="date">
              {formatDate(new Date(review.created_at))}
            </Card.Date>
          </Menu.ReviewCardContainer>
        </SwiperSlide>
      ))}
      {createPortal(
        <ToolTip className="tooltip" ref={toolTip}>
          These facts are wrong, the real effects of cannabis are the opposite
          as per medical reports.
        </ToolTip>,
        document.getElementById("root")
      )}
    </Carousel>
  );
});

export default ReviewCardsCarousel;
