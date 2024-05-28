import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
    `}
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
`;

export { StyledFilter as Filter };
