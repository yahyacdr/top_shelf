/* eslint-disable react/display-name */
import { memo } from "react";
import Card from "../../ui/Card";
import { useCart } from "../cart/cartContext";

const Price = memo(() => {
  const { discount, price } = useCart();

  return (
    <Card.Price
      hasDiscount={!!discount}
      price={price + discount}
      currentPrice={price}
    />
  );
});

export default Price;
