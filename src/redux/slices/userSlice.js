import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://wishmapbackend.onrender.com/auth'; // Убедитесь, что '/auth' работает

// Асинхронное действие для регистрации пользователя
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/register`, userData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.detail || 'Ошибка при регистрации'
            );
        }
    }
);

// Асинхронное действие для входа пользователя
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.detail || 'Ошибка при входе'
            );
        }
    }
);

// Вспомогательная функция для безопасного получения пользователя из localStorage
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
        try {
            return JSON.parse(user);
        } catch (error) {
            localStorage.removeItem('user');
            return null;
        }
    }
    return null;
};

// Вспомогательная функция для безопасного получения токена из localStorage
const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('userToken');
    if (token && token !== 'undefined') {
        return token;
    }
    return null;
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: getUserFromLocalStorage(),
        token: getTokenFromLocalStorage(),
        status: 'idle',
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
            localStorage.removeItem('userToken');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.status = 'succeeded';
                localStorage.setItem('userToken', action.payload.access_token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Ошибка при регистрации';
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.status = 'succeeded';
                localStorage.setItem('userToken', action.payload.access_token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Ошибка при входе';
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
