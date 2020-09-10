import React from 'react';

import Pomodoro from './components/Pomodoro';

import GlobalStyle from './Global';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Pomodoro />
    </div>
  );
}
