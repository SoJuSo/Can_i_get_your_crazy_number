import Checkbox from "../../common/CheckBox";

interface WheelCheckboxProps {
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
}

const WheelCheckbox = ({ activeWheel, setActiveWheel }: WheelCheckboxProps) => {
  return (
    <Checkbox id="wheel" label="마우스 휠" isActive={activeWheel} setIsActive={setActiveWheel} />
  );
};

export default WheelCheckbox;
