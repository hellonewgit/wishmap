// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import wishesReducer from './slices/wishesSlice';

// Здесь загружаем токен из localStorage при инициализации
const preloadedState = {
    user: {
        token: localStorage.getItem('token'), // Если токен есть в localStorage, загружаем его
        user: null, // Можно также загружать данные пользователя, если они есть
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

