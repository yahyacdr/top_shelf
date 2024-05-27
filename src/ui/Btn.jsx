import styled, { css } from "styled-components";

const variations = {
  regular: css`
    background-color: transparent;
  `,
  primary: css`
    background-color: var(--green-300);
  `,
};

const sizes = {
  small: css`
    font-size: var(--font-size-small-50);
    font-weight: 400;
    padding: 5px;
  `,
  medium: css`
    font-size: var(--font-size-medium-33);
    font-weight: 400;
    padding: 10px;
  `,
  large: css`
    font-size: var(--font-size-medium-66);
    font-weight: 500;
    padding: 15px;
  `,
};

const shapes = {
  none: css``,
  pill: css`
    border-radius: 16px;
  `,
  longPill: css`
    border-radius: 16px;
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
};

const Btn = styled.button`
  border: none;
  border-radius: unset;
  color: var(${(props) => props.color});
  &:focus {
    border: none;
    outline: none;
  }
  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
  ${(props) => shapes[props.shape]}
`;

Btn.defaultProps = {
  variation: "regular",
  size: "small",
  shape: "pill",
};

export default Btn;
