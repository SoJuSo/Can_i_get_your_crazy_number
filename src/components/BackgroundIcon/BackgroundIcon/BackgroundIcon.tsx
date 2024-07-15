import { GiRotaryPhone } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { TiPhone } from "react-icons/ti";
import { GiSmartphone } from "react-icons/gi";
import { PiPhoneCallLight } from "react-icons/pi";

import { selectRandomColors } from "../../../utils/random";

interface BackgroundIconProps {
  random: number;
  size?: number;
}

const BackgroundIcon = ({ random = 1, size = 70 }: BackgroundIconProps): JSX.Element => {
  const [startColor, endColor] = selectRandomColors();

  const Icon =
    random === 1
      ? IoIosPhonePortrait
      : random === 2
        ? GiRotaryPhone
        : random === 3
          ? TiPhone
          : random === 4
            ? GiSmartphone
            : PiPhoneCallLight;

  return (
    <li>
      <Icon size={size} style={{ fill: `url(#icon-gradient${random + size})` }} />
      <svg width="0" height="0">
        <linearGradient id={`icon-gradient${random + size}`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={startColor} offset="25%" />
          <stop stopColor={endColor} offset="75%" />
        </linearGradient>
      </svg>
    </li>
  );
};

export default BackgroundIcon;
