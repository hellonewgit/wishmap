// src/pages/ResetPassword/ResetPasswordPage.jsx
import React from 'react';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm'; // Импортируем компонент формы
import styles from './ResetPasswordPage.module.css'; // Для оформления

const ResetPasswordPage = () => {
  return (
    <div className={styles['reset-password-page']}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
