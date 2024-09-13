import React from 'react';
import DesireCard from '../DesireCard/DesireCard'; // Импорт компонента карточки
import styles from './DesireCardList.module.css';

const DesireCardList = () => {
    // Массив с данными для карточек
    const desires = [
        { title: 'Деньги', imageUrl: '/src/assets/images/wishmapimg.jpg' },
        { title: 'Семья', imageUrl: '/src/assets/images/wishmapimg.jpg' },
        { title: 'Путешествия', imageUrl: '/src/assets/images/wishmapimg.jpg' },
        { title: 'Успех', imageUrl: '/src/assets/images/wishmapimg.jpg' },
        { title: 'Карьера', imageUrl: '/src/assets/images/wishmapimg.jpg' },
        { title: 'Саморазвитие', imageUrl: '/src/assets/images/wishmapimg.jpg' },
    ];

    return (
        <div>
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
