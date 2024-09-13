import React, { useState } from 'react';
import MyWishes from '../MyWishes/MyWishes';
import DesireConstructor from '../DesireConstructor/DesireConstructor';
import styles from './DesireCardList.module.css';

const DesireCardList = () => {
    // Массив всех карточек
    const desires = [
        { title: 'Деньги', imageUrl: '/wishmap/assets/images/money.jpg' },
        { title: 'Семья', imageUrl: '/wishmap/assets/images/family.jpg' },
        { title: 'Путешествия', imageUrl: '/wishmap/assets/images/travel.jpg' },
        { title: 'Успех', imageUrl: '/wishmap/assets/images/success.jpg' },
        { title: 'Карьера', imageUrl: '/wishmap/assets/images/carier.jpg' },
        { title: 'Саморазвитие', imageUrl: '/wishmap/assets/images/self.jpg' },
    ];

    // Состояние для хранения "Моих желаний"
    const [myWishes, setMyWishes] = useState([]);

    // Логика добавления/удаления карточек
    const handleToggleWish = (desire) => {
        if (myWishes.some(wish => wish.title === desire.title)) {
            // Если карточка уже в "Моих желаниях", удаляем её
            setMyWishes(myWishes.filter(wish => wish.title !== desire.title));
        } else {
            // Добавляем карточку в "Мои желания"
            setMyWishes([...myWishes, desire]);
        }
    };

    return (
        <div>
            {/* Секция "Мои желания" */}
            <MyWishes wishes={myWishes} toggleWish={handleToggleWish} />

            {/* Разделитель */}
            {myWishes.length > 0 && <hr className={styles['divider']} />}

            {/* Секция "Конструктор" */}
            <DesireConstructor desires={desires} myWishes={myWishes} toggleWish={handleToggleWish} />
        </div>
    );
};

export default DesireCardList;
