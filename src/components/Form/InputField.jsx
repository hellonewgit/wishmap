// src/components/Form/InputField.jsx
import React from 'react';
import styles from './InputField.module.css'; // Стили для полей ввода

const InputField = ({ type, value, onChange, placeholder }) => {
    return (
        <div className={styles['input-group']}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles['input']}
                required
            />
        </div>
    );
};

export default InputField;
