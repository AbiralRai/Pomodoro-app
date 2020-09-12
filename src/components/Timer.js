import React, { useState } from 'react';

import { useTimerContext } from '../contexts';
import PomodoroTimer from './PomodoroTimer';
import ShortBreakTimer from './ShortBreakTimer';
import LongBreakTimer from './LongBreakTimer';
import TimerButton from './TimerButton';

import { TimerContainer, ButtonStack } from '../elements';

const buttonTitles = ['Pomodoro', 'Short Break', 'Long Break'];

export default function TimerComponent() {
  const [selectedTimer, setSelectedTimer] = useState('Pomodoro');
  const { setSelectedTimerBg } = useTimerContext();

  function handleButton(title) {
    if (title === 'Pomodoro') {
      setSelectedTimer(title);
      setSelectedTimerBg(title);
    } else if (title === 'Short Break') {
      setSelectedTimer(title);
      setSelectedTimerBg(title);
    } else if (title === 'Long Break') {
      setSelectedTimer(title);
      setSelectedTimerBg(title);
    }
  }

  return (
    <TimerContainer>
      <ButtonStack>
        {buttonTitles.map((title, index) => (
          <TimerButton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={title}
            isActive={title === selectedTimer}
            handleButton={handleButton}
          />
        ))}
      </ButtonStack>
      {selectedTimer === 'Pomodoro' && <PomodoroTimer />}
      {selectedTimer === 'Short Break' && <ShortBreakTimer />}
      {selectedTimer === 'Long Break' && <LongBreakTimer />}
    </TimerContainer>
  );
}
