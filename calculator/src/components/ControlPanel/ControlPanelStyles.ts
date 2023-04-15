import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'button_1 center button_5'
    'button_2 center button_6'
    'button_3 center button_7'
    'button_4 center button_8';
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  padding: 30px 0px;
`;
