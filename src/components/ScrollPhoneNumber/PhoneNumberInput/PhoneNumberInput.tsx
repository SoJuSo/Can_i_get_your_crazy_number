import { styled } from "styled-components";

interface PhoneNumberInputProps {
  phoneNumber: number;
  setPhoneNumber: (value: number) => void;
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
  level: "easy" | "normal" | "hard" | "korean";
}

const StyledInput = styled.input<{ level: string }>`
  width: ${({ level }) =>
    level === "easy"
      ? "300px"
      : level === "korean"
        ? "50px"
        : level === "hard"
          ? "100px"
          : "200px"};
`;

const PhoneNumberInput = ({
  phoneNumber,
  setPhoneNumber,
  activeWheel,
  activeKeyBoard,
  level,
}: PhoneNumberInputProps) => {
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (activeWheel) {
      if (e.deltaY < 0 && phoneNumber < 99999999) {
        setPhoneNumber(phoneNumber + 1);
      } else if (e.deltaY > 0 && phoneNumber > 0) {
        setPhoneNumber(phoneNumber - 1);
      }
    }
  };

  return (
    <StyledInput
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
      tabIndex={0}
      onChange={(e) => {
        setPhoneNumber(e.target.valueAsNumber);
      }}
      onWheel={handleWheel}
      level={level}
    />
  );
};

export default PhoneNumberInput;
