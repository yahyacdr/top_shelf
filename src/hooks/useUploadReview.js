import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadReviews } from "../features/Reviews/reviewsSlice";

export default function useUploadReview(data, rate, productId) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadReviews(data.name, data.review, rate, productId));
  }, [dispatch, data.name, data.review, rate, productId]);
  const state = useSelector((state) => state.reviews);
  return state;
}
