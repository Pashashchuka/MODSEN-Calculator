import React, { Component } from 'react';
import { connect } from 'react-redux';

import { roundingResult } from 'utils/roundingResult';
import { getIsDisplayError } from 'store/selectors';
import { setIsDisplayError } from 'store/actions';
import { clearEntry } from 'utils/clearEntry';
import { TProps } from 'types/types';
import {
  ExponentiationCommand,
  MultiplicationCommand,
  SubtractionCommand,
  RemainderCommand,
  AdditionCommand,
  DivisionCommand,
  Calculator
} from 'utils/calculator';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { ControlPanel } from 'components/ControlPanel';
import { LogoBlock } from 'components/LogoBlock';
import { Display } from 'components/Display';

import { Block, Wrapper } from './CalculatorContainerStyles';

type TContainerState = { firstValue: string; operator: string };
type TContainerProps = {
  isDisplayError?: boolean;
  setIsDisplayError?: (payload: boolean) => void;
};

class CalculatorContainer extends Component<TContainerProps, TContainerState> {
  constructor(props: TContainerProps) {
    super(props);
    this.state = {
      firstValue: '0',
      operator: null
    };
  }

  calculator = new Calculator();

  squareRoot = (value: number) => {
    let x = value / 2;
    if (value < 0) return NaN;
    if (value === 0) return 0;
    for (let i = 0; i < 10; i++) {
      x = (x + value / x) / 2;
    }
    return x;
  };

  handleClick = (content: string) => {
    const { firstValue } = this.state;

    switch (content) {
      case '+': {
        this.setState({
          operator: '+',
          firstValue: ''
        });
        break;
      }
      case '-': {
        this.setState({
          operator: '-',
          firstValue: ''
        });
        break;
      }
      case '*': {
        this.setState({
          operator: '*',
          firstValue: ''
        });
        break;
      }
      case '/': {
        this.setState({
          operator: '/',
          firstValue: ''
        });
        break;
      }
      case '%': {
        this.setState({
          operator: '%',
          firstValue: ''
        });
        break;
      }
      case '^': {
        this.setState({
          operator: '^',
          firstValue: ''
        });
        break;
      }
      case '+/-': {
        this.calculator.setCurrentValue((parseFloat(firstValue) * -1).toString());
        this.setState({
          firstValue: (parseFloat(firstValue) * -1).toString()
        });
        break;
      }
      case '√': {
        this.calculator.setCurrentValue(
          roundingResult(this.squareRoot(parseFloat(firstValue))).toString()
        );
        this.setState({
          firstValue: roundingResult(this.squareRoot(parseFloat(firstValue))).toString()
        });
        break;
      }
      case '1/x': {
        this.calculator.setCurrentValue(roundingResult(parseFloat(firstValue) ** -1).toString());
        this.setState({
          firstValue: roundingResult(parseFloat(firstValue) ** -1).toString()
        });
        break;
      }
      case '.': {
        if (firstValue.toString().includes('.')) return;
        this.setState(({ firstValue }) => ({
          firstValue: firstValue + '.'
        }));
        break;
      }
      case 'C': {
        this.calculator.clear();
        this.setState({ firstValue: '0' });
        break;
      }
      case 'CE': {
        this.setState(({ firstValue }) => ({
          firstValue: clearEntry(firstValue)
        }));
        break;
      }
      case '=': {
        const { operator, firstValue } = this.state;

        if (!this.state.operator) break;

        if (operator === '+') {
          this.calculator.execute(new AdditionCommand(firstValue));
        } else if (operator === '-') {
          this.calculator.execute(new SubtractionCommand(firstValue));
        } else if (operator === '*') {
          this.calculator.execute(new MultiplicationCommand(firstValue));
        } else if (operator === '/') {
          this.calculator.execute(new DivisionCommand(firstValue));
        } else if (operator === '%') {
          this.calculator.execute(new RemainderCommand(firstValue));
        } else if (operator === '^') {
          this.calculator.execute(new ExponentiationCommand(firstValue));
        }

        this.setState({ operator: null, firstValue: this.calculator.getValue().toString() });
        break;
      }
      default: {
        if (!this.state.operator) {
          this.calculator.setCurrentValue(this.state.firstValue + content);
        }

        this.setState(({ firstValue }) => ({
          firstValue: parseFloat(firstValue + content).toString()
        }));
      }
    }
  };

  handleClickOnDisplayError = (content: string) => {
    if (content === 'C') {
      this.calculator.clear();
      this.setState({ firstValue: '0' });
      this.props.setIsDisplayError(false);
    } else return;
  };

  componentDidUpdate() {
    const { firstValue } = this.state;
    if (firstValue === 'Infinity' || firstValue === '-Infinity' || firstValue === 'NaN') {
      this.props.setIsDisplayError(true);
    }
  }

  render() {
    const displayValue = this.calculator.getValue();
    const { isDisplayError } = this.props;
    const { firstValue } = this.state;

    return (
      <Wrapper>
        <Block>
          <LogoBlock />
          <ErrorBoundary>
            <Display
              firstValue={firstValue}
              displayValue={displayValue}
              isDisplayError={isDisplayError}
            />
          </ErrorBoundary>
          <ControlPanel
            handleClick={isDisplayError ? this.handleClickOnDisplayError : this.handleClick}
          />
        </Block>
      </Wrapper>
    );
  }
}

const mapStateToProps = (props: TProps): { isDisplayError: boolean } => ({
  isDisplayError: getIsDisplayError(props)
});

export default connect(mapStateToProps, { setIsDisplayError })(CalculatorContainer);
