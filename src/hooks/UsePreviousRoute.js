import { useNavigate } from 'react-router-dom';

export const usePreviousRoute = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return { goBack };
};
