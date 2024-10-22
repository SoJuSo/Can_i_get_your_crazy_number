import styled, { css, keyframes } from "styled-components";

const animateLeft = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(10vh) rotate(5deg);
  }
  5% {
    transform: translate(-50%, -50%) translateY(5vh) rotate(0deg);
    opacity: 0.3;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) translateY(-95vh) rotate(-350deg);
    opacity: 0;
  }
`;

const animateRight = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(10vh) rotate(-5deg);
  }
  5% {
    transform: translate(-50%, -50%) translateY(5vh) rotate(0deg);
    opacity: 0.3;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) translateY(-95vh) rotate(350deg);
    opacity: 0;
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
    bottom: -15vh;
    opacity: 0.3;

    ${() => css`
      &:nth-child(4n + 1) {
        animation: ${animateRight} 20s linear infinite;
      }
      &:nth-child(4n + 2) {
        animation: ${animateLeft} 35s linear infinite;
      }
      &:nth-child(4n + 3) {
        animation: ${animateRight} 30s linear infinite;
      }
      &:nth-child(4n) {
        animation: ${animateLeft} 25s linear infinite;
      }
    `}

    &:nth-child(1) {
      left: 25%;
      animation-delay: 2s;
    }
    &:nth-child(2) {
      left: 1%;
      animation-delay: 4s;
    }
    &:nth-child(3) {
      left: 70%;
      animation-delay: 8s;
    }
    &:nth-child(4) {
      left: 40%;
      animation-delay: 15s;
    }
    &:nth-child(5) {
      left: 65%;
      animation-delay: 8s;
    }
    &:nth-child(6) {
      left: 75%;
      animation-delay: 6s;
    }
    &:nth-child(7) {
      left: 35%;
      animation-delay: 14s;
    }
    &:nth-child(8) {
      left: 50%;
      animation-delay: 15s;
    }
    &:nth-child(9) {
      left: 20%;
      animation-delay: 12s;
    }
    &:nth-child(10) {
      left: 85%;
      animation-delay: 8s;
    }
    &:nth-child(11) {
      left: 50%;
      animation-delay: 4s;
    }
    &:nth-child(12) {
      left: 66%;
      animation-delay: 5s;
    }
    &:nth-child(13) {
      left: 40%;
      animation-delay: 13s;
    }
    &:nth-child(14) {
      left: 80%;
      animation-delay: 10s;
    }
    &:nth-child(15) {
      left: 11%;
      animation-delay: 9s;
    }
    &:nth-child(16) {
      left: 20%;
      animation-delay: 8s;
    }
    &:nth-child(17) {
      left: 90%;
      animation-delay: 5s;
    }
    &:nth-child(18) {
      left: 95%;
      animation-delay: 11s;
    }
    &:nth-child(19) {
      left: 55%;
      animation-delay: 9s;
    }
    &:nth-child(20) {
      left: 25%;
      animation-delay: 5s;
    }
    &:nth-child(21) {
      left: 3%;
      animation-delay: 6s;
    }
    &:nth-child(22) {
      left: 78%;
      animation-delay: 7s;
    }
    &:nth-child(23) {
      left: 46%;
      animation-delay: 2s;
    }
    &:nth-child(24) {
      left: 63%;
      animation-delay: 9s;
    }
    &:nth-child(25) {
      left: 79%;
      animation-delay: 3s;
    }
    &:nth-child(26) {
      left: 32%;
      animation-delay: 7s;
    }
    &:nth-child(27) {
      left: 47%;
      animation-delay: 5s;
    }
    &:nth-child(28) {
      left: 23%;
      animation-delay: 4s;
    }
    &:nth-child(29) {
      left: 88%;
      animation-delay: 10s;
    }
    &:nth-child(30) {
      left: 53%;
      animation-delay: 8s;
    }
    &:nth-child(31) {
      left: 61%;
      animation-delay: 13s;
    }
    &:nth-child(32) {
      left: 36%;
      animation-delay: 11s;
    }
    &:nth-child(33) {
      left: 76%;
      animation-delay: 9s;
    }
    &:nth-child(34) {
      left: 9%;
      animation-delay: 7s;
    }
    &:nth-child(35) {
      left: 22%;
      animation-delay: 4s;
    }
    &:nth-child(36) {
      left: 84%;
      animation-delay: 5s;
    }
    &:nth-child(37) {
      left: 90%;
      animation-delay: 12s;
    }
    &:nth-child(38) {
      left: 50%;
      animation-delay: 10s;
    }
  }
`;
