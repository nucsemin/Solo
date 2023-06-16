import { Theme } from '1-app/providers/ThemeProvider';
import { BugButton } from '3-widgets/BugButton/ui/BugButton';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BugButton> = {
    title: 'widgets/BugButton',
    component: BugButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BugButton>;

export const LangSwitcherLight: Story = {};

export const LangSwitcherDark: Story = {};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
