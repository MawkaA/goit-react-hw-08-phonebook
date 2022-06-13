import { useLocation, useNavigate } from 'react-router-dom';
import css from './GoBackButton.module.css';
const GoBackButton = () => {
  const location = useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();
  const goBack = () => navigate(from);
  return (
    <button className={css.btn} type="button" onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackButton;
