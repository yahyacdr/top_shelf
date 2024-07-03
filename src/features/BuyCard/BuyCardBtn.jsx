/* eslint-disable react/display-name */
import { memo } from "react";
import Btn from "../../ui/Btn";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../cart/cartContext";
import styled from "styled-components";
import { ADD } from "../cart/cartSlice";
import PropTypes from "prop-types";

const BtnContainer = styled.div`
  grid-area: btn;
  height: 100%;
`;
const BuyCardBtn = memo(({ bc }) => {
  const { id, quantity, price, weight, additions, totalPrice } = useCart();
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  const dispatch = useDispatch();

  return (
    <BtnContainer>
      <Btn
        size="medium"
        variation="primary"
        shape="pill"
        color="--light-300"
        disabled={!bc.quantity}
        onClick={() =>
          dispatch(ADD(id, quantity, price, weight, additions, totalPrice))
        }
      >
        Add to Cart
      </Btn>
    </BtnContainer>
  );
});

BuyCardBtn.propTypes = {
  bc: PropTypes.object,
};

export default BuyCardBtn;
