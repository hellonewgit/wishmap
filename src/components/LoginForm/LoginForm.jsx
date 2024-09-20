// src/components/LoginPage/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
    const user = useSelector((state) => state.user.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        if (status === 'succeeded' && user) {
            navigate('/dashboard'); // Перенаправляем на дашборд после успешного входа
        }
    }, [status, navigate, user]);

    return (
        <div className={styles['login-form']}>
            <h2 className={styles['login-form__title']}>Войти</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles['login-form__group']}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles['login-form__input']}
                        required
                    />
                </div>

                <div className={styles['login-form__group']}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles['login-form__input']}
                        required
                    />
                </div>

                <button type="submit" className={styles['login-form__button']}>
                    Войти
                </button>

                {status === 'failed' && <p className={styles['login-form__error']}>{error}</p>}
            </form>
            <p className={styles['login-form__forgot-password']}>
                Забыли пароль?
                <Link to="/reset-password" className={styles['login-form__link']}> Восстановить</Link>
            </p>
        </div>
    );
};

export default LoginPage;
