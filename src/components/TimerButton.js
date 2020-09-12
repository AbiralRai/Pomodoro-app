import React from 'react';

import { TimerButton as Button } from '../elements';

export default function TimerButton({ title, handleButton, isActive }) {
  return (
    <Button onClick={() => handleButton(title)} isActive={isActive}>
      {title}
    </Button>
  );
}
