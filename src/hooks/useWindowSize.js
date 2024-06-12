import { useEffect, useState } from "react";

export default function useWindowSize({ size }) {
  size = Number(size);
  const [mobileSize, setWindowWidth] = useState(window.innerWidth >= { size });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowWidth(window.innerWidth >= { size })
    );
  }, [mobileSize, size]);
  return mobileSize;
}
