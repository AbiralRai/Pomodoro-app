import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #edf2f7;
  transition: 0.5s all ease-out;
  color: #fff;
  padding: 0 10px;

  ${(props) =>
    props.bg === 'Pomodoro' &&
    css`
      background: rgb(240, 91, 86);
    `}
  ${(props) =>
    props.bg === 'Short Break' &&
    css`
      background: rgb(76, 166, 169);
    `}
  ${(props) =>
    props.bg === 'Long Break' &&
    css`
      background: rgb(73, 143, 193);
    `}

  .startStopBtn {
    ${(props) =>
      props.bg === 'Long Break' &&
      css`
        color: rgb(73, 143, 193);
      `}
    ${(props) =>
      props.bg === 'Short Break' &&
      css`
        color: rgb(76, 166, 169);
      `}
  }
`;
