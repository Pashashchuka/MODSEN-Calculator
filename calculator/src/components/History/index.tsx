import React, { Component } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { Wrapper, Title, Line, HistoryBlock } from './HistoryStyles';

class History extends Component<WithTranslation, object> {
  constructor(props) {
    super(props);
  }

  render() {
    const { t: translate } = this.props;

    return (
      <Wrapper>
        <Title>{translate('history')}</Title>
        <Line />
        <HistoryBlock></HistoryBlock>
      </Wrapper>
    );
  }
}

export default withTranslation()(History);
