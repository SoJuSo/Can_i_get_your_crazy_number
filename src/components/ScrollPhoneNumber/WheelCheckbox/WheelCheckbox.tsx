import React from "react";

interface WheelCheckboxProps {
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
}

const WheelCheckbox: React.FC<WheelCheckboxProps> = ({ activeWheel, setActiveWheel }) => {
  return (
    <p>
      <span>wheel {String(activeWheel)} </span>
      <input type="checkbox" checked={activeWheel} onChange={() => setActiveWheel(!activeWheel)} />
    </p>
  );
};

export default WheelCheckbox;
