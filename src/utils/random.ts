import { colors } from "../constants/style";

export const selectRandomColors = (): [string, string] => {
  const shuffled = [...colors].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
};

export const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
};

// 1,2,3
export const chooseRandomOption = (): number => {
  const randomNumber = Math.random();
  const randomIndex = Math.floor(randomNumber * 5);
  return randomIndex + 1;
};
