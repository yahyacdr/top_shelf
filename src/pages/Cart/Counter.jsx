/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import { useCart } from "../../features/cart/cartContext";
import { useDispatch } from "react-redux";
import { INCREASE } from "../../features/cart/cartSlice";

const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0px;
  border-radius: 10px;
  border: 1px solid var(--light-600);
  padding: 6px 16px;
`;

const StyledBtn = styled.button`
  background-color: var(--light-300);
  color: var(--dark-900);
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  font-size: var(--font-size-small-100);
  &.num {
    background-color: var(--light-600);
  }
`;

const Btns = styled.div``;

const Counter = memo(() => {
  return (
    <StyledCounter>
      <Btns>
        <MinusBtn />
        <NumBtn />
        <PlusBtn />
      </Btns>
    </StyledCounter>
  );
});

const PlusBtn = memo(() => {
  const dispatch = useDispatch();

  return <StyledBtn onClick={() => dispatch(INCREASE())}>+</StyledBtn>;
});

const NumBtn = memo(() => {
  const { quantity_buy } = useCart();
  return (
    <StyledBtn className="num" disabled={true}>
      {quantity_buy}
    </StyledBtn>
  );
});

const MinusBtn = memo(() => {
  const { dispatch } = useCart();

  return (
    <StyledBtn
      onClick={() => {
        dispatch({ type: "DEC" });
        dispatch({ type: "SET_PRICE" });
        dispatch({ type: "SET_TOTAL_PRICE" });
      }}
    >
      -
    </StyledBtn>
  );
});

export default Counter;
