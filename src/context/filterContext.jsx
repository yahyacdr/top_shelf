import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";
import { getProductWithFilter } from "../services/apiProducts";

const FilterContext = createContext();

const initialState = {
  items: [],
  isLoading: true,
  currentFilter: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_LOADING_STATE":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        currentFilter: { ...action.payload },
      };
    default:
      return state;
  }
}

export default function FilterProvider({ children }) {
  const [{ items, isLoading, currentFilter }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <FilterContext.Provider
      value={{
        items,
        isLoading,
        currentFilter,
        dispatch,
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

export async function fetchFilteredProducts(filter, dispatch) {
  try {
    dispatch({ type: "SET_LOADING_STATE", payload: true });
    const products = await getProductWithFilter(filter.filter);
    dispatch({ type: "SET_LOADING_STATE", payload: false });
    return products;
  } catch (e) {
    console.error(e);
    throw new Error("Products could not be loaded");
  }
}

function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}

export { useFilter };
