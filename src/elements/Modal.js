import styled, { css } from 'styled-components';

const grey = 'rgb(187, 187, 187);';

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2147483647;
  transition: all 0.2s ease-in 0s;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const Modal = styled.div`
  color: rgb(34, 34, 34);
  border-radius: 8px;
  background-color: white;
  position: relative;
  max-width: 400px;
  width: 95%;
  z-index: 21474836479;
  border-top: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
  margin: 20px auto auto;
  transition: all 0.2s ease-in 0s;
  transform: translateY(20px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(0px);
    `}
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 780px;
  margin: auto;
  padding: 20px 20px 0px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;

  svg {
    fill: rgb(187, 187, 187);
    transition: fill 0.3s ease;
    height: 1.3rem;

    &:hover {
      fill: rgb(85, 85, 85);
    }
  }
`;

export const ModalTitle = styled.h1`
  font-size: 1.3rem;
  color: rgb(187, 187, 187);
  text-transform: uppercase;
  font-weight: bold;
`;

export const ModalRow = styled.div`
  border-top: 1px solid rgba(182, 165, 166, 0.2);
  padding: 20px 0px;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalSubTitle = styled.span`
  color: rgb(85, 85, 85);
  font-weight: bold;
  font-size: 1rem;
`;

export const ModalInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ModalInputBox = styled.div`
  width: 98px;
`;

export const ModalInputLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  color: grey;
`;

export const ModalInput = styled.input`
  border-radius: 4px;
  background-color: rgb(239, 239, 239);
  font-size: 16px;
  padding: 10px;
  border: none;
  color: rgb(85, 85, 85);
  width: 100%;
`;

export const ModalFooter = styled.div`
  padding: 14px 20px;
  text-align: right;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgb(239, 239, 239);
`;

export const ModalDone = styled.button`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
  color: white;
  opacity: 0.9;
  font-size: 1rem;
  padding: 8px 12px;
  min-width: 70px;
  background-color: rgb(34, 34, 34);
  border: 2px solid rgb(34, 34, 34);
  display: inline-block;
`;
