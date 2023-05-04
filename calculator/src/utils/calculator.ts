import { roundingResult } from './roundingResult';

export type TCommand =
  | ExponentiationCommand
  | MultiplicationCommand
  | SubtractionCommand
  | RemainderCommand
  | AdditionCommand
  | DivisionCommand;

export const history = JSON.parse(localStorage.getItem('history')) || [];

class Command {
  execute: (a: number, b: number) => number;
  undo: (a: number, b: number) => number;
  value: number;
  constructor(
    execute: (a: number, b: number) => number,
    undo: (a: number, b: number) => number,
    value: number
  ) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

const addition = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '+' });
  return isNaN(x + y) ? 0 : x + y;
};

const subtraction = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '-' });
  return isNaN(x - y) ? 0 : x - y;
};

const multiplication = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '*' });
  return isNaN(x * y) ? 0 : x * y;
};

const division = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '/' });
  return isNaN(x / y) ? 0 : x / y;
};

const remainder = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '%' });
  return isNaN(x % y) ? 0 : x % y;
};

const exponentiation = (x: number, y: number) => {
  history.push({ firstValue: x, secondValue: y, operator: '^' });
  return isNaN(x ** y) ? 0 : x ** y;
};
export class AdditionCommand extends Command {
  constructor(value: string) {
    super(addition, subtraction, parseFloat(value));
  }
}

export class SubtractionCommand extends Command {
  constructor(value: string) {
    super(subtraction, addition, parseFloat(value));
  }
}

export class MultiplicationCommand extends Command {
  constructor(value: string) {
    super(multiplication, division, parseFloat(value));
  }
}

export class DivisionCommand extends Command {
  constructor(value: string) {
    super(division, multiplication, parseFloat(value));
  }
}

export class RemainderCommand extends Command {
  constructor(value: string) {
    super(remainder, multiplication, parseFloat(value));
  }
}

export class ExponentiationCommand extends Command {
  constructor(value: string) {
    super(exponentiation, multiplication, parseFloat(value));
  }
}

export class Calculator {
  currentValue: number;
  history: TCommand[];
  constructor() {
    this.currentValue = 0;
    this.history = [];
  }

  execute(command: TCommand) {
    this.currentValue = command.execute(this.currentValue, command.value);
    this.history.push(command);
    localStorage.setItem('history', JSON.stringify(history));
  }

  undo() {
    const command = this.history.pop();
    this.currentValue = command.undo(this.currentValue, command.value);
  }

  setCurrentValue(value: string) {
    this.currentValue = parseFloat(value);
  }

  getValue() {
    return roundingResult(this.currentValue);
  }

  clear() {
    this.currentValue = 0;
    this.history = [];
  }
}
