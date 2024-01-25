import { createSlice } from '@reduxjs/toolkit';
import { userSchema } from '../types/userSchema';

const initialState: userSchema = {
    username: 'Admin',
    password: '123',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
