import { history } from 'utils/calculator';

export const useClearButton = () => {
  const clearHistory = () => {
    localStorage.removeItem('history');
    history.length = 0;
  };

  return {
    clearHistory
  };
};
