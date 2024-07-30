/* eslint-disable react/display-name */
import { memo, useEffect, useRef } from "react";
import Menu from "./Menu";
import Card from "./Card";
import Divider from "./Divider";
import styled from "styled-components";
import { formatDate } from "../utils/helper";
import useFetchReviews from "../hooks/useFetchReviews";
import ContentLoadingAnimation from "./ContentLoadingAnimation";
import PropTypes from "prop-types";
import { SwiperSlide } from "swiper/react";

const StyledReviewsCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    margin-bottom: 15px;
    & h4 {
      margin-bottom: 0;
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
  & p {
    font-weight: 500;
    text-align: left;
    margin-bottom: 16px;
  }
  & > svg {
    @media (max-width: 480px) {
      /* margin-bottom: 10px; */
    }
  }
`;

const ReviewsCard = memo(
  ({ reviewsNum = 0, carousel = false, className = "" }) => {
    const { reviews, isLoading: isLoadingReviews } = useFetchReviews();
    let currentReviews = useRef([]);
    const currentCard =
      Number(location.hash[location.hash.length - 1]) - 1 || 0;

    useEffect(() => {
      currentReviews.current = reviews.filter(
        (review) => review.product === currentCard + 1
      );
    }, [reviews, currentCard, currentReviews]);

    if (isLoadingReviews) return <ContentLoadingAnimation />;

    if (carousel) return;
    <Menu.ItemCards distribution="grid" className="cards-container">
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <Menu.ReviewCardContainer
            distribution="flex"
            width="100%"
            className={className}
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
            <Card.Date>{formatDate(new Date(review.created_at))}</Card.Date>
          </Menu.ReviewCardContainer>
        </SwiperSlide>
      ))}
    </Menu.ItemCards>;

    return currentReviews.current
      .slice(0, reviewsNum || currentReviews.current.length - 1)
      .map((review) => (
        <Menu.ReviewCardContainer
          key={review.id}
          distribution="flex"
          width="100%"
          className="card-container"
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
          <Card.Date>{formatDate(new Date(review.created_at))}</Card.Date>
        </Menu.ReviewCardContainer>
      ));
  }
);

ReviewsCard.propTypes = {
  carousel: PropTypes.bool,
  reviewsNum: PropTypes.number,
  className: PropTypes.string,
};

export default ReviewsCard;
