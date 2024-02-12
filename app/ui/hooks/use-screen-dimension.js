import { useState, useEffect } from "react";

export const useScreenDimension = () => {
  const [dimension, setDimension] = useState({
    width: undefined,
    height: undefined,
  });

  const handleScreenResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return dimension;
};
