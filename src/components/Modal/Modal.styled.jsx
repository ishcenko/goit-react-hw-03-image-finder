import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 98, 100, 0.8);
  z-index: 999;
`;

export const ModalWindow = styled.div`
  margin-bottom: 50px;
  max-width: calc(86vw - 48px);
  max-height: calc(86vh - 24px);
`;
