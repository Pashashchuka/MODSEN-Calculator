import styled from 'styled-components';

const HEIGHT = 80;
const WIDTH = 115;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${HEIGHT}px;
  gap: 100px;
  width: 100%;

  @media (max-width: 538px) {
    height: 55px;
  }
`;

export const Firm = styled.h1`
  color: ${({ theme }) => theme.logoText};
  font-size: 30px;
  text-transform: uppercase;

  @media (max-width: 538px) {
    font-size: 15px;
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${WIDTH}px;

  @media (max-width: 538px) {
    width: 80px;
  }
`;

export const Series = styled.p`
  color: ${({ theme }) => theme.logoText};
  font-size: 20px;

  @media (max-width: 538px) {
    font-size: 13px;
  }
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.logoText};
  height: 2px;
  width: ${WIDTH}px;

  @media (max-width: 538px) {
    width: 80px;
  }
`;

export const Power = styled.p`
  color: ${({ theme }) => theme.logoText};
  font-size: 13px;
  text-transform: uppercase;

  @media (max-width: 538px) {
    font-size: 8px;
  }
`;
