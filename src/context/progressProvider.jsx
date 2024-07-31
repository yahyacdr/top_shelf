import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export default function ProgressProvider({ children }) {
  const [currentPoint, setCurrentPoint] = useState("cart");
  const [progress, setProgress] = useState(0);
  return (
    <ProgressContext.Provider
      value={{ currentPoint, setCurrentPoint, progress, setProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

ProgressProvider.propTypes = {
  children: PropTypes.node,
};

function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}

export { useProgress };
