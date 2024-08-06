import styled, { css } from "styled-components";

const Divider = styled.span`
  width: ${(props) => props.width};
  min-height: 1px;
  max-height: 1px;
  background-color: ${(props) => props.color};
  display: inline-block;
  ${(props) =>
    props.polarity === "vertical" &&
    css`
      transform: rotate(90deg);
    `};
`;

export default Divider;
