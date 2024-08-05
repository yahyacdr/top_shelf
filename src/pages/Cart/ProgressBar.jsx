/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { memo } from "react";
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
`;

const ProgressBar = memo(
  ({ showInnerBar, barHeight = 1, progress, innerBarColor, outerBarColor }) => {
    return (
      <Bar
        style={{
          height: barHeight + "px",
          maxHeight: barHeight + "px",
          minHeight: barHeight + "px",
          backgroundColor: outerBarColor,
        }}
        className="progress-bar-container"
      >
        {showInnerBar && (
          <Progress
            style={{
              width: `${progress}%`,
              backgroundColor: innerBarColor,
            }}
          />
        )}
      </Bar>
    );
  }
);

ProgressBar.propTypes = {
  showInnerBar: PropTypes.bool,
  barHeight: PropTypes.number,
  progress: PropTypes.number,
  innerBarColor: PropTypes.string,
  outerBarColor: PropTypes.string,
};

export default ProgressBar;
