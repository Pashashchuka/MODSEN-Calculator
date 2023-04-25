import styled, { keyframes } from 'styled-components';

const TIME = 0.5;
const HEIGHT = 100;
const WIDTH = 100;

const glitch = keyframes`
{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}`;

const glitchTop = keyframes`
{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}`;

const glitchBottom = keyframes`
{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}`;

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
  animation: ${glitch} 1s linear infinite;
  color: ${({ theme }) => theme.text};
  font-size: 70px;
  margin-top: 20%;
  text-align: center;

  &:before,
  &:after {
    content: '404';
    position: absolute;
    left: 0;
  }

  &:before {
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &:after {
    animation: ${glitchBottom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

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
