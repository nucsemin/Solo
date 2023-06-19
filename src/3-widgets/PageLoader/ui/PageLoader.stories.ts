import { Theme } from '1-app/providers/ThemeProvider';
import { PageLoader } from '3-widgets/PageLoader/ui';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const PageLoaderLight: Story = {};

export const PageLoaderDark: Story = {};
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
