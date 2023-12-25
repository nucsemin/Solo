import React from 'react';
import { createReduxStore } from '1-app/providers/StoreProvider/config/store';
import { Provider } from 'react-redux';

interface StoreProviderProps{
  children?: React.ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
    } = props;

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
