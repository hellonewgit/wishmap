// src/components/RegistrationForm/RegistrationForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate, Link } from 'react-router-dom'; // Импортируем Link для навигации
import styles from './RegistrationForm.module.css'; // Импорт модульных стилей

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/login'); // Тут не нужно указывать /wishmap/login, так как basename автоматически добавится
    }
  }, [status, navigate]);

  return (
    <div className={styles['registration-form']}>
      <h2 className={styles['registration-form__title']}>Зарегистрироваться</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['registration-form__group']}>
          <input
            type="text"
            name="username"
            placeholder="Придумайте никнейм"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles['registration-form__input']}
            required
          />
        </div>
        <div className={styles['registration-form__group']}>
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles['registration-form__input']}
            required
          />
        </div>
        <div className={styles['registration-form__group']}>
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles['registration-form__input']}
            required
          />
        </div>

        <button type="submit" className={styles['registration-form__button']}>
          Создать аккаунт
        </button>

        {/* Добавляем текст о политике конфиденциальности под кнопкой */}
        <p className={styles['registration-form__privacy']}>
          Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных и
          <Link to="/privacy-policy" className={styles['registration-form__link']}> Политикой конфиденциальности</Link>.
        </p>
      </form>

      <hr className={styles['registration-form__divider']} />

      <p className={styles['registration-form__login-prompt']}>
        Уже есть аккаунт? <Link to="/login" className={styles['registration-form__link']}>Войти</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
