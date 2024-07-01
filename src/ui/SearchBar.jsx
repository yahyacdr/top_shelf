/* eslint-disable react/display-name */

import styled from "styled-components";
import Btn from "./Btn";
import { memo } from "react";

const StyledSearchInput = styled.input`
  border-radius: 25px;
  border: 1px solid var(--light-600);
  color: var(--dark-300);
  background-color: transparent;
  padding: 10px;
  width: 100%;
  &::-webkit-input-placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &::-ms-input-placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &:-ms-input-placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &::-moz-placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &:-moz-placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &::placeholder {
    opacity: 0.5;
    color: var(--light-700);
  }

  &:focus {
    border: 1px solid var(--dark-300);
    outline: none;
  }
`;

const StyledSearchBarContainer = styled.div`
  position: relative;
  flex-grow: 0.4;
  max-width: 456px;
`;

const StyledSearchBtnContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchBar = memo(() => {
  return (
    <StyledSearchBarContainer className="search-bar-container">
      <StyledSearchInput type="search" placeholder="Search" />
      <StyledSearchBtnContainer>
        <Btn
          variation="primary"
          shape="circle"
          size="small"
          color="--nocolor"
          width="38px"
          height="38px"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 16.5L15 15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Btn>
      </StyledSearchBtnContainer>
    </StyledSearchBarContainer>
  );
});

export default SearchBar;
