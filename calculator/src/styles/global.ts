import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.body};
  height: 100%;
`;

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100vh;
  width: 100%;
}

#root {
  height: 100%;
  width: 100%;
}
`;
