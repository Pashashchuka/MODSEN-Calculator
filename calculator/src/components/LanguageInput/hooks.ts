import { useTranslation } from 'react-i18next';

export const useInputLanguages = () => {
  const { i18n } = useTranslation();

  const actualLanguage = localStorage.getItem('i18nextLng');

  const changeLanguage = (event: { target: { value: string } }) => {
    i18n.changeLanguage(event.target.value);
  };

  return {
    actualLanguage,
    changeLanguage
  };
};
