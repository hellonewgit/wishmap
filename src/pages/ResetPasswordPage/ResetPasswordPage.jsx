// src/pages/ResetPasswordPage/ResetPasswordPage.jsx
import React, { useState } from 'react';
import styles from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика для отправки запроса на восстановление пароля
    console.log('Email для восстановления пароля:', email);
  };

  return (
    <div className={styles['reset-password-form']}>
      <h2 className={styles['reset-password-form__title']}>Восстановление пароля</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['reset-password-form__group']}>
          <input
            type="email"
            placeholder="Ваш e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles['reset-password-form__input']}
            required
          />
        </div>
        <button type="submit" className={styles['reset-password-form__button']}>
          Восстановить пароль
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
