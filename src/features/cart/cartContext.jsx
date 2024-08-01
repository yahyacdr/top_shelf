import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  id: 1,
  name: "Mix And Match Shatter/Budder",
  label: "indica 70%",
  type: "concentrates",
  rate: 4.6,
  img: "https://xldhfboiiqpwwfsdjbfu.supabase.co/storage/v1/object/public/cannabis-imgs/image_8_prev_ui_2.png",
  offer: null,
  weight: { weight: 28, label: "28g" },
  quantity_buy: 1,
  quantity_stock: 0,
  price: Math.round(7.14285 * 28),
  additions: { price: 0, integras: [] },
  totalPrice: 102,
  discount: 0,
  basePrice: 7.145986,
  description: `Discover the ultimate relaxation with our Relaxation Blend Indica. This strain is perfect for unwinding after a long day, offering deep, soothing effects that melt away stress and tension. With its earthy aroma and hints of sweet berry, the Relaxation Blend promises a calming experience that promotes restful sleep and peace of mind.
                Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sem integer vitae justo eget magna fermentum iaculis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Dictum fusce ut placerat orci. Accumsan sit amet nulla facilisi. Eleifend donec pretium vulputate sapien. Velit scelerisque in dictum non consectetur. Nulla facilisi etiam dignissim diam quis. Molestie a iaculis at erat pellentesque adipiscing commodo. Dictum varius duis at consectetur lorem donec massa sapien. Nulla at volutpat diam ut venenatis tellus. Nisl vel pretium lectus quam id leo. Interdum varius sit amet mattis vulputate enim. Tortor posuere ac ut consequat semper viverra. Lobortis elementum nibh tellus molestie nunc. Suspendisse ultrices gravida dictum fusce.`,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "SET_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "SET_LABEL": {
      return {
        ...state,
        label: action.payload,
      };
    }
    case "SET_TYPE": {
      return {
        ...state,
        type: action.payload,
      };
    }
    case "SET_RATE": {
      return {
        ...state,
        rate: action.payload,
      };
    }
    case "SET_IMG": {
      return {
        ...state,
        img: action.payload,
      };
    }
    case "SET_OFFER": {
      return {
        ...state,
        offer: action.payload,
      };
    }
    case "SET_QUANTITY_STOCK": {
      return {
        ...state,
        quantity_stock: action.payload,
      };
    }
    case "SET_WEIGHT":
      return {
        ...state,
        weight: { weight: action.payload.price, label: action.payload.label },
      };
    case "INC":
      return {
        ...state,
        quantity_buy: state.quantity_buy + 1,
      };
    case "DEC":
      return {
        ...state,
        quantity_buy: state.quantity_buy > 1 ? state.quantity_buy - 1 : 1,
      };
    case "ADD_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price + action.payload.price,
          integras: [...state.additions.integras, action.payload.integra],
        },
      };
    case "REMOVE_INTEGRA":
      return {
        ...state,
        additions: {
          price: state.additions.price - action.payload.price,
          integras: state.additions.integras.filter(
            (integra) => integra.id !== action.payload.id
          ),
        },
      };
    case "SET_PRICE":
      return {
        ...state,
        price: Math.round(
          (state.basePrice * state.weight.weight - state.discount) *
            state.quantity_buy
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
    case "SET_DESCRIPTION": {
      return {
        ...state,
        description: action.payload,
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
    {
      id,
      name,
      label,
      type,
      rate,
      img,
      offer,
      price,
      quantity_buy,
      quantity_stock,
      weight,
      additions,
      totalPrice,
      discount,
      basePrice,
      description,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        id,
        name,
        label,
        type,
        rate,
        img,
        offer,
        price,
        quantity_buy,
        quantity_stock,
        weight,
        additions,
        totalPrice,
        discount,
        basePrice,
        description,
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
