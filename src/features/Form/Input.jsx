/* eslint-disable react/display-name */
import styled from "styled-components";
import checkMark from "../../data/images/check-mark.png";

const Input = styled.input`
  border: 1px solid var(--light-600);
  border-radius: 8px;
  padding: 14px 16px;
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  background-color: var(--light-300);
  color: var(--dark-900);
  width: 100%;
  &::-webkit-input-placeholder {
    color: var(--light-700);
  }

  &::-ms-input-placeholder {
    color: var(--light-700);
  }

  &:-ms-input-placeholder {
    color: var(--light-700);
  }

  &[type="checkbox"] {
    position: relative;
    border-radius: 6px;
    width: 16px;
    aspect-ratio: 1/1;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      border-radius: 6px;
    }
    &::before {
      display: block;
      background-color: var(--light-300);
      border: 1px solid var(--light-600);
    }
    &::after {
      display: none;
      background-image: url(${checkMark});
      background-size: 16px 16px;
      background-position: center;
      background-repeat: no-repeat;
      background-color: var(--green-200);
    }
    &:checked::after {
      display: block;
    }
  }
`;

export default Input;
