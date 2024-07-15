import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export interface StyledLinkProps {
  $active: boolean;
}

export const Navigate = styled.nav`
  display: flex;
  gap: 1rem;
  z-index: 2;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  border: 1px solid;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  ${({ $active }) => {
    if ($active) {
      return css`
        cursor: pointer;
        &:hover {
          color: red;
        }
      `;
    } else {
      return css`
        color: gray;
        cursor: not-allowed;
        pointer-events: none;
      `;
    }
  }}
`;
