import React, { useState } from 'react';
import styles from './DesireCard.module.css';

const DesireCard = ({ title, imageUrl, isInMyWishes, toggleWish, updateTitle, canEdit }) => {
    const [isEditing, setIsEditing] = useState(false); // Управление режимом редактирования
    const [newTitle, setNewTitle] = useState(title); // Состояние для нового названия

    const handleEditClick = () => {
        setIsEditing(true); // Переходим в режим редактирования
    };

    const handleSaveClick = () => {
        updateTitle(newTitle); // Обновляем заголовок карточки
        setIsEditing(false); // Возвращаемся к режиму просмотра
    };

    return (
        <div className={styles['desire-card']}>
            <img src={imageUrl} alt={title} className={styles['desire-card__image']} />

            {/* Если редактируем, показываем поле ввода, иначе заголовок */}
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

            {/* Кнопка "Сохранить" или "Редактировать" только если canEdit = true */}
            {canEdit && (
                isEditing ? (
                    <button className={styles['edit-button']} onClick={handleSaveClick}>
                        Сохранить
                    </button>
                ) : (
                    <button className={styles['edit-button']} onClick={handleEditClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px" height="16px" fill="currentColor">
                            <path d="M362.7 19.31l45.26-45.25c25-25 65.54-25 90.51 0L537.3 24.64c25 25 25 65.55 0 90.51L182.9 469.49c-4.5 4.5-10.13 7.77-16.26 9.56l-120 40c-12.08 4.02-25.32 .01-34.36-9.04S-6.04 489.5-2.02 477.42l40-120c1.8-6.13 5.06-11.76 9.56-16.26l333.3-333.31zM284.7 68.69L102.4 250.99c-2.4 2.4-3.9 5.45-4.41 8.77l-20 120c-.44 2.64 .49 5.35 2.46 7.32 1.97 1.97 4.68 2.9 7.32 2.46l120-20c3.32-.52 6.37-2.01 8.77-4.41l182.3-182.3-94.12-94.12zm156.9-39.6L406.4 64.28l94.12 94.12 35.21-35.21c6.25-6.25 6.25-16.38 0-22.62l-22.63-22.63c-6.25-6.25-16.38-6.25-22.62 0z" />
                        </svg>
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
