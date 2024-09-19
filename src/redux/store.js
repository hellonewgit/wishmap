// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import wishesReducer from './slices/wishesSlice';

// Здесь загружаем токен из localStorage при инициализации
const preloadedState = {
    user: {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')) || null, // Загружаем данные пользователя, если они есть
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

