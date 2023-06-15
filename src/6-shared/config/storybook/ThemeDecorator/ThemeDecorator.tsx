import { Decorator } from '@storybook/react';
import { Theme } from '../../../../1-app/providers/ThemeProvider/lib/ThemeContext';

const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);

export default ThemeDecorator;
