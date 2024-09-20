// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import wishesReducer from './slices/wishesSlice';

// Функция для безопасного получения данных пользователя из localStorage
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') { // Проверяем, что user не равен строке 'undefined'
        try {
            return JSON.parse(user);
        } catch (error) {
            console.error("Ошибка при парсинге данных пользователя из localStorage:", error);
        }
    }
    return null;
};

// Предзагруженное состояние из localStorage
const preloadedState = {
    user: {
        token: localStorage.getItem('userToken') || null, // Получаем токен из localStorage
        user: getUserFromLocalStorage(), // Получаем данные пользователя
        status: 'idle',
        error: null,
    },
};

const store = configureStore({
    reducer: {
        user: userReducer,
        wishes: wishesReducer,
    },
    preloadedState, // Инициализируем store с данными из localStorage
});

export default store;
