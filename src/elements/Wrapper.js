import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #edf2f7;
  ${(props) =>
    props.primary &&
    css`
      background: rgb(240, 91, 86);
      color: #fff;
    `}
`;
