import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  id: 0,
  quantity: 1,
  price: 102,
  weight: { price: 28, label: "28g" },
  additions: { price: 0, label: 0 },
  totalPrice: 102,
  discount: 0,
  basePrice: 7.145986,
};

function reducer(state, action) {
  switch (action.type) {
    case "setId":
      return {
        ...state,
        id: action.payload,
      };
    case "setWeight":
      return {
        ...state,
        weight: { price: action.payload.price, label: action.payload.label },
      };
    case "inc":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "dec":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };
    case "ADD_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price + action.payload.price,
          label: state.additions.label + action.payload.label,
        },
      };
    case "REMOVE_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price - action.payload.price,
          label: state.additions.label - action.payload.label,
        },
      };
    case "setPrice":
      return {
        ...state,
        price: state.basePrice * state.weight.price - state.discount,
      };
    case "setDiscount":
      return {
        ...state,
        discount: action.payload,
      };
    case "setBasePrice":
      return {
        ...state,
        basePrice: action.payload,
      };
    case "setTotalPrice": {
      return {
        ...state,
        totalPrice: state.price * state.quantity + state.additions.price,
      };
    }
    case "reset":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [
    { id, price, quantity, weight, additions, totalPrice, discount },
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
