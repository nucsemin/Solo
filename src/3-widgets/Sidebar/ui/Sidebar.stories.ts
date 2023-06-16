import { Theme } from '1-app/providers/ThemeProvider';
import { Sidebar } from '3-widgets/Sidebar/ui/Sidebar';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {};

export const SidebarDark: Story = {};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];
