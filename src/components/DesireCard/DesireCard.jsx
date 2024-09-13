import React from 'react';
import styles from './DesireCard.module.css';

const DesireCard = ({ title, imageUrl, isInMyWishes, toggleWish }) => {
    return (
        <div className={styles['desire-card']}>
            <img src={imageUrl} alt={title} className={styles['desire-card__image']} />
            <h2 className={styles['desire-card__title']}>{title}</h2>
            <button className={styles['desire-card__button']} onClick={toggleWish}>
                {isInMyWishes ? 'Удалить' : 'Добавить'}
            </button>
        </div>
    );
};

export default DesireCard;
