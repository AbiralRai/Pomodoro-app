import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useTimerContext } from '../contexts';

const ProgressBar = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin-bottom: 40px;
  transition: background-color 0.5s ease-in-out 0s;
`;

const Progress = styled.div`
  height: 3px;
  background-color: white;
  transform: translateY(-1px);
  border-radius: 100px;
  width: ${(props) => (props.remaining ? props.remaining : 0)}%;
`;

export default function ProgressComponent() {
  const { progress } = useTimerContext();
  let progressTime = progress;
  useEffect(() => {
    progressTime = progress;
  }, [progress]);
  return (
    <ProgressBar>
      <Progress remaining={progressTime} />
    </ProgressBar>
  );
}
