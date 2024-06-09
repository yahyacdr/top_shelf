import styled, { css } from "styled-components";

const FloatingPanel = styled.div`
  width: 80%;
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
  @media (max-width: 920px) {
    width: 80%;
    padding: 84px 50px;
  }
`;

export default FloatingPanel;
