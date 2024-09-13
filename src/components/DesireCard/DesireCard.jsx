import React, { useState } from 'react';
import './DesireCard.module.css';

const DesireCard = ({ title, imageUrl }) => {
    // useState для переключения состояния кнопки при клике
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="desire-card">
            <img src={imageUrl} alt={title} className="desire-card__image" />
            <h2 className="desire-card__title">{title}</h2>
            <button className="desire-card__button" onClick={handleClick}>
                {isActive ? 'Удалить' : 'Добавить'}
            </button>
        </div>
    );
};

export default DesireCard;
