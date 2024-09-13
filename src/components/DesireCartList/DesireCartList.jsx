import React from 'react';
import DesireCard from '../DesireCard/DesireCard'; // Импорт компонента карточки
import styles from './DesireCardList.module.css';

const DesireCardList = () => {
    // Массив с данными для карточек
    const desires = [
        { title: 'Деньги', imageUrl: '/wishmap/assets/images/money.jpg' },
        { title: 'Семья', imageUrl: '/wishmap/assets/images/family.jpg' },
        { title: 'Путешествия', imageUrl: '/wishmap/assets/images/travel.jpg' },
        { title: 'Успех', imageUrl: '/wishmap/assets/images/success.jpg' },
        { title: 'Карьера', imageUrl: '/wishmap/assets/images/carier.jpg' },
        { title: 'Саморазвитие', imageUrl: '/wishmap/assets/images/self.jpg' },
    ];

    return (
        <div>
            <h2>Выбирай что хочешь</h2>
            <div className={styles['desire-card-list']}>
                {desires.map((desire, index) => (
                    <DesireCard
                        key={index}
                        title={desire.title}
                        imageUrl={desire.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesireCardList;
