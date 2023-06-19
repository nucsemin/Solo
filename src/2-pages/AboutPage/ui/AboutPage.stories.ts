import { Theme } from '1-app/providers/ThemeProvider';
import { AboutPageAsync } from '2-pages/AboutPage/ui/AboutPage.async';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutPageAsync> = {
    title: 'pages/AboutPage',
    component: AboutPageAsync,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPageAsync>;

export const AboutPageAsyncLight: Story = {};

export const AboutPageAsyncDark: Story = {};
AboutPageAsyncDark.decorators = [ThemeDecorator(Theme.DARK)];
