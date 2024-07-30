/* eslint-disable react/display-name */
import { memo } from "react";
import Btn from "../../ui/Btn";
import { Form, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import StarRating from "./starRating";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uploadReviews } from "../../features/Reviews/reviewsSlice";
import { usePost } from "../../context/postContext";

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
    width: 100%;
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

const Label = styled.label`
  display: block;
  color: var(--dark-600);
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid var(--light-600);
  border-radius: 8px;
  padding: 13.5px 16px;
  width: 100%;
  background-color: var(--light-300);
  margin-bottom: 8px;
  color: var(--dark-900);
  &::-webkit-input-placeholder {
    color: var(--light-600);
  }

  &::-ms-input-placeholder {
    color: var(--light-600);
  }

  &:-ms-input-placeholder {
    color: var(--light-600);
  }
`;

const AddReview = memo(() => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { rating } = usePost();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = Number(location.hash[location.hash.length - 1]) - 1 || 0;

  const state = useSelector((state) => state.reviews);

  function onSubmit(data) {
    dispatch(
      uploadReviews({
        name: data.name,
        review: data.review,
        rating,
        productId: productId + 1,
      })
    );
    if (!state.isLoading && !state.err) reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledAddReview>
      <Heading as="h4">add a review</Heading>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Rating>
          <p>Your rating</p>
          <span>:</span>
          <StarRating />
        </Rating>
        <Label htmlFor="name-input">Name</Label>
        <Input
          type="text"
          placeholder="Enter your name"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.review?.message && (
          <p style={{ color: "var(--red-600)" }}>{errors.name.message}</p>
        )}
        <p>
          Your Review <span>*</span>
        </p>
        <TextArea
          placeholder="Enter your review"
          id="review"
          {...register("review", {
            required: "Review is required",
          })}
        />
        {errors?.review?.message && (
          <p style={{ color: "var(--red-600)" }}>{errors.review.message}</p>
        )}
        <Btn variation="primary" size="large" shape="pill" type="submit">
          Submit
        </Btn>
      </Form>
    </StyledAddReview>
  );
});

export default AddReview;
