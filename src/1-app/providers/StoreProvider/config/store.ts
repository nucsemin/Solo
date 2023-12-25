import { configureStore } from '@reduxjs/toolkit';

// Чтобы переиспользовать и отдельно создавать стор (для jesta, сторибука)
export function createReduxStore() {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__, // отключить девтулзы для продакшна
    });
}
