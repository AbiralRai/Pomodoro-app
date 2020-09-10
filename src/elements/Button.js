import styled, { css } from 'styled-components';
import { elevation } from '../utils';

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: white;
  background-color: transparent;
  outline: none;
  transition: 0.3s ease box-shadow;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }
  &:active {
    ${elevation[1]};
  }
  ${({ size }) => {
    if (size === 'sm') {
      return css`
        font-size: 1.1rem;
        padding: 5px 10px;
      `;
    }
  }}
`;
