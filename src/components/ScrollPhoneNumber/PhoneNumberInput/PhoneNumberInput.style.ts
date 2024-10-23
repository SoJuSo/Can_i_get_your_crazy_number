import { styled } from "styled-components";

export const SliderInput = styled.input<{ $level: string }>`
  margin: 2rem 0;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  /* WebKit 브라우저 */
  &::-webkit-slider-thumb {
    opacity: 0.9;
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: teal;
    border: 1px solid white;
    cursor: pointer;
    margin-top: -0.2875rem;
    transition:
      background-color 0.2s,
      transform 0.2s;

    &:hover {
      opacity: 1;
      background-color: blue;
    }
  }

  /* Firefox 브라우저 */
  &::-moz-range-thumb {
    opacity: 0.9;
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: teal;
    border: 1px solid white;
    cursor: pointer;
    margin-top: -0.2875rem;
    transition:
      background-color 0.2s,
      transform 0.2s;

    &:hover {
      opacity: 1;
      background-color: blue;
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #80e27e, #ff9800, #f44336, #2196f3);
  }

  &::-moz-range-track {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #80e27e, #ff9800, #f44336, #2196f3);
  }

  width: ${({ $level }) =>
    $level === "easy"
      ? "300px"
      : $level === "korean"
        ? "50px"
        : $level === "hard"
          ? "100px"
          : "200px"};
`;
