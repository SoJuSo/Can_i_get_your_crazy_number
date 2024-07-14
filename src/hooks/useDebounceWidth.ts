import { useEffect, useState } from "react";

const useDebounceWidth = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSize(window.innerWidth);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return size;
};

export default useDebounceWidth;
