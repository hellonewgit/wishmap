import { Link } from 'react-router-dom';  // Импортируем Link для навигации
import styles from './Header.module.css';  // Импортируем модульные стили

const Header = () => {
  return (
    <header className={`${styles['header']} center`}> {/* Добавляем стили для header и центрирование */}
      <Link to="/register">
        <button className={styles['register-button']}>Регистрация</button>
      </Link>
    </header>
  );
};

export default Header;
