import { Theme } from '1-app/providers/ThemeProvider';
import { AboutPage } from '2-pages/AboutPage';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageAsyncLight: Story = {};

export const AboutPageAsyncDark: Story = {};
AboutPageAsyncDark.decorators = [ThemeDecorator(Theme.DARK)];
