// PrivacyPolicyPage.jsx

import React, { useState } from 'react';
import styles from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        // Здесь добавьте логику для отправки запроса на сброс пароля
        setMessage('Инструкция по сбросу пароля отправлена на ваш email.');
    };

    return (
        <div className={styles['reset-password-form']}>
            <h2>Сброс пароля</h2>
            <form onSubmit={handleReset}>
                <div className={styles['reset-password-group']}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles['reset-password-input']}
                        required
                    />
                </div>
                <button type="submit" className={styles['reset-password-button']}>
                    Сбросить пароль
                </button>
            </form>
            {message && <p className={styles['reset-password-message']}>{message}</p>}
        </div>
    );
};

export default ResetPasswordPage;

