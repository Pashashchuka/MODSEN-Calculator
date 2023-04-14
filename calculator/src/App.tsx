import React, { Component } from 'react';

import GlobalStyles, { Wrapper } from './styles/global';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyles />
      </Wrapper>
    );
  }
}

export default App;
