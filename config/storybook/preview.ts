import type { Preview } from '@storybook/react';
import StyleDecorator from '../../src/6-shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/1-app/providers/ThemeProvider/lib/ThemeContext';
import '1-app/styles/index.scss'; // dont work

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
