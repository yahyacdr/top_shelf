import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";
import PaginationBar from "../ui/PaginationBar";
import { PAGE_LENGTH } from "../consts";

const PaginationContext = createContext();

const initialState = {
  activeIndex: 0,
  TabLength: PAGE_LENGTH,
  PrevTabLength: 1,
  count: 0,
  TabsCount: 0,
  isArray: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_INDEX":
      return {
        ...state,
        activeIndex: action.payload,
      };
    case "SET_TAB_LENGTH":
      return {
        ...state,
        TabLength: action.payload,
      };
    case "SET_PREV_TAB_LENGTH":
      return {
        ...state,
        PrevTabLength: action.payload,
      };
    case "SET_IS_ARRAY":
      return {
        ...state,
        isArray: action.payload,
      };
    case "SET_TABS_COUNT":
      return {
        ...state,
        TabsCount: action.payload,
      };
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    case "SET_ALL":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default function PaginationProvider({ children }) {
  const [
    { activeIndex, TabLength, PrevTabLength, count, TabsCount, isArray },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <PaginationContext.Provider
      value={{
        activeIndex,
        TabLength,
        PrevTabLength,
        count,
        TabsCount,
        dispatch,
      }}
    >
      {children}
      {isArray && <PaginationBar />}
    </PaginationContext.Provider>
  );
}

PaginationProvider.propTypes = {
  children: PropTypes.node,
};

function usePaginated() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}

export { usePaginated };
