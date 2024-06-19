import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Btn from "./Btn";
import Divider from "./Divider";

const StyledFilter = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  /* column-gap: 30px; */
  flex-wrap: wrap;
  row-gap: 12px;
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
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

function Pill({ children, content, active }) {
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
}

function Radio({ content, id, name, handleChange, checked, quantity }) {
  return (
    <RadioLabel htmlFor={id}>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        onChange={handleChange}
        defaultChecked={checked}
        onClick={() => console.log("clicked")}
      />
      {content}
      <Divider width="18px" color="var(--light-600)" polarity="vertical" />
      <span>{quantity || "0"}</span>
    </RadioLabel>
  );
}

function Range({ min, max, values, handleChange }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={values}
      onChange={handleChange}
      multiple
    />
  );
}

function Filter({ children, className, direction }) {
  return (
    <StyledFilter className={className} direction={direction}>
      {children}
    </StyledFilter>
  );
}

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

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.number,
  handleChange: PropTypes.func,
};

Filter.SelectBox = SelectBox;
Filter.Option = Option;
Filter.Pill = Pill;
Filter.Radio = Radio;
Filter.Range = Range;

export default Filter;
