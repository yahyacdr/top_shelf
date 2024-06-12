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
  /* column-gap: 30px; */
  flex-wrap: wrap;
  row-gap: 15px;
`;

const SelectBox = styled.select`
  background-color: var(--light-300);
  border: 1px solid var(--light-600);
  font-size: var(--font-size-small-50);
  color: var(--dark-900);
  ${(props) =>
    props.shape === "pill" &&
    css`
      border-radius: 50px;
      padding: 8px 10px;
    `}
`;

const Option = styled.option`
  font-size: var(--font-size-small-50);
`;

function Filter({ children }) {
  return <StyledFilter>{children}</StyledFilter>;
}

Filter.SelectBox = SelectBox;
Filter.Option = Option;

export default Filter;
