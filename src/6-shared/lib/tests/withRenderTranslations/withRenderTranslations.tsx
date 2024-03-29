import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '6-shared/config/i18n/i18nForTests';

export function withRenderTranslation(component: React.ReactNode) {
    render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    );
}
