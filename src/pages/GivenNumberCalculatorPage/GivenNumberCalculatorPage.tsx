import { useState } from "react";

const GivenNumberCalculatorPage = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);

  const MIN_VALUE = 0;
  const MAX_VALUE = 99999999;

  const updatePhoneNumber = (value: number) => {
    if (value < MIN_VALUE) {
      setPhoneNumber(MIN_VALUE);
    } else if (value > MAX_VALUE) {
      setPhoneNumber(MAX_VALUE);
    } else {
      setPhoneNumber(value);
    }
  };

  const insertSpacesEveryFourChars = (str: string) => {
    return str.replace(/(.{4})/g, "$1 ").trim();
  };

  const multiple3 = () => updatePhoneNumber(phoneNumber * 3);
  const plus7 = () => updatePhoneNumber(phoneNumber + 7);
  const divide5 = () => updatePhoneNumber(phoneNumber / 5);
  const minus2 = () => updatePhoneNumber(phoneNumber - 2);
  const floor = () => updatePhoneNumber(Math.floor(phoneNumber));
  const ceil = () => updatePhoneNumber(Math.ceil(phoneNumber));

  return (
    <>
      <div>GivenNumberCalculatorPage</div>
      <div>
        <button onClick={multiple3}>3 곱하기</button>
        <button onClick={plus7}>7 더하기</button>
        <button onClick={divide5}>5 나누기</button>
        <button onClick={minus2}>2 빼기</button>
        <button onClick={floor}>내림</button>
        <button onClick={ceil}>올림</button>
      </div>
      <p>020 {"[ " + insertSpacesEveryFourChars(phoneNumber.toString()) + " ]"}</p>
    </>
  );
};

export default GivenNumberCalculatorPage;
