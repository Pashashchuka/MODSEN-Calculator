import styled from 'styled-components';

const TIME = 0.3;
const BORDER = 1;
const HEIGHT = 50;
const WIDTH = 80;

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.background};
  box-shadow: 3px 3px 3px 0px ${({ theme }) => theme.darkShadow};
  border: ${BORDER}px solid ${({ theme }) => theme.blackColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.buttonColor};
  display: block;
  font-size: 30px;
  height: ${HEIGHT}px;
  justify-self: center;
  transition: all ${TIME}s ease-in-out;
  width: ${WIDTH}px;

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
  }
  }

  &.operation {
    background: ${({ theme }) => theme.operation};
  }

  &.function {
    background: ${({ theme }) => theme.function};
  }

  &.number {
    background: ${({ theme }) => theme.number};
  }
`;
