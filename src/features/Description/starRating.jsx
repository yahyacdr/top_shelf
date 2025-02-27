/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { memo, useState } from "react";
import { usePost } from "../../context/postContext";

const StarRating = memo(() => {
  const { rating, setRating } = usePost();
  const [hoverStar, setHoverStar] = useState(0);

  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          full={rating >= i + 1}
          hover={hoverStar >= i + 1}
          onHoverIn={() => setHoverStar(i + 1)}
          onHoverOut={() => setHoverStar(0)}
          changeRating={() => setRating(i + 1)}
        />
      ))}
    </div>
  );
});

function Star({ onHoverIn, onHoverOut, changeRating, full, hover }) {
  return (
    <span
      role="button"
      style={{ cursor: "pointer" }}
      onClick={changeRating}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full || hover ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
            fill="#F2BC1B"
            stroke="#F2BC1B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00911 2.04754L9.03578 4.10087C9.17578 4.38671 9.54911 4.66087 9.86411 4.71337L11.7249 5.02254C12.9149 5.22087 13.1949 6.08421 12.3374 6.93587L10.8908 8.38254C10.6458 8.62754 10.5116 9.10004 10.5874 9.43837L11.0016 11.2292C11.3283 12.6467 10.5758 13.195 9.32161 12.4542L7.57745 11.4217C7.26245 11.235 6.74328 11.235 6.42245 11.4217L4.67828 12.4542C3.42995 13.195 2.67161 12.6409 2.99828 11.2292L3.41245 9.43837C3.48828 9.10004 3.35411 8.62754 3.10911 8.38254L1.66245 6.93587C0.81078 6.08421 1.08495 5.22087 2.27495 5.02254L4.13578 4.71337C4.44495 4.66087 4.81828 4.38671 4.95828 4.10087L5.98495 2.04754C6.54495 0.933372 7.45495 0.933372 8.00911 2.04754Z"
            fill="white"
            stroke="#C8C9CB"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

Star.propTypes = {
  onHoverIn: PropTypes.func,
  onHoverOut: PropTypes.func,
  changeRating: PropTypes.func,
  full: PropTypes.bool,
  hover: PropTypes.bool,
};

export default StarRating;
