import PropTypes from "prop-types";
import styled from "styled-components";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > section {
    width: 100%;
  }

  &.main-cat {
    > section:last-child {
      margin-bottom: 1000px;
    }
  }

  &.main-landing > section {
    width: 100%;
    &:not(:first-child) {
      @media (max-width: 540px) {
        padding: 64px 24px 0 24px;
      }
      padding: 120px 60px 0 120px;
    }
  }
`;

export default function Main({ children, className }) {
  return <StyleMain className={className}>{children}</StyleMain>;
}

Main.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};
