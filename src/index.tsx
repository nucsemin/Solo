import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '1-app/providers/ErrorBoundary';
import { StoreProvider } from '1-app/providers/StoreProvider';
import { PostHogProvider } from '1-app/providers/PostHogProvider';
import App from './1-app/App';
import { ThemeProvider } from './1-app/providers/ThemeProvider';
import '6-shared/config/i18n/i18n';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <PostHogProvider>
                        <App />
                    </PostHogProvider>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
