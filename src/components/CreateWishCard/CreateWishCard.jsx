// src/components/CreateWishCard/CreateWishCard.jsx

import React, { useState } from 'react';
import styles from './CreateWishCard.module.css';

const CreateWishCard = ({ addWish }) => {
    const [title, setTitle] = useState(''); // Состояние для названия желания
    const [imageUrl, setImageUrl] = useState(''); // Состояние для ссылки на изображение
    const [error, setError] = useState(''); // Состояние для ошибок

    // Проверка, что введена корректная ссылка на изображение
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };

    // Обработчик нажатия на кнопку "Сохранить"
    const handleSave = () => {
        if (!title || !imageUrl) {
            setError('Заполните все поля!');
            return;
        }
        if (!isValidUrl(imageUrl)) {
            setError('Введите корректную ссылку на изображение (например, https://example.com/image.jpg).');
            return;
        }

        // Если все корректно, очищаем ошибку и добавляем новое желание
        setError('');
        addWish({ title, imageUrl });
        setTitle(''); // Очищаем поле ввода названия
        setImageUrl(''); // Очищаем поле ввода ссылки
    };

    return (
        <>
            <h2>Создай свое желание</h2>
            <div className={styles['create-wish-container']}>
                <div className={styles['create-wish-card']}>
                    {/* Отображение названия желания над полем ввода */}
                    {title && <h3 className={styles['wish-preview']}>{title}</h3>}

                    {/* Поле для ввода ссылки на изображение */}
                    <input
                        type="text"
                        placeholder="Вставьте ссылку на изображение"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className={styles['input']}
                    />
                    <p>Добавляйте ссылку на своё изображение (jpg, png, gif и т.д.)</p>

                    {/* Поле для ввода названия желания */}
                    <input
                        type="text"
                        placeholder="Введите название желания"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles['input']}
                    />

                    {/* Кнопка для сохранения */}
                    <button onClick={handleSave} className={styles['save-button']}>
                        Сохранить
                    </button>

                    {/* Отображение ошибки, если есть */}
                    {error && <p className={styles['error-message']}>{error}</p>}
                </div>

                {/* Блок с инструкцией справа от формы */}
                <div className={styles['instruction']}>
                    <h3>Как создать своё желание:</h3>
                    <ol>
                        <li>Вставьте ссылку на изображение вашего желания (используйте только изображения форматов JPG, PNG, GIF).</li>
                        <li>Введите название вашего желания в текстовое поле.</li>
                        <li>Нажмите кнопку "Сохранить", чтобы добавить желание в список ваших целей.</li>
                        <li>Ваше новое желание появится в разделе "Мои желания"!</li>
                    </ol>
                    <p>Убедитесь, что изображение является ссылкой на картинку. Пример: https://example.com/image.jpg</p>
                </div>
            </div>
        </>
    );
};

export default CreateWishCard;
