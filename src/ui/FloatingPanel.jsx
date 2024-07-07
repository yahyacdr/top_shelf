import { memo } from "react";
import styled, { css } from "styled-components";
import screens from "../utils/screens";

const FloatingPanel = styled.div`
  width: 89%;
  max-width: 1200px;
  display: flex;
  padding: 64px 0px;
  border-radius: 24px;
  ${(props) =>
    props.img &&
    css`
      background-image: url(${(props) => props.img});
      background-repeat: no-repeat;
      background-size: cover;
    `}
  background-color: var(--green-900);
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: ${screens.tablet.xxm}) {
    padding: 84px 50px;
  }
  @media (min-width: ${screens.mobile.l}) {
    padding: 84px 50px;
  }
  @media (min-width: ${screens.mobile.xm}) {
    padding: 64px 32px;
  }
`;

const MemoizedFloatingPanel = memo(FloatingPanel);

export default MemoizedFloatingPanel;
