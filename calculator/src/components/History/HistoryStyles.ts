import styled from 'styled-components';

const BORDER = 1;
const HEIGHT = 450;
const WIDTH = 350;
const TIME = 0.3;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: ${WIDTH}px;
  width: 100%;

  @media (max-width: 538px) {
    width: 280px;
  }
`;

export const TitleBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  margin: 10px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CloseBlock = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: all ${TIME}s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }

  &.active {
    transform: rotate(-90deg);
  }
`;

export const CloseLine = styled.div`
  background-color: ${({ theme }) => theme.text};
  border-radius: 10px;
  height: 2px;
  width: 20px;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.text};
  border-radius: 20px;
  height: 4px;
  width: 100%;
`;

export const HistoryItem = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin: 20px 0;
  text-align: left;
`;

export const HistoryBlock = styled.div`
  max-height: ${HEIGHT}px;
  overflow: auto;
  opacity: 0;
  transition: all ${TIME}s ease-in-out;

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.text};
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.containerBg};
    border: ${BORDER}px solid ${({ theme }) => theme.text};
    border-radius: 5px;
    box-shadow: inset -3px -3px 3px 0 ${({ theme }) => theme.containerBg},
      inset 3px 3px 3px 0 ${({ theme }) => theme.text};
  }

  &.active {
    opacity: 1;
  }
`;
