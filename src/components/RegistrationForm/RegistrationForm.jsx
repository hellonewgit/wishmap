// components/RegistrationForm/RegistrationForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Для навигации

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  // Перенаправляем пользователя после успешной регистрации
  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/login'); // Перенаправляем на страницу входа после регистрации
    }
  }, [status, navigate]);

  return (
    <div className={styles['registration-form']}>
      <h2>Зарегистрироваться</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Придумайте никнейм"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Создать аккаунт</button>
        {status === 'loading' && <p>Регистрация...</p>}
        {status === 'failed' && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
