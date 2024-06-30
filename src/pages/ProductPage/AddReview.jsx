/* eslint-disable react/display-name */
import { memo, useState } from "react";
import Btn from "../../ui/Btn";
import { Form } from "react-router-dom";
import Heading from "../../ui/Heading";
import StarRating from "./starRating";
import styled from "styled-components";
import { StarReviewContext } from "../../utils/context";

const StyledAddReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h4 {
    color: var(--dark-900);
    text-transform: capitalize;
  }
  > form {
    > p {
      color: var(--dark-600);
      font-size: var(--font-size-small-100);
      line-height: 150%;
      letter-spacing: 0;
      font-weight: 400;
      span {
        color: var(--red-600);
      }
      margin-bottom: 8px;
    }
  }
`;
const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 16px;
  p,
  span {
    color: var(--dark-600);
    font-size: var(--font-size-small-100);
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 400;
  }
`;
const TextArea = styled.textarea`
  background-color: var(--light-300);
  border: 1px solid var(--light-600);
  border-radius: 8px;
  height: 93px;
  width: 100%;
  color: var(--dark-900);
  padding: 16px;
  margin-bottom: 16px;
  resize: none;
  &::-webkit-input-placeholder {
    color: var(--light-700);
  }

  &::-ms-input-placeholder {
    color: var(--light-700);
  }

  &:-ms-input-placeholder {
    color: var(--light-700);
  }
`;

const AddReview = memo(() => {
  const [rating, setRating] = useState(0);

  return (
    <StarReviewContext.Provider
      value={{
        rating,
        setRating,
      }}
    >
      <StyledAddReview>
        <Heading as="h4">add a review</Heading>
        <Form>
          <Rating>
            <p>Your rating</p>
            <span>:</span>
            <StarRating />
          </Rating>
          <p>
            Your Review <span>*</span>
          </p>
          <TextArea placeholder="Enter your review" />
          <Btn variation="primary" size="large" shape="pill" type="submit">
            Submit
          </Btn>
        </Form>
      </StyledAddReview>
    </StarReviewContext.Provider>
  );
});

export default AddReview;
