import { Theme } from '1-app/providers/ThemeProvider';
import { ThemeSwitcher } from '3-widgets/ThemeSwitcher/ui';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherLight: Story = {};

export const ThemeSwitcherDark: Story = {};
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
