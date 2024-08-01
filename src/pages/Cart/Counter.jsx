/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  ADD_INTEGRA,
  DEC_INTEGRA,
  DECREASE,
  INCREASE,
} from "../../features/cart/cartSlice";
import PropTypes from "prop-types";
import Card from "../../ui/Card";

const StyledCounter = styled.div`
  grid-area: counter;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  p {
    font-size: var(--font-size-small-100);
    color: var(--dark-900);
  }
`;

const StyledBtn = styled.button`
  background-color: var(--light-300);
  color: var(--dark-900);
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  font-size: var(--font-size-small-50);
  &.num {
    background-color: var(--light-600);
  }
`;

const Btns = styled.div`
  display: flex;
`;

const Counter = memo(({ initialValue, itemId, toCount, basePrice }) => {
  return (
    <StyledCounter>
      <Btns>
        <MinusBtn id={itemId} toCount={toCount} />
        <NumBtn quantity={initialValue} />
        <PlusBtn id={itemId} toCount={toCount} />
      </Btns>
      <Card.Price price={basePrice} showGram={false} />
    </StyledCounter>
  );
});

Counter.propTypes = {
  initialValue: PropTypes.number,
  itemId: PropTypes.number,
  toCount: PropTypes.number,
  basePrice: PropTypes.number,
};

const PlusBtn = memo(({ id, toCount }) => {
  const dispatch = useDispatch();

  return (
    <StyledBtn
      onClick={() => {
        if (toCount === "item") dispatch(INCREASE(id));
        else if (toCount === "integra") dispatch(ADD_INTEGRA(id));
      }}
    >
      +
    </StyledBtn>
  );
});

PlusBtn.propTypes = {
  id: PropTypes.number,
  toCount: PropTypes.number,
};

const NumBtn = memo(({ quantity }) => {
  return (
    <StyledBtn className="num" disabled={true}>
      {quantity}
    </StyledBtn>
  );
});

NumBtn.propTypes = {
  quantity: PropTypes.number,
};

const MinusBtn = memo(({ id, toCount }) => {
  const dispatch = useDispatch();
  return (
    <StyledBtn
      onClick={() => {
        if (toCount === "item") dispatch(DECREASE(id));
        else if (toCount === "integra") dispatch(DEC_INTEGRA(id));
      }}
    >
      -
    </StyledBtn>
  );
});

MinusBtn.propTypes = {
  id: PropTypes.number,
  toCount: PropTypes.number,
};

export default Counter;
