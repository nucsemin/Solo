import { Theme } from '1-app/providers/ThemeProvider';
import { LangSwitcher } from '3-widgets/LangSwitcher/ui';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LangSwitcher> = {
    title: 'widgets/LangSwithcer',
    component: LangSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const LangSwitcherLight: Story = {};

export const LangSwitcherDark: Story = {};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
