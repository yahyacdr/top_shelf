/* eslint-disable react/display-name */

import PropTypes from "prop-types";
import styled from "styled-components";
import screens from "../utils/screens";
import { memo } from "react";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  row-gap: 64px;

  &.prod-main {
    > section:last-child {
      /* margin-bottom: 500px; */
    }
  }

  &.main-cat {
    padding-right: 32px;
    padding-left: 16px;
    @media (min-width: ${screens.tablet.xxm}) {
      display: grid;
      grid-template-columns: 30% 70%;
      grid-template-rows: repeat(7, auto);
      grid-template-areas: "section1 section1" "filter section2" "filter section3" "filter section4" "filter section5" "filter section6" "filter section7";
      > section:not(:first-child) {
        width: unset;
      }
    }
    margin-bottom: 380px;
    > section:not(:first-child) {
      width: 100%;
    }
  }

  &.main-landing > section:not(.how-to-section) {
    width: 100%;
    padding: 24px;
  }
`;

const Main = memo(({ children, className }) => {
  return <StyleMain className={className}>{children}</StyleMain>;
});

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Main;
