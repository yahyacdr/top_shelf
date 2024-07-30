import { useEffect } from "react";
import { useCart } from "../features/cart/cartContext";
import { getRandomNumberBetween, isObjectEmpty } from "../utils/helper";

export default function useSetCart(item = {}) {
  const { dispatch } = useCart();
  useEffect(() => {
    if (!isObjectEmpty(item)) {
      dispatch({ type: "RESET" });
      dispatch({
        type: "SET_ID",
        payload: item.id,
      });
      dispatch({
        type: "SET_NAME",
        payload: item.name,
      });
      dispatch({
        type: "SET_LABEL",
        payload: item.label,
      });
      dispatch({
        type: "SET_TYPE",
        payload: item.type,
      });
      dispatch({
        type: "SET_RATE",
        payload: item.rate,
      });
      dispatch({
        type: "SET_IMG",
        payload:
          item.imgUrl ||
          `https://pngimg.com/uploads/cannabis/small/cannabis_PNG${getRandomNumberBetween(
            2,
            75,
            [31, 12, 58, 30, 18, 34, 48, 10, 37]
          )}.png`,
      });
      dispatch({
        type: "SET_OFFER",
        payload: item.offer,
      });
      dispatch({
        type: "SET_OFFER",
        payload: item.offer,
      });
      dispatch({
        type: "SET_QUANTITY_STOCK",
        payload: item.quantity,
      });
      dispatch({
        type: "SET_BASE_PRICE",
        payload: item.price,
      });
      dispatch({
        type: "SET_DISCOUNT",
        payload: item.discount,
      });
      dispatch({
        type: "SET_PRICE",
      });
      dispatch({
        type: "SET_TOTAL_PRICE",
      });
      dispatch({
        type: "SET_DESCRIPTION",
        payload: item.description,
      });
    }
  }, [item, dispatch]);
}
