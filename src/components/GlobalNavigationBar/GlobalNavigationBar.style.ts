import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export interface StyledLinkProps {
  $active: boolean;
}

export const Navigate = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const HomeLinkContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const CalculatorLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  background-color: #ffcc80;
  ${({ $active }) => {
    if ($active) {
      return css`
        cursor: pointer;
        &:hover {
          color: #ff9800;
        }
      `;
    } else {
      return css`
        color: #c69c8f;
        cursor: not-allowed;
        pointer-events: none;
      `;
    }
  }}
`;
