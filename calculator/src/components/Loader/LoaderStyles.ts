import styled, { keyframes } from 'styled-components';

const animateC = keyframes`
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
`;

const animate = keyframes`
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
`;

export const Wrapper = styled.div`
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: #006eff;
  height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  left: 50%;
  letter-spacing: 4px;
  line-height: 150px;
  position: absolute;
  top: 50%;
  text-align: center;
  text-shadow: 0 0 10px #006eff;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  width: 150px;

  &:before {
    animation: ${animateC} 2s linear infinite;
    border: 3px solid transparent;
    border-radius: 50%;
    border-right: 3px solid #006eff;
    border-top: 3px solid #006eff;
    content: '';
    height: 100%;
    left: -3px;
    position: absolute;
    top: -3px;
    width: 100%;
  }
`;

export const Element = styled.span`
  animation: ${animate} 2s linear infinite;
  background: transparent;
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  top: calc(50% - 2px);
  transform-origin: left;
  width: 50%;

  :before {
    content: '';
    background: #006eff;
    border-radius: 50%;
    box-shadow: 0 0 20px #006eff;
    height: 16px;
    position: absolute;
    right: -8px;
    top: -6px;
    width: 16px;
  }
`;
