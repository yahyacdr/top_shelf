/* eslint-disable react/display-name */
import { memo, useEffect, useRef } from "react";
import Menu from "./Menu";
import Card from "./Card";
import Divider from "./Divider";
import styled from "styled-components";
import { formatDate } from "../utils/helper";
import useFetchReviews from "../hooks/useFetchReviews";
import ContentLoadingAnimation from "./ContentLoadingAnimation";

const StyledReviewsCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 20%;
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
  justify-content: space-between;
  align-items: flex-start;
  height: 58%;
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

const ReviewsCard = memo((currentCard) => {
  currentCard = currentCard.currentCard;
  const { reviews, isLoading: isLoadingReviews } = useFetchReviews();
  let currentReviews = useRef([]);

  useEffect(() => {
    currentReviews.current = reviews.filter(
      (review) => review.product === currentCard + 1
    );
  }, [reviews, currentCard, currentReviews]);

  if (isLoadingReviews) return <ContentLoadingAnimation />;

  return currentReviews.current.map((review) => (
    <Menu.CardContainer
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
        <Divider polarity="horizonal" color="var(--light-600)" width="100%" />
      </StyledReviewsCardHeader>
      <StyledDesc>
        <Card.RateStars numStars={review.rate} />
        <Card.Desc color="--dark-600">{review.review}</Card.Desc>
      </StyledDesc>
      <Card.Date>{formatDate(new Date(review.created_at))}</Card.Date>
    </Menu.CardContainer>
  ));
});

export default ReviewsCard;
