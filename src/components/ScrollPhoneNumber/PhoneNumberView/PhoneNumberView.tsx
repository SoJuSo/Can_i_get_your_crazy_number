interface PhoneNumberViewProps {
  phoneNumber: number;
}

const PhoneNumberDisplay = ({ phoneNumber }: PhoneNumberViewProps) => {
  const parsedNumber = String(phoneNumber).padStart(8, "0");
  return (
    <div>
      010 {parsedNumber.slice(0, 4)} {parsedNumber.slice(4, 8)}
    </div>
  );
};

export default PhoneNumberDisplay;
