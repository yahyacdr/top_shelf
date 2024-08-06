/* eslint-disable react/display-name */
import styled from "styled-components";
import screens from "../../utils/screens";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 16px;
  padding: 20px 0;
  width: 100%;
  @media (min-width: ${screens.tablet.xs}) {
    row-gap: 20px;
  }
`;

export default Form;
