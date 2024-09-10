import React from "react";
interface PhoneNumberInputProps {
  phoneNumber: number;
  setPhoneNumber: (value: number) => void;
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
  level: "easy" | "normal" | "hard" | "korean";
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  setPhoneNumber,
  activeWheel,
  activeKeyBoard,
  level,
}) => {
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (!activeKeyBoard) {
            e.preventDefault();
          }
        }}
        style={{
          width:
            level === "easy"
              ? "300px"
              : level === "korean"
                ? "50px"
                : level === "hard"
                  ? "100px"
                  : "200px",
        }}
        type="range"
        min={0}
        max={99999999}
        step={1}
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.valueAsNumber);
        }}
        onWheel={(e) => {
          if (activeWheel) {
            if (e.deltaY < 0 && phoneNumber < 99999999) {
              setPhoneNumber(phoneNumber + 1);
            } else if (e.deltaY > 0 && phoneNumber > 0) {
              setPhoneNumber(phoneNumber - 1);
            }
          }
        }}
      />
    </>
  );
};

export default PhoneNumberInput;
