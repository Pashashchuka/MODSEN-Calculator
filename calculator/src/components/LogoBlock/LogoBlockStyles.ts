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
`;

export const Firm = styled.h1`
  color: ${({ theme }) => theme.logoText};
  font-size: 30px;
  text-transform: uppercase;
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: ${WIDTH}px;
`;

export const Series = styled.p`
  color: ${({ theme }) => theme.logoText};
  font-size: 20px;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.logoText};
  height: 2px;
  width: ${WIDTH}px;
`;

export const Power = styled.p`
  color: ${({ theme }) => theme.logoText};
  font-size: 13px;
  text-transform: uppercase;
`;
