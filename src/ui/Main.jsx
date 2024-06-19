import PropTypes from "prop-types";
import styled from "styled-components";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  &.main-cat {
    padding-inline: 16px;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: repeat(7, auto);
    grid-template-areas: "section1 section1" "filter section2" "filter section3" "filter section4" "filter section5" "filter section6" "filter section7";
    margin-bottom: 380px;
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
