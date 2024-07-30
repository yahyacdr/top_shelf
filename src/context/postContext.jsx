import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export default function PostProvider({ children, values = {} }) {
  const [reviewsNum, setReviewsNum] = useState(2);
  const [rating, setRating] = useState(1);

  return (
    <PostContext.Provider
      value={{ ...values, reviewsNum, setReviewsNum, rating, setRating }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}

PostProvider.propTypes = {
  children: PropTypes.element,
  values: PropTypes.object,
};

export { usePost };
