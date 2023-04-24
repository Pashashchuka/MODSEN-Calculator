import React, { FC } from 'react';

import { DisplayBlock, DisplayErrorBlock, Number, Error } from './DisplayStyles';

interface IDisplayProps {
  firstValue: string;
  displayValue: number;
  isDisplayError: boolean;
}

export const Display: FC<IDisplayProps> = ({ firstValue, displayValue, isDisplayError }) => {
  return (
    <>
      <DisplayBlock className={isDisplayError && 'active'}>
        <Number>{firstValue || displayValue}</Number>
      </DisplayBlock>
      <DisplayErrorBlock className={isDisplayError && 'active'}>
        <Error>E</Error>
        <Number>0.</Number>
      </DisplayErrorBlock>
    </>
  );
};
