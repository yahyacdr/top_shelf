/* eslint-disable react/display-name */
import { Player } from "@lottiefiles/react-lottie-player";
import { memo, useRef } from "react";
import contentLoadingAnimation from "../assets/content-loading-animation.json";

const ContentLoadingAnimation = memo(() => {
  const contentLoader = useRef();

  return (
    <div>
      <Player
        src={contentLoadingAnimation}
        speed={2}
        className="humberger-menu-player"
        ref={contentLoader}
        autoplay={true}
        loop={true}
      />
    </div>
  );
});

export default ContentLoadingAnimation;
