import { useState } from "react";

const ScrollPhoneNumberPage = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [activeWheel, setActiveWheel] = useState(false);
  const [activeKeyBoard, setActiveKeyBoard] = useState(false);
  const [level, setLevel] = useState<"easy" | "normal" | "hard" | "korean">("easy");

  const setEasy = () => setLevel("easy");
  const setNormal = () => setLevel("normal");
  const setHard = () => setLevel("hard");
  const setKorean = () => setLevel("korean");

  return (
    <>
      <input
        onKeyDown={(e) => {
          if (!activeKeyBoard) {
            e.preventDefault();
          }
        }}
        style={{
          width:
            level === "easy"
              ? "300px"
              : level === "korean"
              ? "50px"
              : level === "hard"
              ? "100px"
              : "200px",
        }}
        type="range"
        min={0}
        max={99999999}
        step={1}
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.valueAsNumber);
        }}
        onWheel={(e) => {
          if (activeWheel) {
            if (e.deltaY < 0) {
              if (phoneNumber < 99999999) {
                setPhoneNumber(phoneNumber + 1);
              }
            } else {
              if (phoneNumber > 0) {
                setPhoneNumber(phoneNumber - 1);
              }
            }
          }
        }}
      />
      <p>
        <span>wheel {String(activeWheel)} </span>
        <input
          type="checkbox"
          checked={activeWheel}
          onChange={() => setActiveWheel(!activeWheel)}
        />
      </p>
      <p>
        <span>keyBoard {String(activeKeyBoard)} </span>{" "}
        <input
          type="checkbox"
          checked={activeKeyBoard}
          onChange={() => setActiveKeyBoard(!activeKeyBoard)}
        />
      </p>
      <div>
        <button onClick={setEasy}>쉬움</button>
        <button onClick={setNormal}>중간</button>
        <button onClick={setHard}>어려움</button>
        <button onClick={setKorean}>한국인</button>
      </div>
      <div>{phoneNumber.toString().padStart(8, "0")}</div>
      <p></p>
      <div>010 </div>
      <div>{String(phoneNumber).slice(4, 8).padStart(4, "0")} </div>
      <div>{String(phoneNumber).slice(0, 4).padStart(4, "0")}</div>
    </>
  );
};

export default ScrollPhoneNumberPage;
