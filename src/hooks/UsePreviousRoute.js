import { useNavigate } from 'react-router-dom';

const usePreviousRoute = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return { goBack };
};

export default usePreviousRoute;
