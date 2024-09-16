import { createSlice } from '@reduxjs/toolkit';

const wishesSlice = createSlice({
    name: 'wishes',
    initialState: [],
    reducers: {
        addWish(state, action) {
            state.push(action.payload);
        },
        removeWish(state, action) {
            return state.filter((wish) => wish.id !== action.payload);
        },
        updateWishTitle(state, action) {
            const { id, newTitle } = action.payload;
            const wish = state.find((wish) => wish.id === id);
            if (wish) {
                wish.title = newTitle;
            }
        },
        setWishes(state, action) {
            return action.payload;
        },
    },
});

export const { addWish, removeWish, updateWishTitle, setWishes } = wishesSlice.actions;

export default wishesSlice.reducer;
