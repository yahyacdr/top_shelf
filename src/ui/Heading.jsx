import styled, { css } from "styled-components";

const Heading = styled.h1`
  margin-bottom: 25px;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--font-size-large-100);
      font-weight: 900;
      text-transform: uppercase;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--font-size-large-66);
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--font-size-large-33);
      font-weight: 600;
    `}
`;

export default Heading;
