import { useNavigate } from 'react-router-dom';

export const useErrorPage = () => {
  const navigate = useNavigate();

  const returnPreviousPage = () => navigate(-1);

  return {
    returnPreviousPage
  };
};
