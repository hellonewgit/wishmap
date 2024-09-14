import React, { useState } from 'react';
import MyWishes from '../MyWishes/MyWishes';
import DesireConstructor from '../DesireConstructor/DesireConstructor';
import CreateWishCard from '../CreateWishCard/CreateWishCard'; // Импорт конструктора карточки
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

    // Логика добавления/удаления карточек
    const handleToggleWish = (desire) => {
        if (myWishes.some(wish => wish.title === desire.title)) {
            setMyWishes(myWishes.filter(wish => wish.title !== desire.title));
        } else {
            setMyWishes([...myWishes, desire]);
        }
    };

    // Добавление нового желания
    const handleAddWish = (newWish) => {
        setMyWishes([...myWishes, newWish]);
    };

    // Обновление названия карточки
    const handleUpdateWishTitle = (index, newTitle) => {
        const updatedWishes = [...myWishes];
        updatedWishes[index].title = newTitle;
        setMyWishes(updatedWishes);
    };

    return (
        <div>

            <MyWishes
                wishes={myWishes}
                toggleWish={handleToggleWish}
                updateWishTitle={handleUpdateWishTitle} // Передаём функцию для обновления
            />

            {myWishes.length > 0 && <hr className={styles['divider']} />}

            <DesireConstructor desires={desires} myWishes={myWishes} toggleWish={handleToggleWish} />
            
            <CreateWishCard addWish={handleAddWish} />
        </div>
    );
};

export default DesireCardList;
