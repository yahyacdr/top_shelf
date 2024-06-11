import { useLottie } from "lottie-react";
import HumbergerAnimationAsset from "../assets/humberger-menu-animation-1.json";

const style = {
  height: 48,
  width: 48,
};

const useHumbergerAnimation = () => {
  const options = {
    animationData: HumbergerAnimationAsset,
    loop: false,
    autoplay: false,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default useHumbergerAnimation;
