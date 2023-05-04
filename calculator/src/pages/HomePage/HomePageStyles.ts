import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 30px;

  @media (max-width: 884px) {
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
`;
