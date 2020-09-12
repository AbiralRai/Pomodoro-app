import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Timer from './Timer';
import Progress from './Progress';
import { useTimerContext } from '../contexts';

import { Wrapper, Container } from '../elements';

const Main = styled.main`
  display: flex;
  flex-direction: column;

  transition: all 1.2s ease-in 1s;
`;

export default function Pomodoro() {
  const { selectedTimerBg } = useTimerContext();
  let bg = selectedTimerBg;
  useEffect(() => {
    bg = selectedTimerBg;
  }, [selectedTimerBg]);

  return (
    <Wrapper bg={bg}>
      <Container>
        <Header />
        <Main>
          <Progress />
          <Timer />
        </Main>
      </Container>
    </Wrapper>
  );
}
