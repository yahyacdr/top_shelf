import { useEffect, useState } from "react";

export default function useWindowSize(size, op = "bigger") {
  size = Number(size);
  const [mobileSize, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return function () {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [mobileSize, size]);

  return op === "smaller" ? mobileSize <= size : mobileSize >= size;
}
