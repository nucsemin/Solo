import { CounterSchema } from '5-entities/Counter/model/types/counterSchema';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: countersActions } = counterSlice;
export const { reducer: countersReducer } = counterSlice;
