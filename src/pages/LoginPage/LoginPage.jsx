// src/pages/LoginPage/LoginPage.jsx
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'; // Импорт формы, а не стилей

const LoginPage = () => {
    return (
        <div>
            <LoginForm /> {/* Здесь используется форма с уже подключенными стилями */}
        </div>
    );
};

export default LoginPage;
