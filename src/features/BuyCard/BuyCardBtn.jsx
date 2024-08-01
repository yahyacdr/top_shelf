/* eslint-disable react/display-name */
import { memo } from "react";
import Btn from "../../ui/Btn";
import { useDispatch } from "react-redux";
import { useCart } from "../cart/cartContext";
import styled from "styled-components";
import { ADD } from "../cart/cartSlice";
import PropTypes from "prop-types";

const BtnContainer = styled.div`
  grid-area: btn;
  height: 100%;
`;
const BuyCardBtn = memo(({ children }) => {
  const {
    id,
    name,
    img,
    quantity_buy,
    quantity_stock,
    price,
    basePrice,
    weight,
    additions,
    totalPrice,
  } = useCart();

  const dispatch = useDispatch();

  return (
    <BtnContainer>
      <Btn
        size="medium"
        variation="primary"
        shape="pill"
        color="--light-300"
        disabled={!quantity_stock}
        onClick={() =>
          dispatch(
            ADD(
              id,
              name,
              img,
              quantity_buy,
              price,
              basePrice,
              weight,
              additions,
              totalPrice
            )
          )
        }
      >
        {children || "Add to Cart"}
      </Btn>
    </BtnContainer>
  );
});

BuyCardBtn.propTypes = {
  children: PropTypes.element,
};

export default BuyCardBtn;
