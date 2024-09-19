import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyWishes from '../MyWishes/MyWishes';
import DesireConstructor from '../DesireConstructor/DesireConstructor';
import CreateWishCard from '../CreateWishCard/CreateWishCard';
import styles from './DesireCardList.module.css';
import { addWish, removeWish, updateWishTitle, setWishes } from "../../redux/slices/wishesSlice";

const DesireCardList = () => {
    const desires = [
        { id: 1, title: 'Деньги', imageUrl: '/wishmap/assets/images/money.jpg' },
        { id: 2, title: 'Семья', imageUrl: '/wishmap/assets/images/family.jpg' },
        { id: 3, title: 'Путешествия', imageUrl: '/wishmap/assets/images/travel.jpg' },
        { id: 4, title: 'Успех', imageUrl: '/wishmap/assets/images/success.jpg' },
        { id: 5, title: 'Карьера', imageUrl: '/wishmap/assets/images/carier.jpg' },
        { id: 6, title: 'Саморазвитие', imageUrl: '/wishmap/assets/images/self.jpg' },
    ];

    const dispatch = useDispatch();
    const myWishes = useSelector((state) => state.wishes);
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.id) {
            setLoading(true);
            fetch(`https://wishmapbackend.onrender.com/users/${user.id}/wishes`)
                .then((response) => response.json())
                .then((data) => {
                    dispatch(setWishes(data));
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Ошибка при загрузке желаний:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user, dispatch]);

    const handleToggleWish = (desire) => {
        if (Array.isArray(myWishes) && myWishes.some((wish) => wish.id === desire.id)) {
            dispatch(removeWish(desire.id));
        } else {
            dispatch(addWish(desire));
        }
    };

    const handleAddWish = (newWish) => {
        const newId = Date.now(); // Генерируем уникальный ID для нового желания
        const wishWithId = { ...newWish, id: newId };
        dispatch(addWish(wishWithId));
    };

    const handleUpdateWishTitle = (id, newTitle) => {
        dispatch(updateWishTitle({ id, newTitle }));
    };

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (
        <div>
            {(!myWishes || !Array.isArray(myWishes) || myWishes.length === 0) ? (
                <p>У вас пока нет желаний.</p>
            ) : (
                <MyWishes
                    wishes={myWishes}
                    toggleWish={handleToggleWish}
                    updateWishTitle={handleUpdateWishTitle}
                />
            )}

            {/* Раздел выбора желаний должен всегда быть доступен */}
            <hr className={styles['divider']} />

            <DesireConstructor
                desires={desires}
                myWishes={myWishes}
                toggleWish={handleToggleWish}
            />

            <CreateWishCard addWish={handleAddWish} />
        </div>
    );
};

export default DesireCardList;
