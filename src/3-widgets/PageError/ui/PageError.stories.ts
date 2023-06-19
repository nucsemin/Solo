import { Theme } from '1-app/providers/ThemeProvider';
import { PageError } from '3-widgets/PageError/ui';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {};

export const PageErrorDark: Story = {};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
