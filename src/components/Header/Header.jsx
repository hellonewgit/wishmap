// src/components/Header/Header.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/slices/userSlice';
import styles from './Header.module.css';

const Header = () => {
  const user = useSelector((state) => state.user.user); // Получаем данные пользователя из Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>WishMap</Link>
      <nav className={styles.header__nav}>
        {user ? (
          <div className={styles.header__username}>
            {user.username}
            <div className={styles.header__logout} onClick={handleLogout}>
              Выйти
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className={styles.header__link}>Войти</Link>
            <Link to="/register" className={styles.header__link}>Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
