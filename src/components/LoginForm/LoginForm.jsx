// src/components/LoginForm/LoginForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice'; // Правильный импорт
import { useNavigate } from 'react-router-dom';
import AuthForm from '../Form/AuthForm';

const LoginForm = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.status);
    const error = useSelector((state) => state.user.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        if (status === 'succeeded') {
            navigate('/dashboard');
        }
    }, [status, navigate]);

    return (
        <AuthForm
            title="Войти"
            onSubmit={handleSubmit}
            fields={[
                { name: 'email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value), placeholder: 'Ваш e-mail' },
                { name: 'password', type: 'password', value: password, onChange: (e) => setPassword(e.target.value), placeholder: 'Введите пароль' }
            ]}
            buttonText="Войти"
            footerText="Забыли пароль?"
            footerLink="/reset-password"
            footerLinkText="Восстановить"
        />
    );
};

export default LoginForm;
