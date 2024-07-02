import { useState } from "react";

const ScrollPhoneNumberPage = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  return (
    <>
      <div>ScrollPhoneNumberPage</div>
      <input
        tabIndex={-1}
        style={{ width: "200px" }}
        type="range"
        min={0}
        max={99999999}
        step={1}
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.valueAsNumber);
        }}
        onWheel={(e) => {
          if (e.deltaY < 0) {
            setPhoneNumber(phoneNumber + 1);
          } else {
            if (phoneNumber > 0) {
              setPhoneNumber(phoneNumber - 1);
            }
          }
        }}
      />
      <p>1</p>
      <div style={{ display: "inline" }}>010 </div>
      <div style={{ display: "inline" }}>{String(phoneNumber).slice(4, 8).padStart(4, "0")} </div>
      <div>{String(phoneNumber).slice(0, 4).padStart(4, "0")}</div>
    </>
  );
};

export default ScrollPhoneNumberPage;
