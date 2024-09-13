import React, { useState } from 'react';
import MyWishes from '../MyWishes/MyWishes';
import DesireConstructor from '../DesireConstructor/DesireConstructor';
import styles from './DesireCardList.module.css';

const DesireCardList = () => {
    const desires = [
        { title: 'Деньги', imageUrl: '/wishmap/assets/images/money.jpg' },
        { title: 'Семья', imageUrl: '/wishmap/assets/images/family.jpg' },
        { title: 'Путешествия', imageUrl: '/wishmap/assets/images/travel.jpg' },
        { title: 'Успех', imageUrl: '/wishmap/assets/images/success.jpg' },
        { title: 'Карьера', imageUrl: '/wishmap/assets/images/carier.jpg' },
        { title: 'Саморазвитие', imageUrl: '/wishmap/assets/images/self.jpg' },
    ];

    const [myWishes, setMyWishes] = useState([]);

    // Функция для добавления/удаления карточки из "Моих желаний"
    const handleToggleWish = (desire) => {
        if (myWishes.some(wish => wish.title === desire.title)) {
            // Если карточка уже в "Моих желаниях", удаляем её
            setMyWishes(myWishes.filter(wish => wish.title !== desire.title));
        } else {
            // Если карточки нет, добавляем её
            setMyWishes([...myWishes, desire]);
        }
    };

    return (
        <div>
            <MyWishes wishes={myWishes} toggleWish={handleToggleWish} />

            <hr className={styles['divider']} /> {/* Разделяем визуально секции */}

            <DesireConstructor desires={desires} myWishes={myWishes} toggleWish={handleToggleWish} />
        </div>
    );
};

export default DesireCardList;
