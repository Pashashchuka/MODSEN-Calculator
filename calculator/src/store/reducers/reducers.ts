import { SET_THEME } from 'store/actions';

interface ISetTheme {
  type: typeof SET_THEME;
  payload: string;
}

type AllActionTypes = ISetTheme;

export interface IinitialState {
  theme: string;
}

const initialState = {
  theme: localStorage.getItem('theme'),
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
    default:
      return state;
  }
};

export default history;
