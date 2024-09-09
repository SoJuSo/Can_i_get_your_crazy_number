import { useState } from "react";
import PhoneNumberInput from "../../components/ScrollPhoneNumber/PhoneNumberInput";
import LevelButton from "../../components/ScrollPhoneNumber/LevelButton";
import PhoneNumberView from "../../components/ScrollPhoneNumber/PhoneNumberView";

const ScrollPhoneNumberPage = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [activeWheel, setActiveWheel] = useState(false);
  const [activeKeyBoard, setActiveKeyBoard] = useState(false);
  const [level, setLevel] = useState<"easy" | "normal" | "hard" | "korean">("easy");

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
      <LevelButton setLevel={setLevel} />
      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        activeWheel={activeWheel}
        setActiveWheel={setActiveWheel}
        activeKeyBoard={activeKeyBoard}
        setActiveKeyBoard={setActiveKeyBoard}
        level={level}
      />
      <PhoneNumberView phoneNumber={phoneNumber} />
    </div>
  );
};

export default ScrollPhoneNumberPage;
