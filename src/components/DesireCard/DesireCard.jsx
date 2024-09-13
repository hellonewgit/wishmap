import React, { useState } from 'react';
import styles from './DesireCard.module.css';

const DesireCard = ({ title, imageUrl, isInMyWishes, toggleWish }) => {
    const [isDisappearing, setIsDisappearing] = useState(false);

    const handleClick = () => {
        if (!isInMyWishes) {
            setIsDisappearing(true);
            setTimeout(() => {
                toggleWish(); // Добавляем карточку в "Мои желания"
                setIsDisappearing(false); // Сбрасываем состояние анимации
            }, 700); // Время анимации — 700 мс
        } else {
            toggleWish(); // Если удаляем карточку, вызываем toggleWish напрямую
        }
    };

    return (
        <div
            className={`${styles['desire-card']} ${isDisappearing ? styles.exit : ''} ${isInMyWishes ? styles.enter : ''}`}
        >
            <img src={imageUrl} alt={title} className={styles['desire-card__image']} />
            <h2 className={styles['desire-card__title']}>{title}</h2>
            <button className={styles['desire-card__button']} onClick={handleClick}>
                {isInMyWishes ? 'Удалить' : 'Добавить'}
            </button>
        </div>
    );
};

export default DesireCard;
