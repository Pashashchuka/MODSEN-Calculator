import styled from 'styled-components';

const BORDER = 1;
const HEIGHT = 450;
const WIDTH = 350;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: ${WIDTH}px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  margin: 10px 0;
  text-align: center;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.text};
  border-radius: 20px;
  height: 4px;
  width: 100%;
`;

export const HistoryBlock = styled.div`
  max-height: ${HEIGHT}px;
  overflow: auto;

  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.text};
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.containerBg};
    // border: ${BORDER}px solid ${({ theme }) => theme.text};
    border-radius: 5px;
    box-shadow: inset -3px -3px 3px 0 ${({ theme }) => theme.containerBg},
      inset 3px 3px 3px 0 ${({ theme }) => theme.text};
  }
`;
