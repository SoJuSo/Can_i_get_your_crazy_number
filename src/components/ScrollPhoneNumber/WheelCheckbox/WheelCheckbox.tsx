interface WheelCheckboxProps {
  activeWheel: boolean;
  setActiveWheel: (value: boolean) => void;
}

const WheelCheckbox = ({ activeWheel, setActiveWheel }: WheelCheckboxProps) => {
  return (
    <p>
      <span>wheel {String(activeWheel)} </span>
      <input type="checkbox" checked={activeWheel} onChange={() => setActiveWheel(!activeWheel)} />
    </p>
  );
};

export default WheelCheckbox;
