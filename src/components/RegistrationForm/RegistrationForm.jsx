// src/components/RegisterPage/RegisterPage.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
    const user = useSelector((state) => state.user.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ username, email, password }));
    };

    useEffect(() => {
        if (status === 'succeeded' && user) {
            navigate('/dashboard'); // Перенаправляем на дашборд после успешной регистрации
        }
    }, [status, navigate, user]);

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

                <button
                    type="submit"
                    className={styles['registration-form__button']}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Регистрация...' : 'Создать аккаунт'}
                </button>

                {status === 'failed' && (
                    <p className={styles['registration-form__error']}>{error}</p>
                )}
            </form>
        </div>
    );
};

export default RegisterPage;
