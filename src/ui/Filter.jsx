/* eslint-disable react/display-name */

import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Btn from "./Btn";
import Divider from "./Divider";
import { memo, useContext } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import PostContext from "../utils/context";
import checkMark from "../data/images/check-mark.png";

const StyledFilter = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 12px;
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
  .multi-range-slider {
    border: none;
    box-shadow: none;
    width: 100%;
    .bar {
      align-items: center;
    }
    .thumb {
    }
    .thumb::before {
      width: 14px;
      height: 14px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      border-width: 2px;
      margin-top: -7px;
    }
    .bar-inner,
    .bar-left,
    .bar-right {
      height: 2px;
      padding: 0;
      border-radius: 100px;
    }
    .caption {
      display: none !important;
    }
  }
`;

const SelectBox = styled.select`
  background-color: var(--light-300);
  border: 1px solid var(--light-600);
  font-size: var(--font-size-small-50);
  color: var(--dark-900);
  ${(props) =>
    props.shape === "pill" &&
    css`
      border-radius: 50px;
      padding: 8px 10px;
    `}
`;

const Option = styled.option`
  font-size: var(--font-size-small-50);
`;

const RadioInput = styled.input`
  width: 20px;
  aspect-ratio: 1/1;
  border: 1px solid var(--light-600);
  position: relative;
  cursor: pointer;
  &:checked {
    border: none;
  }
  &::after {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--light-300);
    border-radius: 50%;
  }
  &:checked::after {
    content: "";
    background-color: var(--green-200);
  }
  &::before {
    width: 8px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--light-300);
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;

const RadioLabel = styled.label`
  color: var(--dark-600);
  font-size: var(--font-size-small-100);
  font-weight: 500;
  text-transform: capitalize;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  column-gap: 15px;
  align-items: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > span {
    color: var(--light-900);
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
`;

const CheckInput = styled.input`
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--light-300);
    border-radius: inherit;
    border: 1px solid var(--light-600);
  }
  &::after {
    display: none;
    content: "";
    background-image: url(${checkMark});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--green-200);
    border-radius: inherit;
  }
  &:checked::after {
    display: block;
  }
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

const Pill = memo(({ children, content, active }) => {
  return (
    <Btn
      size="medium"
      variation="secondary"
      shape="pill"
      color={`${active ? "--green-900" : "--dark-300"}`}
      active={`${active ? "active" : ""}`}
      custom={{ "max-width": "280px" }}
    >
      {content || children}
    </Btn>
  );
});

const Radio = memo(({ content, id, name, handleChange, checked, quantity }) => {
  return (
    <RadioLabel htmlFor={id}>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        onChange={handleChange}
        defaultChecked={checked}
      />
      {content}
      {quantity && (
        <>
          <Divider width="18px" color="var(--light-600)" polarity="vertical" />
          <span>{quantity}</span>
        </>
      )}
    </RadioLabel>
  );
});

const MultiRange = memo(() => {
  const { minValue, maxValue, setMinValue, setMaxValue } =
    useContext(PostContext);

  function handleInput(e) {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  }

  return (
    <MultiRangeSlider
      min={0}
      max={50000}
      step={5}
      minValue={minValue}
      maxValue={maxValue}
      barRightColor="#000"
      barInnerColor="#000"
      barLeftColor="#000"
      thumbLeftColor="#fff"
      thumbRightColor="#fff"
      canMinMaxValueSame={true}
      preventWheel={false}
      label={false}
      ruler={false}
      onInput={handleInput}
    />
  );
});

const Check = memo(({ id, name, handleChange, starsNum }) => {
  return (
    <Checkbox>
      <CheckInput type="checkbox" id={id} name={name} onChange={handleChange} />
      <label htmlFor={id}>
        <StarReview starsNum={starsNum} />
      </label>
    </Checkbox>
  );
});

const StarReview = memo(({ starsNum }) => {
  return <Stars>{returnStars(starsNum).map((star) => star)}</Stars>;
});

const Filter = memo(({ children, className, direction }) => {
  return (
    <StyledFilter className={className} direction={direction}>
      {children}
    </StyledFilter>
  );
});

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.string,
};

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  active: PropTypes.bool,
};

Radio.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  quantity: PropTypes.number,
};

MultiRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.number,
  handleChange: PropTypes.func,
};

StarReview.propTypes = {
  starsNum: PropTypes.number,
};

Check.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  starsNum: PropTypes.number,
};

const returnStars = memo((num = 1) => {
  const filledStars = Array(num).fill(
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
        fill="#F2BC1B"
        stroke="#F2BC1B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const emptyStars = Array(5 - num).fill(
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
        fill="white"
        stroke="#C8C9CB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return [...filledStars, ...emptyStars];
});

Filter.SelectBox = SelectBox;
Filter.Option = Option;
Filter.Pill = Pill;
Filter.Radio = Radio;
Filter.MultiRange = MultiRange;
Filter.Check = Check;

export default Filter;
