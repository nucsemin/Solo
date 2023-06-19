import { Theme } from '1-app/providers/ThemeProvider';
import { Loader } from '6-shared/ui/Loader/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const AppLinkPrimary: Story = {
};
