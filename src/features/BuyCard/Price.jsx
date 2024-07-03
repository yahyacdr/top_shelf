/* eslint-disable react/display-name */
import { memo } from "react";
import Card from "../../ui/Card";
import PropTypes from "prop-types";
import { useCart } from "../cart/cartContext";

const Price = memo(({ bc }) => {
  const { weight } = useCart();

  return (
    <Card.Price
      hasDiscount={!!bc.discount}
      price={bc.price * weight.weight}
      currentPrice={bc.price * weight.weight - bc.discount}
    />
  );
});

Price.propTypes = {
  bc: PropTypes.object,
};

export default Price;
