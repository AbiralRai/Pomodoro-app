import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: white;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    box-shadow: none;
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
