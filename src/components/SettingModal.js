import React, { useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import { useTimerContext } from '../contexts';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Close,
  ModalRow,
  ModalSubTitle,
  ModalInputGroup,
  ModalInputBox,
  ModalInputLabel,
  ModalInput,
  ModalFooter,
  ModalDone,
} from '../elements';

export default function SettingModal({ isModalActive, setModal }) {
  const modalRef = useRef();
  const { pomodoro, setPomodoro, shortB, setShortB, longB, setLongB } = useTimerContext();

  // close the modal if we click outside of it
  useOnClickOutside(modalRef, () => setModal(false));
  return (
    <ModalOverlay isOpen={isModalActive}>
      <Modal isOpen={isModalActive} ref={modalRef}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Timer Setting</ModalTitle>
            <Close onClick={() => setModal(false)} />
          </ModalHeader>

          <ModalRow>
            <ModalSubTitle>Time (minutes)</ModalSubTitle>
            <ModalInputGroup>
              <ModalInputBox>
                <ModalInputLabel>Pomodoro</ModalInputLabel>
                <ModalInput
                  type="number"
                  value={pomodoro}
                  onChange={(e) => setPomodoro(e.target.value)}
                />
              </ModalInputBox>
              <ModalInputBox>
                <ModalInputLabel>Short Break</ModalInputLabel>
                <ModalInput
                  type="number"
                  value={shortB}
                  onChange={(e) => setShortB(e.target.value)}
                />
              </ModalInputBox>
              <ModalInputBox>
                <ModalInputLabel>Long Break</ModalInputLabel>
                <ModalInput
                  type="number"
                  value={longB}
                  onChange={(e) => setLongB(e.target.value)}
                />
              </ModalInputBox>
            </ModalInputGroup>
          </ModalRow>
        </ModalContent>
        <ModalFooter>
          <ModalDone onClick={() => setModal(false)}>OK</ModalDone>
        </ModalFooter>
      </Modal>
    </ModalOverlay>
  );
}
