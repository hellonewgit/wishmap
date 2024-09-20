// src/redux/slices/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для регистрации пользователя
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('https://wishmapbackend.onrender.com/auth/register', userData);
            console.log('Register response data:', response.data); // Логирование ответа сервера
            return response.data;
        } catch (error) {
            console.error('Register error:', error.response ? error.response.data : error.message); // Логирование ошибки
            // Возвращаем подробную информацию об ошибке, если она есть
            return thunkAPI.rejectWithValue(error.response?.data?.detail || 'Ошибка при регистрации');
        }
    }
);

// Асинхронное действие для входа пользователя
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('https://wishmapbackend.onrender.com/auth/login', credentials);
            console.log('Login response data:', response.data); // Логирование ответа сервера
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message); // Логирование ошибки
            // Возвращаем подробную информацию об ошибке, если она есть
            return thunkAPI.rejectWithValue(error.response?.data?.detail || 'Ошибка при входе');
        }
    }
);

// Вспомогательная функция для безопасного получения пользователя из localStorage
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') { // Проверяем, что user существует и не равен строке 'undefined'
        try {
            return JSON.parse(user);
        } catch (error) {
            console.error("Ошибка при парсинге данных пользователя из localStorage:", error);
            localStorage.removeItem('user'); // Удаляем некорректные данные
            return null;
        }
    }
    return null;
};

// Вспомогательная функция для безопасного получения токена из localStorage
const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('userToken');
    if (token && token !== 'undefined') { // Проверяем, что token существует и не равен строке 'undefined'
        return token;
    }
    return null;
};

// Создание среза (slice) состояния пользователя
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: getUserFromLocalStorage(),
        token: getTokenFromLocalStorage(),
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        // Действие для выхода из аккаунта
        logout(state) {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
            localStorage.removeItem('userToken'); // Удаляем токен при выходе
            localStorage.removeItem('user'); // Удаляем данные пользователя при выходе
        },
    },
    extraReducers: (builder) => {
        builder
            // Обработка регистрации
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log('Register fulfilled payload:', action.payload); // Логирование полезной нагрузки
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.status = 'succeeded';
                localStorage.setItem('userToken', action.payload.access_token); // Сохраняем токен
                localStorage.setItem('user', JSON.stringify(action.payload.user)); // Сохраняем данные пользователя
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Ошибка при регистрации';
            })

            // Обработка входа
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('Login fulfilled payload:', action.payload); // Логирование полезной нагрузки
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.status = 'succeeded';
                localStorage.setItem('userToken', action.payload.access_token); // Сохраняем токен
                localStorage.setItem('user', JSON.stringify(action.payload.user)); // Сохраняем данные пользователя
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Ошибка при входе';
            });
    },
});

// Экспорт действия выхода из аккаунта
export const { logout } = userSlice.actions;

// Экспорт редьюсера пользователя
export default userSlice.reducer;
