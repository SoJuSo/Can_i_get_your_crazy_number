import { useCallback } from "react";
import { SliderInput } from "./PhoneNumberInput.style";

interface PhoneNumberInputProps {
  phoneNumber: number;
  setPhoneNumber: (value: number) => void;
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
  level: "easy" | "normal" | "hard" | "korean";
}

const PhoneNumberInput = ({
  phoneNumber,
  setPhoneNumber,
  activeWheel,
  activeKeyBoard,
  level,
}: PhoneNumberInputProps) => {
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLInputElement>) => {
      if (activeWheel) {
        if (e.deltaY < 0 && phoneNumber < 99999999) {
          setPhoneNumber(phoneNumber + 1);
        } else if (e.deltaY > 0 && phoneNumber > 0) {
          setPhoneNumber(phoneNumber - 1);
        }
      }
    },
    [activeWheel, phoneNumber, setPhoneNumber]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.valueAsNumber);
    },
    [setPhoneNumber]
  );

  return (
    <SliderInput
      onKeyDown={(e) => {
        if (!activeKeyBoard) {
          e.preventDefault();
        }
      }}
      type="range"
      min={0}
      max={99999999}
      step={1}
      value={phoneNumber}
      tabIndex={0}
      onChange={handleChange}
      onWheel={handleWheel}
      $level={level}
    />
  );
};

export default PhoneNumberInput;
