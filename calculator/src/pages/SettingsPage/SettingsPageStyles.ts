import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 70%;
  width: 100%;
`;

export const Block = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
`;
