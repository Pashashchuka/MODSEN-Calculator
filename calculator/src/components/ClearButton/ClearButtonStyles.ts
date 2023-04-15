import styled from 'styled-components';

const TIME = 0.4;
const BORDER = 1;
const WIDTH = 220;

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.background};
  border: ${BORDER}px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  position: relative;
  transition: all ${TIME}s ease-in-out;
  width: ${WIDTH}px;

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
  }
`;
