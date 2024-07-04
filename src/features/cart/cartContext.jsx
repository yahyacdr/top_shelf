import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  id: 0,
  quantity: 1,
  price: Math.round(7.14285 * 28),
  weight: { weight: 28, label: "28g" },
  additions: { price: 0, labelWeight: 0, label: [] },
  totalPrice: 102,
  discount: 0,
  basePrice: 7.145986,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "SET_WEIGHT":
      return {
        ...state,
        weight: { weight: action.payload.price, label: action.payload.label },
      };
    case "INC":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DEC":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };
    case "ADD_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price + action.payload.price,
          labelWeight: state.additions.labelWeight + action.payload.labelWeight,
          label: [...state.additions.label, action.payload.label],
        },
      };
    case "REMOVE_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price - action.payload.price,
          labelWeight: state.additions.labelWeight - action.payload.labelWeight,
          label: state.additions.label.filter(
            (label) => label !== action.payload.label
          ),
        },
      };
    case "SET_PRICE":
      return {
        ...state,
        price: Math.round(
          (state.basePrice * state.weight.weight - state.discount) *
            state.quantity
        ),
      };
    case "SET_DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };
    case "SET_BASE_PRICE":
      return {
        ...state,
        basePrice: action.payload,
      };
    case "SET_TOTAL_PRICE": {
      return {
        ...state,
        totalPrice: state.price + state.additions.price,
      };
    }
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [
    { id, price, quantity, weight, additions, totalPrice, discount, basePrice },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        id,
        price,
        quantity,
        weight,
        additions,
        totalPrice,
        discount,
        basePrice,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart };
