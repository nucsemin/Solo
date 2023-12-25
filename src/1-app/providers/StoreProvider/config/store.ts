import { countersReducer } from '5-entities/Counter/model/slice/counterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

// Чтобы переиспользовать и отдельно создавать стор (для jesta, сторибука)
export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: countersReducer,
        },
        devTools: __IS_DEV__, // отключить девтулзы для продакшна
        preloadedState: initialState,
    });
}
