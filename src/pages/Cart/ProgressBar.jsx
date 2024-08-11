/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { forwardRef, memo } from "react";
import styled from "styled-components";

const Bar = styled.div`
  flex-grow: 1;
  position: relative;
  border-radius: 6px;
`;

const Progress = styled.span`
  position: absolute;
  display: inline-block;
  height: 100%;
  border-radius: 6px;
  transition: width 0.8s;
`;

const ProgressBar = memo(
  forwardRef(
    ({ barHeight = 1, progress, innerBarColor, outerBarColor }, elRef) => {
      return (
        <Bar
          style={{
            height: barHeight + "px",
            maxHeight: barHeight + "px",
            minHeight: barHeight + "px",
            backgroundColor: outerBarColor,
          }}
          className="progress-bar-container"
          ref={elRef}
        >
          <Progress
            style={{
              width: `${progress}%`,
              backgroundColor: innerBarColor,
            }}
          />
        </Bar>
      );
    }
  )
);

ProgressBar.propTypes = {
  barHeight: PropTypes.number,
  progress: PropTypes.number,
  innerBarColor: PropTypes.string,
  outerBarColor: PropTypes.string,
  elRef: PropTypes.any,
};

export default ProgressBar;
