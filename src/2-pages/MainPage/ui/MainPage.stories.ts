import { Theme } from '1-app/providers/ThemeProvider';
import { MainPageAsync } from '2-pages/MainPage/ui/MainPage.async';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainPageAsync> = {
    title: 'pages/MainPage',
    component: MainPageAsync,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPageAsync>;

export const MainPageAsyncLight: Story = {};

export const MainPageAsyncDark: Story = {};
MainPageAsyncDark.decorators = [ThemeDecorator(Theme.DARK)];
