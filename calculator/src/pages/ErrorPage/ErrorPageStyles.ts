import styled from 'styled-components';

const TIME = 0.5;
const HEIGHT = 100;
const WIDTH = 100;

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: ${HEIGHT}%;
  justify-content: center;
  width: ${WIDTH}%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 80px;
  margin-top: 20%;
  text-align: center;

  @media (max-width: 620px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 30px;
  text-align: center;
  text-decoration: underline;
  transition: all ${TIME}s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }

  @media (max-width: 620px) {
    font-size: 14px;
    padding: 0 5px;
  }
`;
