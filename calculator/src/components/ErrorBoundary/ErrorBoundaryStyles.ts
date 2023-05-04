import styled, { keyframes } from 'styled-components';

const blink = (errorShadow: string) => keyframes`
{
  0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; 
    text-shadow: 0px 4px 32p ${errorShadow};
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% { 
    opacity:0.4; text-shadow: none; 
  }
}`;

export const Wrapper = styled.h3`
  align-items: center;
  color: ${({ theme }) => theme.errorColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;

export const ErrorMessage = styled.p`
  font-family: 'Monoton', cursive;
  font-size: 75px;
  font-weight: 400;
  text-shadow: 0px 4px 32px ${({ theme }) => theme.errorShadow};
  text-transform: uppercase;
`;

export const BlinkLetter = styled.span`
  animation: ${({ theme }) => blink(theme.errorShadow)} 10s linear infinite;
`;
