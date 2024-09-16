import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null, // Загружаем токен из localStorage при инициализации
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
};

// Асинхронный thunk для регистрации
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
                return data; // Возвращаем данные пользователя при успешной регистрации
            } else {
                return thunkAPI.rejectWithValue(data.detail || 'Ошибка регистрации');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка сети');
        }
    }
);

// Асинхронный thunk для входа
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
                return thunkAPI.rejectWithValue(data.detail || 'Ошибка входа');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка сети');
        }
    }
);

// Слайс для пользователя
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token'); // Удаляем токен из localStorage при выходе
        },
    },
    extraReducers: (builder) => {
        builder
            // Регистрация пользователя
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Вход пользователя
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;

                // Сохранение токена в localStorage
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
