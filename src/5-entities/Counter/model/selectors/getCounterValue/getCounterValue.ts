import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '5-entities/Counter/model/selectors/getCounter/getCounter';
import { CounterSchema } from '5-entities/Counter/model/types/counterSchema';

// createSelector позволяет переиспользовать другие селекторы, которые у нас уже есть, это библиотека reselect (смотреть как работает createSelector в доке reselect)
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
