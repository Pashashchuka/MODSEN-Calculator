import { IinitialState } from 'store/reducers/reducers';

export interface ITheme {
  text: string;
  number: string;
  logoText: string;
  function: string;
  operation: string;
  blackColor: string;
  background: string;
  buttonColor: string;
  containerBg: string;
  displayColor: string;
  displayNumbers: string;
  containerBorder: string;
  darkDisplayBorder: string;
  lightDisplayBorder: string;
  darkShadow: string;
  shadow: string;
  body: string;
}

export interface IHistory {
  firstValue: number;
  secondValue: number;
  operator: string;
}

export type TProps = {
  history: IinitialState;
};
