// src/components/ResetPasswordForm/ResetPasswordForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/slices/userSlice'; // Убедитесь, что импорт правильный
import { useNavigate } from 'react-router-dom';
import AuthForm from '../Form/AuthForm';

const ResetPasswordForm = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword({ email }));
    };

    useEffect(() => {
        if (status === 'succeeded') {
            navigate('/login'); // Перенаправляем на страницу входа после успешного восстановления пароля
        }
    }, [status, navigate]);

    const fields = [
        { name: 'email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value), placeholder: 'Ваш e-mail' }
    ];

    return (
        <AuthForm
            title="Восстановление пароля"
            onSubmit={handleSubmit}
            fields={fields}
            buttonText="Восстановить пароль"
            footerText="Уже есть аккаунт?"
            footerLink="/login"
            footerLinkText="Войти"
        />
    );
};

export default ResetPasswordForm;
