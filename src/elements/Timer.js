import styled, { css } from 'styled-components';

export const TimerContainer = styled.div`
  max-width: 520px;
  width: 100%;
  text-align: center;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0px 30px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
`;

export const ButtonStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TimerButton = styled.button`
  display: inline-block;
  padding: 4px 14px;
  margin: none;
  color: white;
  background: ${(props) => (props.isActive ? 'rgba(0, 0, 0, 0.15)' : 'transparent')};
  border: none;
  border-radius: 4px;
  height: 28px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  /* opacity: 1; */
  box-shadow: none;

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Time = styled.div`
  font-size: 120px;
  font-weight: bold;
  margin-top: 20px;
`;

export const StartStopButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  box-shadow: rgb(235, 235, 235) 0px 6px 0px;
  font-size: 2rem;
  height: 55px;
  color: rgb(240, 91, 86);
  font-weight: bold;
  width: 200px;
  background-color: white;
  transition: color 0.5s ease-in-out 0s;

  ${(props) =>
    props.active &&
    css`
      transform: translateY(6px);
      box-shadow: none;
    `}

  &:active {
    transform: translateY(6px);
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isRunning &&
    css`
      transform: translateY(6px);
      box-shadow: none;
    `}
`;
