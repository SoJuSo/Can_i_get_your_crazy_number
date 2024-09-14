import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "orange" | "green" | "red" | "blue"; // 변형 추가
}

const CustomButton = React.memo(
  ({ children, variant = "default", ...props }: CustomButtonProps) => {
    const styles = {
      default: {
        background: "none",
        color: "#000", // 검은색 글씨
        border: "none",
        borderRadius: "8px",
        padding: "0",
        cursor: "pointer",
      },
      orange: {
        background: "#ff9800", // 진한 오렌지
        color: "#000", // 검은색 글씨
        border: "none",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "background 0.3s",
        fontWeight: "bold",
      },
      green: {
        background: "#80e27e", // 밝은 초록색
        color: "#3e2723", // 진한 갈색 글씨
        border: "none",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "background 0.3s",
        fontWeight: "bold",
      },
      red: {
        background: "#f44336", // 진한 빨간색
        color: "#000", // 검은색 글씨로 변경
        border: "none",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "background 0.3s",
        fontWeight: "bold",
      },
      blue: {
        background: "#2196f3", // 진한 파란색
        color: "#000", // 검은색 글씨로 변경
        border: "none",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "background 0.3s",
        fontWeight: "bold",
      },
    };

    const currentStyle = styles[variant] || styles.default; // 현재 스타일 선택

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      switch (variant) {
        case "orange":
          e.currentTarget.style.background = "#fb8c00"; // 다소 어두운 오렌지
          break;
        case "green":
          e.currentTarget.style.background = "#66bb6a"; // 다소 어두운 초록색
          break;
        case "red":
          e.currentTarget.style.background = "#d32f2f"; // 다소 어두운 빨간색
          break;
        case "blue":
          e.currentTarget.style.background = "#1976d2"; // 다소 어두운 파란색
          break;
        default:
          break;
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      switch (variant) {
        case "orange":
          e.currentTarget.style.background = "#ff9800"; // 진한 오렌지로 돌아감
          break;
        case "green":
          e.currentTarget.style.background = "#80e27e"; // 밝은 초록색으로 돌아감
          break;
        case "red":
          e.currentTarget.style.background = "#f44336"; // 진한 빨간색으로 돌아감
          break;
        case "blue":
          e.currentTarget.style.background = "#2196f3"; // 진한 파란색으로 돌아감
          break;
        default:
          break;
      }
    };

    return (
      <button
        {...props}
        style={currentStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );
  }
);

export default CustomButton;
