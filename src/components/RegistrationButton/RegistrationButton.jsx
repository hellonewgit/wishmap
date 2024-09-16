// RegistrationButton.jsx
import { Link } from 'react-router-dom';
import styles from './RegistrationButton.module.css';

const RegisterButton = () => {
  return (
    <Link to="/register">
    <button className={styles['register-button']}>Регистрация</button>
    </Link>
  );
};

export default RegisterButton;
