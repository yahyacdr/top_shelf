import PropTypes from "prop-types";
import { createContext, useContext } from "react";

const PostContext = createContext();

export default function PostProvider({ children, values }) {
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
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
