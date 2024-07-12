import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export const useWindowWidth = () => {
  const [size, setSize] = useState(0);
  const debouncedSize = useDebounce(size, 200);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      //   console.log(entry);
      setSize(entry.contentRect.width);
    });
    observer.observe(window.document.body);
    return () => observer.disconnect();
  }, []);

  return debouncedSize;
};
