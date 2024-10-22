import React, { useState, useEffect } from "react";

const RandomNumberCalculatorPage = () => {
  const [randomNumber, setRandomNumber] = useState<string>("00000000");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = React.useRef<number>();

  // 시작 버튼 클릭 시 실행될 함수
  const startRandomizing = () => {
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      const newRandomNumber = generateRandomNumber();
      setRandomNumber(newRandomNumber);
    }, 10); // 0.1초마다 숫자 업데이트
  };

  // 멈춤 버튼 클릭 시 실행될 함수
  const stopRandomizing = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // 숫자를 랜덤으로 생성하는 함수
  const generateRandomNumber = (): string => {
    let result = "";
    for (let i = 0; i < 8; i++) {
      const digit = Math.floor(Math.random() * 10);
      result += digit.toString();
    }
    return result;
  };

  // 컴포넌트가 마운트될 때 interval 정리
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Random Number Display</h1>
      <h2>
        010 {randomNumber.slice(0, 4)} {randomNumber.slice(4, 8)}
      </h2>
      <button onClick={startRandomizing} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopRandomizing} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default RandomNumberCalculatorPage;
