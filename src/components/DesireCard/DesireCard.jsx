import React, { useState } from 'react';
import styles from './DesireCard.module.css'; 

const DesireCard = ({ title, imageUrl }) => {
    // useState для переключения состояния кнопки при клике
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <div className={styles['desire-card']}>
            <img src={imageUrl} alt={title} className={styles['desire-card__image']} />
            <h2 className={styles['desire-card__title']}>{title}</h2>
            <button className={styles['desire-card__button']} onClick={handleClick}>
                {isActive ? 'Удалить' : 'Добавить'}
            </button>
        </div>
    );
};

export default DesireCard;
