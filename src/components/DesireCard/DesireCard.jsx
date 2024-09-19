import React, { useState } from 'react';
import styles from './DesireCard.module.css';

const DesireCard = ({ id, title, imageUrl, isInMyWishes, toggleWish, updateTitle, canEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateTitle(newTitle);
        setIsEditing(false);
    };

    return (
        <div className={styles['desire-card']}>
            <img src={imageUrl} alt={title} className={styles['desire-card__image']} />

            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={styles['input']}
                />
            ) : (
                <h2 className={styles['desire-card__title']}>{title}</h2>
            )}

            {canEdit && (
                isEditing ? (
                    <button className={styles['edit-button']} onClick={handleSaveClick}>
                        Сохранить
                    </button>
                ) : (
                    <button className={styles['edit-button']} onClick={handleEditClick}>
                        ✏️
                    </button>
                )
            )}

            <button className={styles['desire-card__button']} onClick={toggleWish}>
                {isInMyWishes ? 'Удалить' : 'Добавить'}
            </button>
        </div>
    );
};

export default DesireCard;
