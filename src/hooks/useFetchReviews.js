import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../features/Reviews/reviewsSlice";

export default function useFetchReviews() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  const data = useSelector((state) => state.reviews);
  return data;
}
