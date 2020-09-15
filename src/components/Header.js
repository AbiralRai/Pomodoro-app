import React, { useState } from 'react';
import styled from 'styled-components';
import { Settings } from '@styled-icons/evaicons-solid';

import SettingModal from './SettingModal';

import { Button, Logo, Header } from '../elements';

const SettingBtn = styled(Button)`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;

  @media (max-width: 420px) {
    .hideSetting {
      display: none;
    }
  }
`;
const SettingIcon = styled(Settings)`
  height: 1.5rem;
  color: #fff;
  margin-right: 4px;
  margin-left: -4px;
  @media (max-width: 420px) {
    margin: 0px;
  }
`;

export default function HeaderComponent() {
  const [isModalActive, setModal] = useState(false);
  return (
    <>
      <Header>
        <Logo>Pomodoro</Logo>
        <SettingBtn onClick={() => setModal(true)}>
          <div>
            <SettingIcon />
          </div>
          <div className="hideSetting">Setting</div>
        </SettingBtn>
      </Header>
      <SettingModal isModalActive={isModalActive} setModal={setModal} />
    </>
  );
}
