// src/components/Form/AuthForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css'; // Импорт модульных стилей

const AuthForm = ({ title, onSubmit, fields, buttonText, footerText, footerLink, footerLinkText }) => {
    return (
        <div className={styles['auth-form']}>
            <h2 className={styles['auth-form__title']}>{title}</h2>
            <form onSubmit={onSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <input
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={field.placeholder}
                            className={styles['auth-form__input']}
                            required
                        />
                    </div>
                ))}
                <button type="submit" className={styles['auth-form__button']}>
                    {buttonText}
                </button>
            </form>

            {footerText && (
                <Link to={footerLink} className={styles['auth-form__link']}>
                    {footerText} {footerLinkText}
                </Link>
            )}
        </div>
    );
};

export default AuthForm;
