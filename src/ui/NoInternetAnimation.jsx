/* eslint-disable react/display-name */
import { Player } from "@lottiefiles/react-lottie-player";
import { memo, useRef } from "react";
import noInternetAnimation from "../assets/no-internet-animation.json";

const NoInternetAnimation = memo(() => {
  const NoInternetPlayer = useRef();

  return (
    <div>
      <Player
        src={noInternetAnimation}
        speed={2}
        className="no-internet-player"
        ref={NoInternetPlayer}
        autoplay={true}
        loop={true}
      />
    </div>
  );
});

export default NoInternetAnimation;
