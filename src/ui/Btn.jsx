import styled, { css } from "styled-components";

const variations = {
  regular: css`
    background-color: transparent;
  `,
  label: css`
    background-color: var(--light-400);
  `,
  secondary: css`
    border: 1px solid var(--light-600);
    background-color: transparent;
    flex-grow: 1;
    &:hover {
      border: 1px solid var(--green-900);
      background-color: var(--light-400);
      color: var(--green-900);
    }
  `,
  primary: css`
    background-color: var(--green-200);
  `,
};

const sizes = {
  small: css`
    font-size: var(--font-size-medium-33);
    font-weight: 400;
    padding: 5px;
  `,
  medium: css`
    font-size: var(--font-size-medium-33);
    font-weight: 400;
  `,
  large: css`
    font-size: var(--font-size-medium-66);
    font-weight: 500;
    padding: 18px 56px;
  `,
};

const shapes = {
  none: css``,
  pill: css`
    border-radius: 36px;
  `,
  longPill: css`
    border-radius: 36px;
    width: 100%;
  `,
  circle: css`
    border-radius: 50%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    & > * {
      width: 50%;
      height: 50%;
    }
  `,
  button: css`
    border-radius: 3px;
  `,
};

const Btn = styled.button`
  border: none;
  border-radius: unset;
  color: var(${(props) => props.color});
  line-height: 150%;
  letter-spacing: 0;
  transition: 0.25s;

  &:focus {
    border: none;
    outline: none;
  }

  &:disabled:not(.label, .pages-btns) {
    background-color: var(--dark-300);
    cursor: not-allowed;
  }
  &.label {
    text-transform: capitalize;
  }

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
  ${(props) => shapes[props.shape]}
  ${(props) =>
    props.active &&
    css`
      border: 1px solid var(--green-900);
      background-color: var(--light-400);
      &:focus {
        border: 1px solid var(--green-900);
      }
    `}
    ${(props) =>
    css`
      ${props.custom}
    `}
`;

Btn.defaultProps = {
  variation: "regular",
  size: "small",
  shape: "pill",
};

export default Btn;
