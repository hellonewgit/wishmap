// src/components/Form/FormButton.jsx
import React from 'react';
import styles from './FormButton.module.css'; // Стили для кнопок

const FormButton = ({ text }) => {
  return (
    <button type="submit" className={styles['button']}>
      {text}
    </button>
  );
};

export default FormButton;

