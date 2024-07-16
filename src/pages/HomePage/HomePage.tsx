import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% { transform: rotate(0deg); }
  5% { transform: rotate(.5deg); }
  10% { transform: rotate(0eg); }
  15% { transform: rotate(-0.5deg); }
  20% { transform: rotate(0deg); }
  25% { transform: rotate(0.5deg); }
  30% { transform: rotate(0eg); }
  35% { transform: rotate(-0.5deg); }
  40% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const Img = styled.img`
  transition: 0.5s;
  &:hover {
    scale: 1.03;
    animation: ${animate} 1s linear infinite;
  }
`;

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img src="./Logo.jpeg" width={300} height={300} style={{ borderRadius: ".5rem" }} />
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>😈This site will make you angry😈</p>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Challenge it!</p>
    </div>
  );
};

export default HomePage;
