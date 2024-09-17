// src/pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx
import React from 'react';
import styles from './PrivacyPolicy.module.css'; // Импорт стилей

const PrivacyPolicyPage = () => {
    return (
        <div className={styles['privacy-policy']}>
            <h2 className={styles['privacy-policy__title']}>Политика конфиденциальности</h2>
            <p className={styles['privacy-policy__text']}>
                Мы заботимся о вашей конфиденциальности. Вся личная информация, которую вы предоставляете на нашем сайте,
                будет использоваться в соответствии с настоящей политикой конфиденциальности.
            </p>
            <p className={styles['privacy-policy__text']}>
                Мы не будем передавать ваши данные третьим лицам без вашего согласия. В случае использования ваших данных
                в маркетинговых или иных целях, мы заранее уведомим вас.
            </p>
            <p className={styles['privacy-policy__text']}>
                Если у вас есть вопросы о нашей политике конфиденциальности, пожалуйста, свяжитесь с нами через контактные данные, указанные на сайте.
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
