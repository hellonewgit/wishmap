// Header.jsx
import styles from './Header.module.css';  // Импортируем модульные стили
import RegisterButton from '../RegistrationButton/RegistrationButton';

const Header = () => {
  return (
    <header className={`${styles['header']} center`}> {/* Добавляем стили для header и центрирование */}
    <RegisterButton />
    </header>
  );
};

export default Header;
