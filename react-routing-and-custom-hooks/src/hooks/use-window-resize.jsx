import { useLayoutEffect, useState } from "react";

//custom Hooks
//1. useloaclStorage
//2. useCounter
//3. useSessionStorage
//4. useId
//5. useOutsideClick

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return windowSize
}

export default useWindowResize;