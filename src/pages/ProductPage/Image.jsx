/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useSetCart from "../../hooks/useSetCart";
import { useFilter } from "../../context/filterContext";
import screens from "../../utils/screens";
import { getRandomNumberBased } from "../../utils/helper";
import { EXECLUDE_IMG } from "../../consts";

const StyledImage = styled.div`
  aspect-ratio: 5.73 / 5.2;
`;

const ImgCard = styled.div`
  background-color: var(--light-400);
  border-radius: 24px;
  border: 1px solid var(--light-600);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > img {
    width: 70%;
    @media (min-width: ${screens.mobile.xxm}) {
      width: 50%;
    }

    @media (min-width: ${screens.mobile.xxl}) {
      width: 40%;
    }

    @media (min-width: ${screens.desktop.xs}) {
      width: 30%;
    }
  }
  @media (min-width: ${screens.tablet.xxm}) {
    aspect-ratio: 5.73 / 5.2;
  }

  @media (min-width: ${screens.desktop.xxs}) {
    width: 85%;
    height: auto;
  }
`;

const StyledIndicator = styled.span`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    overflow: visible;
    path:not(:last-child) {
      transition: transform 0.3s ease-in-out;
    }
  }
  &.out:hover {
    path:not(:last-child) {
      transform: translate(3px, -3px);
    }
  }
  &.in:hover {
    path:not(:last-child) {
      transform: translate(-3px, 3px);
    }
  }
  &.flipped {
    path:not(:last-child) {
      transform-origin: center center;
      transform: translate(11px, -11px) rotate(180deg);
    }
  }

  &.flipped-in {
    path:not(:last-child) {
      transform-origin: center center;
      transform: translate(7px, -7px) rotate(180deg);
    }
  }

  @media (min-width: ${screens.desktop.xxs}) {
    right: 92px;
    bottom: 92px;
  }
`;

const Image = memo(({ isImgPrvwOpen, setIsImgPrvwOpen, index }) => {
  const { items } = useFilter();

  const location = useLocation();
  const currentCard = Number(location.hash[location.hash.length - 1]) - 1 || 0;

  useSetCart(items[currentCard]);

  useEffect(() => {
    document.body.style.overflow = isImgPrvwOpen ? "hidden" : "auto";
    if (isImgPrvwOpen) {
      window.scrollTo(0, 0);
    }
  }, [isImgPrvwOpen]);

  return (
    <StyledImage>
      <ImgCard>
        <img
          src={`https://pngimg.com/uploads/cannabis/small/cannabis_PNG${getRandomNumberBased(
            3,
            75,
            EXECLUDE_IMG,
            index
          )}.png`}
          alt=""
        />
      </ImgCard>
      <Indicator
        setIsImgPrvwOpen={setIsImgPrvwOpen}
        isImgPrvwOpen={isImgPrvwOpen}
      />
    </StyledImage>
  );
});

function Indicator({ setIsImgPrvwOpen, isImgPrvwOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledIndicator
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsImgPrvwOpen((open) => !open)}
      className={`${
        !isImgPrvwOpen
          ? isHovered
            ? "out"
            : "in"
          : isHovered
          ? "flipped-in"
          : ""
      } ${isImgPrvwOpen ? "flipped" : ""} indicator`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8333 9.16634L17.6667 2.33301"
          stroke="#05422C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 5.66699V1.66699H14.3333"
          stroke="#05422C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.16666 1.66699H7.49999C3.33332 1.66699 1.66666 3.33366 1.66666 7.50033V12.5003C1.66666 16.667 3.33332 18.3337 7.49999 18.3337H12.5C16.6667 18.3337 18.3333 16.667 18.3333 12.5003V10.8337"
          stroke="#05422C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledIndicator>
  );
}

Indicator.propTypes = {
  setIsImgPrvwOpen: PropTypes.func.isRequired,
  isImgPrvwOpen: PropTypes.bool.isRequired,
};

Image.propTypes = {
  isImgPrvwOpen: PropTypes.bool,
  setIsImgPrvwOpen: PropTypes.func,
  index: PropTypes.number,
};

export default Image;
