import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 538px) {
    gap: 7px;
    margin-top: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 538px) {
    gap: 7px;
  }
`;

export const VerticalBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 538px) {
    gap: 7px;
  }
`;

export const HorizontalBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 538px) {
    gap: 7px;
  }
`;
