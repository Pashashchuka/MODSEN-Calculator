import styled from 'styled-components';

const BORDER = 10;
const HEIGHT = 515;
const WIDTH = 500;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 60%;

  @media (max-width: 884px) {
    width: 100%;
  }
`;

export const Block = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.containerBg};
  border: ${BORDER}px solid ${({ theme }) => theme.containerBorder};
  border-radius: 35px;
  box-shadow: 4px 5px 6px 0px ${({ theme }) => theme.darkShadow};
  display: flex;
  flex-direction: column;
  height: ${HEIGHT}px;
  max-width: ${WIDTH}px;
  width: 100%;

  @media (max-width: 538px) {
    height: 300px;
    max-width: 290px;
    width: 100%;
  }
`;
