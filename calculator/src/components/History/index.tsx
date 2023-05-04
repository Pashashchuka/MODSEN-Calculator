import React, { Component, Key } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { roundingResult } from 'utils/roundingResult';
import { getIsHiddenHistory } from 'store/selectors';
import { setIsHiddenHistory } from 'store/actions';
import { IHistory, TProps } from 'types/types';

import {
  HistoryBlock,
  HistoryItem,
  TitleBlock,
  CloseBlock,
  CloseLine,
  Wrapper,
  Title,
  Line
} from './HistoryStyles';

type THistoryState = {
  history: IHistory[];
  interval?: ReturnType<typeof setInterval>;
};

type THistoryProps = {
  isHiddenHistory?: boolean;
  t: (key: string, options?: object) => string;
  setIsHiddenHistory?: (payload: boolean) => void;
};

class History extends Component<THistoryProps, THistoryState> {
  constructor(props: THistoryProps) {
    super(props);
    this.state = {
      history: JSON.parse(localStorage.getItem('history')),
      interval: null
    };
  }

  changeState = () => {
    this.setState({
      history: JSON.parse(localStorage.getItem('history'))
    });
  };

  componentDidMount() {
    const interval = setInterval(this.changeState, 1000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderHistory = (history: IHistory[]) => {
    let items: JSX.Element[] = [];

    if (history) {
      items = history.map(({ firstValue, operator, secondValue }, index: Key) => (
        <HistoryItem key={index}>
          {`${roundingResult(firstValue)} 
            ${operator}
            ${roundingResult(secondValue)}`}
        </HistoryItem>
      ));
    }

    return items;
  };

  render() {
    const { t: translate } = this.props;
    const { history } = this.state;
    const historyItems = this.renderHistory(history);

    const onClickCloseBtn = () => {
      this.props.setIsHiddenHistory(!this.props.isHiddenHistory);
      localStorage.setItem('isHiddenHistory', JSON.stringify(!this.props.isHiddenHistory));
    };

    return (
      <Wrapper>
        <TitleBlock>
          <Title>{translate('history')}</Title>
          <CloseBlock className={!this.props.isHiddenHistory && 'active'} onClick={onClickCloseBtn}>
            <CloseLine></CloseLine>
            <CloseLine></CloseLine>
            <CloseLine></CloseLine>
          </CloseBlock>
        </TitleBlock>
        <Line />
        <HistoryBlock className={!this.props.isHiddenHistory && 'active'} id="history">
          {historyItems}
        </HistoryBlock>
      </Wrapper>
    );
  }
}

const mapStateToProps = (props: TProps): { isHiddenHistory: boolean } => ({
  isHiddenHistory: getIsHiddenHistory(props)
});

export default compose(
  withTranslation(),
  connect(mapStateToProps, { setIsHiddenHistory })
)(History);
