import React from "react";

interface KeyboardCheckboxProps {
  activeKeyBoard: boolean;
  setActiveKeyBoard: (value: boolean) => void;
}

const KeyboardCheckbox: React.FC<KeyboardCheckboxProps> = ({
  activeKeyBoard,
  setActiveKeyBoard,
}) => {
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
