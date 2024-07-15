import styled, { css, keyframes } from "styled-components";

const animateLeft = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(100px) rotate(5deg);
    opacity: 0;
  }
  5% {
    transform: translate(-50%, -50%) translateY(50px) rotate(0deg);
    opacity: 0.3;
    border-radius: 0;
  }
  60%{
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) translateY(-1000px) rotate(-350deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

const animateRight = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(100px) rotate(-5deg);
    opacity: 0;
  }
  5% {
    transform: translate(-50%, -50%) translateY(50px) rotate(0deg);
    opacity: 0.3;
    border-radius: 0;
  }
  60%{
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) translateY(-1000px) rotate(350deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

export const Area = styled.div`
  z-index: -1;
  background: #ffe5b4; // 라이트
  /* background: #4e342e; // 다크 */
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    position: absolute;
    display: block;
    list-style: none;
    bottom: -150px;

    ${() => css`
      &:nth-child(odd) {
        animation: ${animateRight} 30s linear infinite;
      }
      &:nth-child(even) {
        animation: ${animateLeft} 30s linear infinite;
      }
    `}

    &:nth-child(1) {
      left: 25%;
      animation-delay: 0s 0s;
      animation-duration: 30s;
    }
    &:nth-child(2) {
      left: 1%;
      background-size: 100%;
      animation-delay: 0s 2s;
      animation-duration: 15s;
    }
    &:nth-child(3) {
      left: 70%;
      animation-delay: 0s 4s;
      animation-duration: 18s;
    }
    &:nth-child(4) {
      left: 40%;
      animation-delay: 0s 0s;
      animation-duration: 19s;
    }
    &:nth-child(5) {
      left: 65%;
      animation-delay: 0s 0s;
      animation-duration: 16s;
    }
    &:nth-child(6) {
      left: 75%;
      animation-delay: 0s 3s;
      animation-duration: 21s;
    }
    &:nth-child(7) {
      left: 35%;
      animation-delay: 0s 7s;
      animation-duration: 20s;
    }
    &:nth-child(8) {
      left: 50%;
      animation-delay: 0s 15s;
      animation-duration: 45s;
    }
    &:nth-child(9) {
      left: 20%;
      animation-delay: 0s 2s;
      animation-duration: 35s;
    }
    &:nth-child(10) {
      left: 85%;
      animation-delay: 0s 3s;
      animation-duration: 23s;
    }
    &:nth-child(11) {
      left: 50%;
      animation-delay: 0s 4s;
      animation-duration: 20s;
    }
    &:nth-child(12) {
      left: 66%;
      animation-delay: 0s 5s;
      animation-duration: 16s;
    }
    &:nth-child(13) {
      left: 40%;
      animation-delay: 0s 2s;
      animation-duration: 20s;
    }
    &:nth-child(14) {
      left: 80%;
      animation-delay: 0s 3s;
      animation-duration: 30s;
    }
    &:nth-child(15) {
      left: 11%;
      animation-delay: 0s 1s;
      animation-duration: 30s;
    }
    &:nth-child(16) {
      left: 20%;
      animation-delay: 0s 1s;
      animation-duration: 25s;
    }
    &:nth-child(17) {
      left: 90%;
      animation-delay: 0s 1s;
      animation-duration: 18s;
    }
    &:nth-child(18) {
      left: 95%;
      animation-delay: 0s 1s;
      animation-duration: 35s;
    }
    &:nth-child(19) {
      left: 55%;
      animation-delay: 0s 1s;
      animation-duration: 23s;
    }
    &:nth-child(20) {
      left: 25%;
      animation-delay: 0s 0s;
      animation-duration: 30s;
    }
    &:nth-child(21) {
      left: 3%;
      background-size: 100%;
      animation-delay: 0s 2s;
      animation-duration: 15s;
    }
    &:nth-child(22) {
      left: 78%;
      animation-delay: 0s 4s;
      animation-duration: 18s;
    }
    &:nth-child(23) {
      left: 46%;
      animation-delay: 0s 0s;
      animation-duration: 19s;
    }
    &:nth-child(24) {
      left: 63%;
      animation-delay: 0s 0s;
      animation-duration: 16s;
    }
    &:nth-child(25) {
      left: 79%;
      animation-delay: 0s 3s;
      animation-duration: 21s;
    }
    &:nth-child(26) {
      left: 32%;
      animation-delay: 0s 7s;
      animation-duration: 20s;
    }
    &:nth-child(27) {
      left: 47%;
      animation-delay: 0s 15s;
      animation-duration: 45s;
    }
    &:nth-child(28) {
      left: 23%;
      animation-delay: 0s 2s;
      animation-duration: 35s;
    }
    &:nth-child(29) {
      left: 88%;
      animation-delay: 0s 3s;
      animation-duration: 23s;
    }
    &:nth-child(30) {
      left: 53%;
      animation-delay: 0s 4s;
      animation-duration: 20s;
    }
    &:nth-child(31) {
      left: 61%;
      animation-delay: 0s 5s;
      animation-duration: 16s;
    }
    &:nth-child(32) {
      left: 36%;
      animation-delay: 0s 2s;
      animation-duration: 20s;
    }
    &:nth-child(33) {
      left: 76%;
      animation-delay: 0s 3s;
      animation-duration: 30s;
    }
    &:nth-child(34) {
      left: 9%;
      animation-delay: 0s 1s;
      animation-duration: 30s;
    }
    &:nth-child(35) {
      left: 22%;
      animation-delay: 0s 1s;
      animation-duration: 25s;
    }
    &:nth-child(36) {
      left: 84%;
      animation-delay: 0s 1s;
      animation-duration: 18s;
    }
    &:nth-child(37) {
      left: 90%;
      animation-delay: 0s 1s;
      animation-duration: 35s;
    }
    &:nth-child(38) {
      left: 50%;
      animation-delay: 0s 1s;
      animation-duration: 23s;
    }
  }
`;
