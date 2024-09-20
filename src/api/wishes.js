// src/api/wishes.js

import axios from 'axios';

// Настраиваем базовый URL для axios
const API_URL = 'https://wishmapbackend.onrender.com';

// Функция для получения заголовков с токеном
const getHeaders = (token) => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
});

// Получить желания пользователя
export const fetchWishes = (userId, token) => {
    return axios.get(`${API_URL}/users/${userId}/wishes`, {
        headers: getHeaders(token),
    });
};

// Добавить новое желание
export const addWish = (wish, token) => {
    return axios.post(`${API_URL}/wishes`, wish, {
        headers: getHeaders(token),
    });
};

// Удалить желание
export const deleteWish = (wishId, token) => {
    return axios.delete(`${API_URL}/wishes/${wishId}`, {
        headers: getHeaders(token),
    });
};

// Обновить желание
export const updateWish = (wishId, updatedWish, token) => {
    return axios.put(`${API_URL}/wishes/${wishId}`, updatedWish, {
        headers: getHeaders(token),
    });
};
