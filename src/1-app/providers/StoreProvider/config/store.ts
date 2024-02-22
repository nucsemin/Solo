import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '4-features/AuthByUserName/model/slices/loginSlice';
import { countersReducer } from '5-entities/Counter/model/slice/counterSlice';
import { userReducer } from '5-entities/User';
import { StateSchema } from './StateSchema';

// Чтобы переиспользовать и отдельно создавать стор (для jesta, сторибука)
export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: countersReducer,
            user: userReducer,
            login: loginReducer,
        },
        devTools: __IS_DEV__, // отключить девтулзы для продакшна
        preloadedState: initialState,
    });
}
