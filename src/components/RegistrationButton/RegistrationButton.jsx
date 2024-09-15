import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationButton.module.css';  // Обновлено название файла с модулями стилей

const RegistrationButton = () => {  // Изменено название компонента
  return (
    <Link to="/register">
      <button className={styles["register-button"]}>Регистрация</button>
    </Link>
  );
};

export default RegistrationButton;
