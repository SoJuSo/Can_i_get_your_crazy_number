import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <button
      {...props}
      style={{ background: "none", border: "none", padding: "0", cursor: "pointer" }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
