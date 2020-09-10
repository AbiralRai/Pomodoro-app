import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Timer from './Timer';
import Progress from './Progress';

import { Wrapper, Container } from '../elements';

const Main = styled.main`
  display: flex;
  flex-direction: column;

  transition: all 1.2s ease-in 1s;
`;

export default function Pomodoro() {
  return (
    <Wrapper primary>
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
