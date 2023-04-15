import React, { Component } from 'react';

import { Wrapper, Title, Line, HistoryBlock } from './HistoryStyles';

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Title>History</Title>
        <Line />
        <HistoryBlock></HistoryBlock>
      </Wrapper>
    );
  }
}

export default History;
