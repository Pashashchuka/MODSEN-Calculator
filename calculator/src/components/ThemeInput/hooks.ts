import { useSelector } from 'react-redux';

import { getTheme } from 'store/selectors';
import { setTheme } from 'store/actions';
import { useAppDispatch } from 'store';

export const useThemeInput = () => {
  const dispatch = useAppDispatch();

  const actualTheme = useSelector(getTheme);

  const changeTheme = (event: { target: { value: string } }) => {
    localStorage.setItem('theme', event.target.value);
    dispatch(setTheme(event.target.value));
  };

  return {
    actualTheme,
    changeTheme
  };
};
