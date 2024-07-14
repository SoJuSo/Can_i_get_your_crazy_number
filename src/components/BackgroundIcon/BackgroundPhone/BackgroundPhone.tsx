import React from "react";
import { chooseRandomOption, generateRandomNumber } from "../../../utils/random";
import BackgroundIcon from "../BackgroundIcon";

const BackgroundPhone = React.memo(() => {
  const randomItem = chooseRandomOption();
  const randomSize = generateRandomNumber();
  return <BackgroundIcon random={randomItem} size={randomSize} />;
});

export default BackgroundPhone;
