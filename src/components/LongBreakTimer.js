import React, { useEffect } from 'react';
import useSound from 'use-sound';

import { useTimerContext } from '../contexts';
import { useTimer } from '../hooks';
import { PadTime } from '../utils';

import { Time, StartStopButton } from '../elements';
import alarm from '../utils/alarm.mp3';

export default function LongBreakTimer() {
  const [play, { stop }] = useSound(alarm);
  const { longB, setProgress } = useTimerContext();
  const initialTime = longB * 60;
  const { time, setTime, start, pause, isRunning, reset } = useTimer({
    initialTime,
    onTimeOver: () => {
      reset();
      play();

      setTimeout(() => {
        stop();
      }, 1500);
    },
  });

  useEffect(() => {
    setProgress(((100 / initialTime) * (initialTime - time)).toFixed(4));
  }, [time]);

  useEffect(() => {
    setTime(longB * 60);
    pause();
  }, [longB]);

  const minutes = PadTime(Math.floor(time / 60));
  const seconds = PadTime(time - minutes * 60);

  useEffect(() => {
    if (isRunning) document.title = `${minutes}:${seconds} - Time to work!`;
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
        <StartStopButton className="startStopBtn" onClick={pause} active>
          Stop
        </StartStopButton>
      ) : (
        <StartStopButton className="startStopBtn" onClick={start}>
          Start
        </StartStopButton>
      )}
    </>
  );
}
