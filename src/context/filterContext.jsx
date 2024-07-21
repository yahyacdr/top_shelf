import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterProvider({
  children,
  defaultValue = {
    name: "default",
    filter: { column: "", value: "", method: "all" },
  },
}) {
  const [currentFilter, setCurrentFilter] = useState(defaultValue);

  return (
    <FilterContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.object.isRequired,
};

function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}

export { useFilter };
