import React, { useEffect } from 'react';
import useSound from 'use-sound';

import { useTimerContext } from '../contexts';
import { useTimer } from '../hooks';
import { PadTime, ProgressWidth } from '../utils';

import { Time, StartStopButton } from '../elements';
import alarm from '../utils/kichen-timer.mp3';
import click from '../utils/button-press.wav';

export default function ShortBreakTimer() {
  const [play, { stop }] = useSound(alarm);
  const [playClick] = useSound(click);
  const { shortB, setProgress } = useTimerContext();
  const initialTime = shortB * 60;
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
    setTime(shortB * 60);
    pause();
  }, [shortB]);

  useEffect(() => {
    setProgress(ProgressWidth(initialTime, time));
  }, [time]);

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
        <StartStopButton
          className="startStopBtn"
          onClick={() => {
            pause();
            playClick();
          }}
          active
        >
          Stop
        </StartStopButton>
      ) : (
        <StartStopButton
          className="startStopBtn"
          onClick={() => {
            start();
            playClick();
          }}
        >
          Start
        </StartStopButton>
      )}
    </>
  );
}
