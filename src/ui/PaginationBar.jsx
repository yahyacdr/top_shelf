/* eslint-disable react/display-name */
import PropTypes from "prop-types";

import { memo } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { usePaginated } from "../context/paginationContext";

const StyledPaginationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 62px;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const Label = styled.p`
  color: var(--dark-300);
  font-size: var(--font-size-small-100);
  font-weight: 300;
  line-height: 150%;
  letter-spacing: 0;
`;
const Numbers = styled.div`
  & button {
    font-family: "Lexend", sans-serif;
  }
`;

const PaginationBar = memo(() => {
  const { activeIndex, TabLength, PrevTabLength, count, TabsCount, dispatch } =
    usePaginated();

  return (
    <StyledPaginationBar>
      <Label>
        Showing {PrevTabLength}-{TabLength} of {count} results
      </Label>
      <Numbers>
        <Pagination
          count={TabsCount}
          page={activeIndex + 1}
          onChange={(event, value) =>
            dispatch({ type: "SET_ACTIVE_INDEX", payload: value - 1 })
          }
        />
      </Numbers>
    </StyledPaginationBar>
  );
});

PaginationBar.propTypes = {
  currentTab: PropTypes.number,
  maxLength: PropTypes.number,
};

export default PaginationBar;
