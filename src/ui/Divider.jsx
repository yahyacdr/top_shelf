import styled, { css } from "styled-components";

const Divider = styled.span`
  width: ${(props) => props.width};
  height: 1px;
  background-color: ${(props) => props.color};
  display: inline-block;
  ${(props) =>
    props.polarity === "vertical" &&
    css`
      transform: rotate(90deg);
    `};
  ${(props) => props.polarity === "horizontal" && css``}
`;

export default Divider;
