import { Theme } from '1-app/providers/ThemeProvider';
import { Navbar } from '3-widgets/Navbar/ui';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {};

export const NavbarDark: Story = {};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
