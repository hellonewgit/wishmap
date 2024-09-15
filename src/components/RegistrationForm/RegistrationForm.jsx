import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Отправка данных на сервер
        const response = await fetch('https://wishmapbackend.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage('Регистрация успешна!');
        } else {
            setMessage(data.detail || 'Ошибка регистрации');
        }
    };

    return (
        <div className={`${styles['registration-form']} center`}>
            <h2 className={styles['registration-form__title']}>Зарегистрироваться</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles['registration-form__group']}>
                    <input
                        type="text"
                        placeholder='Придумайте никнейм'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles['registration-form__input']}
                        required
                    />
                </div>
                <div className={styles['registration-form__group']}>
                    <input
                        type="email"
                        placeholder='Ваш e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles['registration-form__input']}
                        required
                    />
                </div>
                <div className={styles['registration-form__group']}>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles['registration-form__input']}
                        required
                    />
                </div>
                <button type="submit" className={styles['registration-form__button']}>
                    Создать аккаунт <span className={styles['registration-form__arrow']}><svg width="8.500000" height="15.000000" viewBox="0 0 8.5 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs />
                        <path id="↳ Icon Color" d="M6.08 7.5L0.29 13.29C-0.1 13.68 -0.1 14.31 0.29 14.7C0.68 15.09 1.31 15.09 1.7 14.7L8.2 8.2C8.59 7.81 8.59 7.18 8.2 6.79L1.7 0.29C1.31 -0.1 0.68 -0.1 0.29 0.29C-0.1 0.68 -0.1 1.31 0.29 1.7L6.08 7.5Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>
                    </span>
                </button>
                {message && <p className={styles['registration-form__message']}>{message}</p>}
            </form>
        </div>
    );
};

export default RegistrationForm;
