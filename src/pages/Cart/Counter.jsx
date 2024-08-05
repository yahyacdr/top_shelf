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
import screens from "../../utils/screens";

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
  @media (min-width: ${screens.mobile.xxl}) {
    font-size: var(--font-size-medium-33);
  }
`;

const Btns = styled.div`
  display: flex;
`;

const Counter = memo(({ initialValue, itemId, integraId, toCount, price }) => {
  return (
    <StyledCounter className="counter">
      <Btns>
        <MinusBtn itemId={itemId} integraId={integraId} toCount={toCount} />
        <NumBtn quantity={initialValue} />
        <PlusBtn itemId={itemId} integraId={integraId} toCount={toCount} />
      </Btns>
      <Card.Price currentPrice={price} showGram={false} />
    </StyledCounter>
  );
});

Counter.propTypes = {
  initialValue: PropTypes.number,
  itemId: PropTypes.number,
  integraId: PropTypes.number,
  toCount: PropTypes.number,
  price: PropTypes.number,
};

const PlusBtn = memo(({ itemId, integraId, toCount }) => {
  const dispatch = useDispatch();

  return (
    <StyledBtn
      onClick={() => {
        if (toCount === "item") dispatch(INCREASE(itemId));
        else if (toCount === "integra")
          dispatch(ADD_INTEGRA({ integraId, itemId }));
      }}
    >
      +
    </StyledBtn>
  );
});

PlusBtn.propTypes = {
  itemId: PropTypes.number,
  integraId: PropTypes.number,
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

const MinusBtn = memo(({ itemId, integraId, toCount }) => {
  const dispatch = useDispatch();
  return (
    <StyledBtn
      onClick={() => {
        if (toCount === "item") dispatch(DECREASE(itemId));
        else if (toCount === "integra")
          dispatch(DEC_INTEGRA({ itemId, integraId }));
      }}
    >
      -
    </StyledBtn>
  );
});

MinusBtn.propTypes = {
  itemId: PropTypes.number,
  integraId: PropTypes.number,
  toCount: PropTypes.number,
};

export default Counter;
