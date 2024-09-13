import React from 'react';
import DesireCard from '../DesireCard/DesireCard'; // Импорт компонента карточки
import styles from './DesireCardList.module.css';

const DesireCardList = () => {
    // Массив с данными для карточек
    const desires = [
        { title: 'Деньги', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
        { title: 'Семья', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
        { title: 'Путешествия', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
        { title: 'Успех', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
        { title: 'Карьера', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
        { title: 'Саморазвитие', imageUrl: 'https://ic.pics.livejournal.com/xachapyri/9652291/5824/5824_320.jpg' },
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
