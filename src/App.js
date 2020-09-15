import React from 'react';

import Pomodoro from './components/Pomodoro';
import Footer from './components/Footer';
import { TimerProvider } from './contexts';

import GlobalStyle from './Global';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <TimerProvider>
        <Pomodoro />
      </TimerProvider>
      <Footer />
    </div>
  );
}
