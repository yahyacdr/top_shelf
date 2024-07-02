/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import Filter from "../../ui/Filter";
import { useCart } from "../../features/cart/cartContext";

const Add = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50% 50%;
  grid-template-areas: "p p" "check1 check2";
  gap: 8px 32px;
  margin-top: 24px;
  > p {
    text-transform: uppercase;
    font-size: var(--font-size-small-50);
    color: var(--dark-300);
    line-height: 150%;
    letter-spacing: 1px;
    font-weight: 300;
    margin-bottom: 8px;
    grid-area: p;
  }
  label {
    color: var(--dark-900);
    font-size: var(--font-size-small-100);
    line-height: 150%;
    font-weight: 400;
  }
  p + div {
    grid-area: check1;
  }
  p + div + div {
    grid-area: check2;
  }
`;
const AddIntegra = memo(() => {
  const { dispatch, additions } = useCart();
  function handleIntegra(e) {
    if (e.target.checked) {
      dispatch({
        type: "ADD_INTEGRA",
        payload: { price: Number(e.target.name), label: Number(e.target.id) },
      });
    } else {
      dispatch({
        type: "REMOVE_INTEGRA",
        payload: { price: Number(e.target.name), label: Number(e.target.id) },
      });
    }
  }

  return (
    <Add>
      <p>add integra pack</p>
      <Filter.Check
        label="4g (+$2.00)"
        id="4"
        name="2"
        handleChange={(e) => handleIntegra(e)}
        checked={additions.label >= 4}
      />
      <Filter.Check
        label="8g (+$3.00)"
        id="8"
        name="3"
        handleChange={(e) => handleIntegra(e)}
        checked={additions.label >= 8}
      />
    </Add>
  );
});

export default AddIntegra;
