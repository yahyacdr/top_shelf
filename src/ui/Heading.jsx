import styled, { css } from "styled-components";
import screens from "../utils/screens";

const Heading = styled.h1`
  margin-bottom: 25px;
  ${(props) =>
    css`
      ${props.custom}
    `};
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 700;
      text-transform: uppercase;
      line-height: 110%;
      letter-spacing: -4px;
      font-size: var(--font-size-large-66);
      @media (min-width: ${screens.tablet.xxm}) {
        font-size: var(--font-size-large-100);
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--font-size-large-66);
      font-weight: 600;
      @media (max-width: 540px) {
        font-size: var(--font-size-large-33);
      }
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--font-size-large-33);
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.5px;
      @media (max-width: 640px) {
        font-size: var(--font-size-medium-100);
      }
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: var(--font-size-medium-66);
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0px;
    `}
`;

export default Heading;
