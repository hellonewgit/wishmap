import React from 'react';
import styles from './RegisterPage.module.css';  // Модульные стили
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
    return (
        <div className={styles['register-page']}>
            <h2 className={styles['register-page__title']}>Добро пожаловать в мир ваших желаний!</h2>
            <RegistrationForm />
        </div>
    );
};

export default RegisterPage;
