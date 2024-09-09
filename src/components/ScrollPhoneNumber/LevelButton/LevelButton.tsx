import React from "react";
import CustomButton from "../../common/CustomButton";

interface LevelButtonProps {
  setLevel: (level: "easy" | "normal" | "hard" | "korean") => void;
}

const LevelButton: React.FC<LevelButtonProps> = ({ setLevel }) => {
  return (
    <div>
      <CustomButton onClick={() => setLevel("easy")}>쉬움</CustomButton>
      <CustomButton onClick={() => setLevel("normal")}>중간</CustomButton>
      <CustomButton onClick={() => setLevel("hard")}>어려움</CustomButton>
      <CustomButton onClick={() => setLevel("korean")}>한국인</CustomButton>
    </div>
  );
};

export default LevelButton;
