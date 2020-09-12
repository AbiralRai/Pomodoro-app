import { useCallback, useEffect, useState } from 'react';

export const useTimer = ({
  initialTime = 0,
  interval = 1000,
  step = 1,
  endTime = -1,
  onTimeOver,
  onTimeUpdate,
}) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);

  const reset = useCallback(() => {
    setIsRunning(false);
    setIsTimeOver(false);
    setTime(initialTime);
  }, [initialTime]);

  const start = useCallback(() => {
    if (isTimeOver) {
      reset();
    }

    setIsRunning(true);
  }, [reset, isTimeOver]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (typeof onTimeUpdate === 'function') {
      onTimeUpdate(time);
    }
  }, [time]);

  useEffect(() => {
    if (isRunning && time === endTime) {
      setIsRunning(false);
      setIsTimeOver(true);

      if (typeof onTimeOver === 'function') {
        onTimeOver();
      }
    }
  }, [endTime, onTimeOver, time, isRunning]);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((previousTime) => previousTime - step);
      }, interval);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, step, interval]);

  return { isRunning, pause, reset, start, time, setTime };
};
