import styled from 'styled-components';

const TIME = 0.5;
const HEIGHT = 80;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${HEIGHT}px;
  padding: 0 120px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const LinkBLock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  position: relative;
  text-decoration: none;

  &:before {
    background-color: ${({ theme }) => theme.text};
    bottom: -10%;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: width ${TIME}s;
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
