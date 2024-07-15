import styled from "styled-components";

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  backdrop-filter: blur(25px);
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin: 2rem;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 600px;
  min-width: 500px;
  min-height: 500px;
  /* position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
