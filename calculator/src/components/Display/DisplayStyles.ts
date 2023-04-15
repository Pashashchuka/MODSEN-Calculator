import styled from 'styled-components';

const BORDER = 5;
const HEIGHT = 100;

export const DisplayBlock = styled.div`
  background-color: ${({ theme }) => theme.displayColor};
  border-bottom: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  border-radius: 10px;
  border-left: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-right: ${BORDER}px solid ${({ theme }) => theme.lightDisplayBorder};
  border-top: ${BORDER}px solid ${({ theme }) => theme.darkDisplayBorder};
  height: ${HEIGHT}px;
  overflow: hidden;
  padding-right: 5px;
  width: 90%;
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.displayNumbers};
  font-family: 'Big Shoulders Stencil Text', cursive;
  font-size: 80px;
  text-align: end;
`;
