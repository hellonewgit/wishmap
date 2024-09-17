// src/redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронное действие для регистрации пользователя
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        try {
            const response = await fetch('https://wishmapbackend.onrender.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                return data; // Возвращаем данные пользователя после успешной регистрации
            } else {
                return thunkAPI.rejectWithValue(data.detail || 'Ошибка регистрации');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка сети');
        }
    }
);

// Асинхронное действие для входа пользователя
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch('https://wishmapbackend.onrender.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                return data; // Возвращаем данные пользователя и токен
            } else {
                return thunkAPI.rejectWithValue(data.detail || 'Ошибка при входе');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка сети');
        }
    }
);

// Асинхронное действие для восстановления пароля
export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async (email, thunkAPI) => {
        try {
            const response = await fetch('https://wishmapbackend.onrender.com/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                return data; // Возвращаем сообщение об успешном восстановлении
            } else {
                return thunkAPI.rejectWithValue(data.detail || 'Ошибка восстановления пароля');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка сети');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Обработка регистрации
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Обработка входа
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Обработка восстановления пароля
            .addCase(resetPassword.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
