/* eslint-disable react/display-name */
import styled from "styled-components";
import { memo } from "react";
import ReviewsCard from "../../ui/ReviewsCard";
import ReferAFriend from "./ReferAFriend";
import AddReview from "./AddReview";
import { useFilter } from "../../context/filterContext";
import { Divider } from "@mui/material";
import Btn from "../../ui/Btn";
import { usePost } from "../../context/postContext";

const StyledFilterContent = styled.div`
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

const FilterContent = memo((item) => {
  const { currentFilter } = useFilter();
  const { reviewsNum, setReviewsNum } = usePost();
  return (
    <StyledFilterContent>
      {currentFilter === "Description" && <p>{item.description}</p>}
      {currentFilter === "Reviews (350)" && (
        <>
          <ReviewsCard reviewsNum={reviewsNum} />
          <Btn
            variation="secondary"
            shape="pill"
            size="medium"
            onClick={() => setReviewsNum(Infinity)}
          >
            show more
          </Btn>
          <Divider polarity="horizonal" color="var(--light-600)" width="100%" />
          <AddReview />
        </>
      )}
      {currentFilter === "Refer a Friend" && <ReferAFriend />}
    </StyledFilterContent>
  );
});

export default FilterContent;
