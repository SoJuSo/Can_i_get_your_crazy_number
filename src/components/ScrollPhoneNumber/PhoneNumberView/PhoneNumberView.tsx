import React from "react";

interface PhoneNumberViewProps {
  phoneNumber: number;
}

const PhoneNumberDisplay: React.FC<PhoneNumberViewProps> = ({ phoneNumber }) => {
  return (
    <div>
      010 {String(phoneNumber).slice(0, 4).padStart(4, "0")}{" "}
      {String(phoneNumber).slice(4, 8).padStart(4, "0")}
    </div>
  );
};

export default PhoneNumberDisplay;
