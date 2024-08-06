/* eslint-disable react/display-name */
import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid var(--light-600);
  border-radius: 8px;
  font-size: var(--font-size-small-100);
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0;
  padding: 12px 16px;
  background-color: var(--light-300);
  width: 100%;
  height: 98px;
  color: var(--dark-900);

  &::placeholder {
    color: var(--light-700);
    font-weight: 400;
  }

  &::-ms-placeholder {
    color: var(--light-700);
    font-weight: 400;
  }

  &:-ms-placeholder {
    color: var(--light-700);
    font-weight: 400;
  }
`;

export default TextArea;
