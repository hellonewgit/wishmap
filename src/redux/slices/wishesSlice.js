// src/redux/slices/wishesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для получения желаний пользователя
export const fetchWishes = createAsyncThunk(
    'wishes/fetchWishes',
    async ({ userId, token }, thunkAPI) => {
        try {
            const response = await axios.get(`https://wishmapbackend.onrender.com/users/${userId}/wishes`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Fetch wishes error:', error.response ? error.response.data : error.message);
            return thunkAPI.rejectWithValue('Ошибка при получении желаний');
        }
    }
);

// Асинхронное действие для добавления нового желания
export const addWishAsync = createAsyncThunk(
    'wishes/addWishAsync',
    async ({ wish, token }, thunkAPI) => {
        try {
            const response = await axios.post('https://wishmapbackend.onrender.com/wishes', wish, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Add wish error:', error.response ? error.response.data : error.message);
            return thunkAPI.rejectWithValue('Ошибка при добавлении желания');
        }
    }
);

// Асинхронное действие для удаления желания
export const deleteWishAsync = createAsyncThunk(
    'wishes/deleteWishAsync',
    async ({ wishId, token }, thunkAPI) => {
        try {
            await axios.delete(`https://wishmapbackend.onrender.com/wishes/${wishId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return wishId;
        } catch (error) {
            console.error('Delete wish error:', error.response ? error.response.data : error.message);
            return thunkAPI.rejectWithValue('Ошибка при удалении желания');
        }
    }
);

// Асинхронное действие для обновления желания
export const updateWishAsync = createAsyncThunk(
    'wishes/updateWishAsync',
    async ({ wishId, updatedWish, token }, thunkAPI) => {
        try {
            const response = await axios.put(`https://wishmapbackend.onrender.com/wishes/${wishId}`, updatedWish, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Update wish error:', error.response ? error.response.data : error.message);
            return thunkAPI.rejectWithValue('Ошибка при обновлении желания');
        }
    }
);

// Создание среза (slice) состояния желаний
const wishesSlice = createSlice({
    name: 'wishes',
    initialState: [],
    reducers: {
        setWishes: (state, action) => {
            return action.payload;
        },
        addWish: (state, action) => {
            state.push(action.payload);
        },
        removeWish: (state, action) => {
            return state.filter(wish => wish.id !== action.payload);
        },
        updateWishTitle: (state, action) => {
            const wish = state.find(w => w.id === action.payload.id);
            if (wish) {
                wish.title = action.payload.newTitle;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishes.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addWishAsync.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteWishAsync.fulfilled, (state, action) => {
                return state.filter(wish => wish.id !== action.payload);
            })
            .addCase(updateWishAsync.fulfilled, (state, action) => {
                const wish = state.find(w => w.id === action.payload.id);
                if (wish) {
                    wish.title = action.payload.title;
                    wish.imageUrl = action.payload.imageUrl;
                }
            });
    },
});

export const { setWishes, addWish, removeWish, updateWishTitle } = wishesSlice.actions;

export default wishesSlice.reducer;
