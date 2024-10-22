import CustomButton from "../../common/CustomButton";

interface LevelButtonProps {
  setLevel: (level: "easy" | "normal" | "hard" | "korean") => void;
}

const LevelButton = ({ setLevel }: LevelButtonProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <CustomButton variant="green" onClick={() => setLevel("easy")}>
        쉬움
      </CustomButton>
      <CustomButton variant="orange" onClick={() => setLevel("normal")}>
        중간
      </CustomButton>
      <CustomButton variant="red" onClick={() => setLevel("hard")}>
        어려움
      </CustomButton>
      <CustomButton variant="blue" onClick={() => setLevel("korean")}>
        한국인
      </CustomButton>
    </div>
  );
};

export default LevelButton;
