/* eslint-disable react/display-name */
import { memo, useContext } from "react";
import styled from "styled-components";
import Divider from "../../ui/Divider";
import { CounterContext } from "../../utils/context";

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

const Availablity = styled.p`
  font-size: var(--font-size-small-50);
  line-height: 150%;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--green-200);
  text-transform: capitalize;
`;

const Counter = memo(() => {
  return (
    <StyledCounter>
      <Btns>
        <MinusBtn />
        <NumBtn />
        <PlusBtn />
      </Btns>
      <Divider polarity="vertical" width="20px" color="var(--light-600)" />
      <Availablity>in stock</Availablity>
    </StyledCounter>
  );
});

const PlusBtn = memo(() => {
  const { setCounter } = useContext(CounterContext);
  return <StyledBtn onClick={() => setCounter((c) => c + 1)}>+</StyledBtn>;
});

const NumBtn = memo(() => {
  const { counter } = useContext(CounterContext);
  return (
    <StyledBtn className="num" disabled={true}>
      {counter}
    </StyledBtn>
  );
});

const MinusBtn = memo(() => {
  const { setCounter } = useContext(CounterContext);

  return (
    <StyledBtn onClick={() => setCounter((c) => (c > 1 ? c - 1 : 1))}>
      -
    </StyledBtn>
  );
});

export default Counter;
