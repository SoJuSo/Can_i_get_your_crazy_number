import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledLabel = styled.label<{ $isActive: boolean }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #707070;
  position: relative;
  cursor: pointer;

  &::after {
    content: ${({ $isActive }) => ($isActive ? "'✔'" : "''")};
    font-size: 25px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    color: #000;
  }
`;

const CheckboxContainer = styled.p`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface CheckboxProps {
  id: string;
  label: string;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const Checkbox = ({ id, label, isActive, setIsActive }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>
        {label} {isActive ? "동작!" : "안됌!"}
      </span>
      <HiddenCheckbox id={id} checked={isActive} onChange={() => setIsActive(!isActive)} />
      <StyledLabel $isActive={isActive} htmlFor={id} />
    </CheckboxContainer>
  );
};

export default Checkbox;
