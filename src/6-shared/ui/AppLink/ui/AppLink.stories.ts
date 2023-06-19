import { Theme } from '1-app/providers/ThemeProvider';
import ThemeDecorator from '6-shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from '6-shared/ui/AppLink/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppLink> = {
    title: 'widgets/AppLink',
    component: AppLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkPrimary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const AppLinkSecondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const AppLinkPrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkSecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
