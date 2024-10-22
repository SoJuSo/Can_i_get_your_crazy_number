import BackgroundPhone from "./components/BackgroundIcon/BackgroundPhone";
import useDebounceWidth from "./hooks/useDebounceWidth";
import { Area, Circles } from "./styles/BackgroundLayout";

const Background = () => {
  const windowWidth = Math.max(Math.trunc(useDebounceWidth() / 100), 7);
  const currentWidth = windowWidth < 20 ? windowWidth : 19;
  return (
    <Area>
      <Circles>
        {Array.from({ length: currentWidth * 2 }, (_, i) => (
          <BackgroundPhone key={i} />
        ))}
      </Circles>
    </Area>
  );
};

export default Background;
