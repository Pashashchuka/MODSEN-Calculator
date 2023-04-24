import styled from 'styled-components';

const WIDTH = 260;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-width: ${WIDTH}px;
  width: 100%;

  @media (max-width: 538px) {
    gap: 7px;
    max-width: 140px;
    width: 100%;
  }
`;
