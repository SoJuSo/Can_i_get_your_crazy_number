import Checkbox from "../../common/CheckBox";

interface KeyboardCheckboxProps {
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
}

const KeyboardCheckbox = ({ activeKeyBoard, setActiveKeyBoard }: KeyboardCheckboxProps) => {
  return (
    <Checkbox
      id="keyBoard"
      label="keyBoard"
      isActive={activeKeyBoard}
      setIsActive={setActiveKeyBoard}
    />
  );
};

export default KeyboardCheckbox;
