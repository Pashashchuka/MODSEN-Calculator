import styled from 'styled-components';

const BORDER = 5;
const HEIGHT = 100;

export const DisplayBlock = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.displayColor};
  border-bottom: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  border-radius: 10px;
  border-left: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-right: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-top: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  display: flex;
  height: ${HEIGHT}px;
  justify-content: flex-end;
  overflow: hidden;
  padding-right: 5px;
  position: relative;
  width: 90%;

  &.active {
    display: none;
  }

  @media (max-width: 538px) {
    height: 60px;
  }
`;

export const DisplayErrorBlock = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.displayColor};
  border-bottom: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  border-radius: 10px;
  border-left: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-right: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-top: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  display: none;
  height: ${HEIGHT}px;
  justify-content: flex-end;
  overflow: hidden;
  padding-right: 5px;
  position: relative;
  width: 90%;

  &.active {
    display: flex;
  }

  @media (max-width: 538px) {
    height: 60px;
  }
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.displayNumbers};
  font-family: 'Big Shoulders Stencil Text', cursive;
  font-size: 75px;
  text-align: end;

  @media (max-width: 538px) {
    font-size: 50px;
  }
`;

export const Error = styled.p`
  bottom: 0;
  color: ${({ theme }) => theme.displayNumbers};
  font-family: 'Big Shoulders Stencil Text', cursive;
  font-size: 45px;
  left: 3%;
  position: absolute;

  @media (max-width: 538px) {
    font-size: 50px;
  }
`;
