import React from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as Provider } from 'posthog-js/react';

posthog.init(
    process.env.REACT_APP_POSTHOG_KEY,
    {
        api_host: 'https://app.posthog.com',
        // autocapture: false, // отключает захват действий у инпутов, кнопок и тд, но включает тепловую карту кликов
    },
);

interface PostHogProviderProps{
    children?: React.ReactNode;
}

export const PostHogProvider = (props: PostHogProviderProps) => {
    const { children } = props;

    return (
        <Provider client={posthog}>
            {children}
        </Provider>
    );
};
