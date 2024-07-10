/* eslint-disable react/display-name */
import { Player } from "@lottiefiles/react-lottie-player";
import { memo, useRef } from "react";
import pageNotFoundAnimation from "../assets/404-page-not-found-animation.json";

const PageNotFoundAnimation = memo(() => {
  const PageNotFound = useRef();

  return (
    <div>
      <Player
        src={pageNotFoundAnimation}
        speed={2}
        className="humberger-menu-player"
        ref={PageNotFound}
        autoplay={true}
        loop={true}
      />
    </div>
  );
});

export default PageNotFoundAnimation;
