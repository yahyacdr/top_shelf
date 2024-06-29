import { useLottie } from "lottie-react";
import contentloadingAnimation from "../assets/content-loading-animation.json";

const style = {
  height: "100%",
  width: "100%",
};

const useContentLoadingAnimation = () => {
  const options = {
    animationData: contentloadingAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default useContentLoadingAnimation;
