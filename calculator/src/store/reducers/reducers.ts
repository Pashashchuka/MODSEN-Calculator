import { TCommand } from 'utils/calculator';
import {
  SET_IS_HIDDEN_HISTORY,
  SET_IS_DISPLAY_ERROR,
  SET_THEME
} from 'store/actions';

interface ISetTheme {
  type: typeof SET_THEME;
  payload: string;
}

interface ISetIsHiddenHistory {
  type: typeof SET_IS_HIDDEN_HISTORY;
  payload: boolean;
}

interface ISetIsDisplayError {
  type: typeof SET_IS_DISPLAY_ERROR;
  payload: boolean;
}

type AllActionTypes =
  | ISetIsHiddenHistory
  | ISetIsDisplayError
  | ISetTheme;

export interface IinitialState {
  isHiddenHistory: boolean;
  isDisplayError: boolean;
  history: TCommand[];
  theme: string;
}

const initialState = {
  isHiddenHistory: JSON.parse(localStorage.getItem('isHiddenHistory')) === false ? false : true,
  theme: localStorage.getItem('theme') || 'dark',
  isDisplayError: false,
  history: []
};

const history = (state: IinitialState = initialState, action: AllActionTypes): IinitialState => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }
    case SET_IS_HIDDEN_HISTORY: {
      return {
        ...state,
        isHiddenHistory: action.payload
      };
    }
    case SET_IS_DISPLAY_ERROR: {
      return {
        ...state,
        isDisplayError: action.payload
      };
    }
    default:
      return state;
  }
};

export default history;
