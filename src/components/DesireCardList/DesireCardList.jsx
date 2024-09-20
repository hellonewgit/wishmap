// src/components/DesireCardList/DesireCardList.jsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyWishes from '../MyWishes/MyWishes';
import DesireConstructor from '../DesireConstructor/DesireConstructor';
import CreateWishCard from '../CreateWishCard/CreateWishCard';
import styles from './DesireCardList.module.css';
import { setWishes, addWish as addWishToState, removeWish, updateWishTitle } from '../../redux/slices/wishesSlice';
import { fetchWishes, addWish, deleteWish, updateWish } from '../../api/wishes';

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
    const token = useSelector((state) => state.user.token);
    const [loading, setLoading] = useState(true);

    // Логирование для отладки
    useEffect(() => {
        console.log('User:', user);
        console.log('Token:', token);
    }, [user, token]);

    // Проверка наличия токена
    if (!token) {
        console.error('Токен отсутствует. Пожалуйста, войдите в систему.');
        return <p>Требуется авторизация для доступа к желаниям.</p>;
    }

    // Проверка наличия данных пользователя
    if (!user) {
        console.error('Данные пользователя отсутствуют. Пожалуйста, войдите в систему.');
        return <p>Требуется авторизация для доступа к желаниям.</p>;
    }

    // Загрузка списка желаний
    useEffect(() => {
        if (user && user.id) {
            setLoading(true);
            fetchWishes(user.id, token)
                .then((response) => {
                    console.log('Fetched wishes:', response.data);
                    dispatch(setWishes(response.data));
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Ошибка при загрузке желаний:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user, dispatch, token]);

    // Обработка добавления/удаления желания
    const handleToggleWish = (desire) => {
        if (myWishes.some((wish) => wish.id === desire.id)) {
            // Удаление желания
            deleteWish(desire.id, token)
                .then(() => {
                    dispatch(removeWish(desire.id));
                })
                .catch((error) => {
                    console.error('Ошибка при удалении желания:', error);
                });
        } else {
            // Добавление желания
            handleAddWish(desire);
        }
    };

    // Добавление желания через API
    const handleAddWish = (newWish) => {
        if (!user || !user.id) {
            console.error('Пользователь не авторизован.');
            return;
        }
        const { id, ...wishData } = newWish; // Исключаем поле id
        // Добавляем userId в данные желания, если сервер ожидает его
        const wishWithUser = { ...wishData, userId: user.id };

        addWish(wishWithUser, token)
            .then((response) => {
                console.log('Add wish response:', response.data); // Логирование
                dispatch(addWishToState(response.data)); // Обновляем состояние с добавленным желанием
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Ошибка при добавлении желания:', error.response.data);
                } else if (error.request) {
                    console.error('Сервер не ответил:', error.request);
                } else {
                    console.error('Ошибка при настройке запроса:', error.message);
                }
            });
    };

    // Обновление названия желания
    const handleUpdateWishTitle = (id, newTitle) => {
        const updatedWish = myWishes.find((wish) => wish.id === id);

        if (updatedWish) {
            const updatedWishData = { ...updatedWish, title: newTitle };

            updateWish(id, updatedWishData, token)
                .then((response) => {
                    dispatch(updateWishTitle({ id, newTitle: response.data.title }));
                })
                .catch((error) => {
                    console.error('Ошибка при обновлении желания:', error);
                });
        }
    };

    // Показ загрузки
    if (loading) {
        return <p>Загрузка...</p>;
    }

    return (
        <div>
            {/* Если нет желаний, показываем сообщение */}
            {(!myWishes || myWishes.length === 0) ? (
                <p>У вас пока нет желаний.</p>
            ) : (
                <MyWishes
                    wishes={myWishes}
                    toggleWish={handleToggleWish}
                    updateWishTitle={handleUpdateWishTitle}
                />
            )}

            <hr className={styles['divider']} />

            {/* Конструктор желаний */}
            <DesireConstructor
                desires={desires}
                myWishes={myWishes}
                toggleWish={handleToggleWish}
            />

            {/* Карточка для создания нового желания */}
            <CreateWishCard addWish={handleAddWish} />
        </div>
    );
};

export default DesireCardList;
