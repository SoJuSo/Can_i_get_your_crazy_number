interface KeyboardCheckboxProps {
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
}

const KeyboardCheckbox = ({ activeKeyBoard, setActiveKeyBoard }: KeyboardCheckboxProps) => {
  return (
    <p>
      <span>keyBoard {String(activeKeyBoard)} </span>
      <input
        type="checkbox"
        checked={activeKeyBoard}
        onChange={() => setActiveKeyBoard(!activeKeyBoard)}
      />
    </p>
  );
};

export default KeyboardCheckbox;
