// components/LoginForm/LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/userSlice';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <div className={styles['login-form']}>
            <h2>Войти</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Ваш e-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder='Введите пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Войти</button>
                {status === 'loading' && <p>Вход...</p>}
                {status === 'failed' && <p className={styles['error']}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
