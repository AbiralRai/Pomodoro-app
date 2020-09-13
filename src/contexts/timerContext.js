import React, { useState, createContext, useContext } from 'react';

const TimerContext = createContext();

export const useTimerContext = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortB, setShortB] = useState(5);
  const [longB, setLongB] = useState(15);
  const [selectedTimerBg, setSelectedTimerBg] = useState('Pomodoro');
  const [progress, setProgress] = useState(0);
  // (100/setSec) * (setSec - currentSec = secPass ) => 100/60 * (60-57=3) = 5% width

  return (
    <TimerContext.Provider
      value={{
        pomodoro,
        setPomodoro,
        shortB,
        setShortB,
        longB,
        setLongB,
        selectedTimerBg,
        setSelectedTimerBg,
        progress,
        setProgress,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
