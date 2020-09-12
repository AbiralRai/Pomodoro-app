import React, { useState } from 'react';

import { useTimerContext } from '../contexts';
import TimerButton from './TimerButton';

import { TimerContainer, ButtonStack, Time, StartStopButton } from '../elements';

const buttonTitles = ['Pomodoro', 'Short Break', 'Long Break'];

export default function TimerComponent() {
  const { time, setTime, start, pomodoro, shortB, longB } = useTimerContext();

  function padTime(pTime) {
    return pTime.toString().padStart(2, '0');
  }
  function handleButton(title) {
    if (title.replace(/\s/g, '').toLowerCase() === 'pomodoro') {
      setTime(pomodoro * 60);
    } else if (title.replace(/\s/g, '').toLowerCase() === 'shortbreak') {
      setTime(shortB * 60);
    } else if (title.replace(/\s/g, '').toLowerCase() === 'longbreak') {
      setTime(longB * 60);
    }
  }

  const minutes = padTime(Math.floor(time / 60));
  const seconds = padTime(time - minutes * 60);

  return (
    <TimerContainer>
      <ButtonStack>
        {buttonTitles.map((title, i) => (
          <TimerButton key={i} title={title} handleButton={handleButton} />
        ))}
      </ButtonStack>
      <Time>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </Time>
      <StartStopButton onClick={start}>Start</StartStopButton>
    </TimerContainer>
  );
}
