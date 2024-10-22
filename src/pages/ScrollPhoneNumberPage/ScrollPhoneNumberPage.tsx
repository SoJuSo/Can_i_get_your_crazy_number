import { useState, useCallback } from "react";
import PhoneNumberInput from "../../components/ScrollPhoneNumber/PhoneNumberInput";
import LevelButton from "../../components/ScrollPhoneNumber/LevelButton";
import PhoneNumberView from "../../components/ScrollPhoneNumber/PhoneNumberView";
import WheelCheckbox from "../../components/ScrollPhoneNumber/WheelCheckbox";
import KeyboardCheckbox from "../../components/ScrollPhoneNumber/KeyboardCheckbox";

const ScrollPhoneNumberPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [activeWheel, setActiveWheel] = useState<boolean>(false);
  const [activeKeyBoard, setActiveKeyBoard] = useState<boolean>(false);
  const [level, setLevel] = useState<"easy" | "normal" | "hard" | "korean">("easy");

  const handleSetPhoneNumber = useCallback((number: number) => {
    setPhoneNumber(number);
  }, []);

  const handleSetActiveWheel = useCallback((active: boolean) => {
    setActiveWheel(active);
  }, []);

  const handleSetActiveKeyBoard = useCallback((active: boolean) => {
    setActiveKeyBoard(active);
  }, []);

  const handleSetLevel = useCallback((newLevel: "easy" | "normal" | "hard" | "korean") => {
    setLevel(newLevel);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LevelButton setLevel={handleSetLevel} />
      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={handleSetPhoneNumber}
        activeWheel={activeWheel}
        setActiveWheel={handleSetActiveWheel}
        activeKeyBoard={activeKeyBoard}
        setActiveKeyBoard={handleSetActiveKeyBoard}
        level={level}
      />
      <WheelCheckbox activeWheel={activeWheel} setActiveWheel={handleSetActiveWheel} />
      <KeyboardCheckbox
        activeKeyBoard={activeKeyBoard}
        setActiveKeyBoard={handleSetActiveKeyBoard}
      />
      <PhoneNumberView phoneNumber={phoneNumber} />
    </div>
  );
};

export default ScrollPhoneNumberPage;
