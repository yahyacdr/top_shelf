import styled, { css } from "styled-components";

const FloatingPanel = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  padding: 84px 120px;
  border-radius: 24px;
  ${(props) =>
    props.img &&
    css`
      background-image: url(${(props) => props.img});
      background-repeat: no-repeat;
      background-size: cover;
    `}
  background-color: var(${(props) => props.bgColor});
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default FloatingPanel;
