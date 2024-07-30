/* eslint-disable react/display-name */
import styled from "styled-components";
import { memo, useEffect, useState } from "react";
import ReviewsCard from "../../ui/ReviewsCard";
import ReferAFriend from "./ReferAFriend";
import AddReview from "./AddReview";
import Divider from "../../ui/Divider";
import Btn from "../../ui/Btn";
import { usePost } from "../../context/postContext";
import Filter from "../../ui/Filter";
import { useLocation } from "react-router-dom";
import { useCart } from "../cart/cartContext";
import screens from "../../utils/screens";

const StyledFilterContent = styled.div`
  grid-area: filter-section;
  margin-top: 8px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--light-600);
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  > p {
    font-size: var(--font-size-small-100);
    color: var(--dark-600);
    margin-bottom: 16px;
  }
  > div {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: auto;
    margin-bottom: 20px;
  }
  > .card-container {
    border: 1px solid var(--light-600);
    border-radius: 16px;
    padding: 20px;
    max-height: 350px;
    > div {
      align-items: flex-start;
    }
  }
  > button {
    font-size: var(--font-size-small-100);
    font-weight: 400;
    text-transform: capitalize;
    line-height: 150%;
    letter-spacing: 0;
    color: var(--green-200);
    margin-inline: auto;
  }
`;

const StyledReviewCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px 32px;
  @media (min-width: ${screens.tablet.s}) {
    flex-direction: row;
    flex-wrap: wrap;
    .card-container {
      width: calc(100% / 2 - 16px);
    }
  }
`;

const FilterContent = memo(() => {
  const [filter, setFilter] = useState("description");
  const { reviewsNum, setReviewsNum } = usePost();
  const { description } = useCart();
  const location = useLocation();
  const currentCard = Number(location.hash[location.hash.length - 1]) - 1 || 0;

  useEffect(() => {
    setReviewsNum(2);
  }, [currentCard, setReviewsNum]);

  return (
    <>
      <Filter className="pill-filter">
        <Filter.Pill
          content="Description"
          name="description"
          filterName={filter}
          handleClick={() => {
            setFilter("description");
            return true;
          }}
        />
        <Filter.Pill
          content="Reviews (350)"
          name="reviews"
          filterName={filter}
          handleClick={() => {
            setFilter("reviews");
            return true;
          }}
        />
        <Filter.Pill
          content="Refer a Friend"
          name="refer a friend"
          filterName={filter}
          handleClick={() => {
            setFilter("refer a friend");
            return true;
          }}
        />
      </Filter>
      <StyledFilterContent>
        {filter === "description" && <p>{description}</p>}
        {filter === "reviews" && (
          <div>
            <StyledReviewCards>
              <ReviewsCard reviewsNum={reviewsNum} />
            </StyledReviewCards>
            <Btn
              variation="secondary"
              shape="pill"
              size="medium"
              onClick={() => setReviewsNum(Infinity)}
            >
              show more
            </Btn>
            <Divider
              polarity="horizonal"
              color="var(--light-600)"
              width="100%"
            />
            <AddReview />
          </div>
        )}
        {filter === "refer a friend" && <ReferAFriend />}
      </StyledFilterContent>
    </>
  );
});

export default FilterContent;
