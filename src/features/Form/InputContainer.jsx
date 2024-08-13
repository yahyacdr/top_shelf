/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { memo } from "react";
import styled from "styled-components";
import Label from "./Label";
import Error from "./Error";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 8px;
  flex-grow: 1;
`;

const InputContainer = memo(({ label = "", error, children }) => {
  return (
    <StyledInputContainer>
      {label && (
        <Label
          htmlFor={children.length ? children[0].props.id : children.props.id}
        >
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledInputContainer>
  );
});

InputContainer.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default InputContainer;
