import React, { useEffect } from 'react';
import useSound from 'use-sound';

import { useTimerContext } from '../contexts';
import { useTimer } from '../hooks';
import { PadTime } from '../utils';

import { Time, StartStopButton } from '../elements';
import alarm from '../utils/alarm.mp3';

export default function PomodoroTimer() {
  const [play, { stop }] = useSound(alarm);
  const { pomodoro } = useTimerContext();
  const { time, setTime, start, pause, isRunning, reset } = useTimer({
    initialTime: pomodoro * 60,
    onTimeOver: () => {
      reset();
      play();

      setTimeout(() => {
        stop();
      }, 1500);
    },
  });
  useEffect(() => {
    setTime(pomodoro * 60);
    pause();
  }, [pomodoro]);

  const minutes = PadTime(Math.floor(time / 60));
  const seconds = PadTime(time - minutes * 60);

  useEffect(() => {
    if (isRunning) document.title = `${minutes}:${seconds} - Time for break`;
    else document.title = 'Pomodoro App';
  }, [minutes, seconds]);

  return (
    <>
      <Time>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </Time>
      {isRunning ? (
        <StartStopButton onClick={pause} active>
          Stop
        </StartStopButton>
      ) : (
        <StartStopButton onClick={start}>Start</StartStopButton>
      )}
    </>
  );
}
