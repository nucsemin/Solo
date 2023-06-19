import { Theme } from '1-app/providers/ThemeProvider';
import { MainPage } from '2-pages/MainPage';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageAsyncLight: Story = {};

export const MainPageAsyncDark: Story = {};
MainPageAsyncDark.decorators = [ThemeDecorator(Theme.DARK)];
