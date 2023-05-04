import styled from 'styled-components';

const TIME = 0.4;
const BORDER = 1;
const HEIGHT = 50;
const WIDTH = 220;

export const Select = styled.select`
  background: ${({ theme }) => theme.background};
  border: ${BORDER}px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 20px;
  height: ${HEIGHT}px;
  padding: 10px;
  transition: all ${TIME}s ease-in-out;
  width: ${WIDTH}px;

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

export const SelectItem = styled.option``;
