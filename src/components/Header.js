import React, { useState } from 'react';
import styled from 'styled-components';

import SettingModal from './SettingModal';

import { Button, Logo, Header } from '../elements';

const SettingBtn = styled(Button)`
  background-color: rgba(255, 255, 255, 0.2);
`;
export default function HeaderComponent() {
  const [isModalActive, setModal] = useState(false);
  return (
    <>
      <Header>
        <Logo>Pomodoro</Logo>
        <SettingBtn onClick={() => setModal(true)}>Setting</SettingBtn>
      </Header>
      <SettingModal isModalActive={isModalActive} setModal={setModal} />
    </>
  );
}
