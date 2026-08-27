import type { Meta, StoryObj } from '@storybook/react';
import { InstagramGallery } from './InstagramGallery';

const meta: Meta<typeof InstagramGallery> = {
  title: 'Components/InstagramGallery',
  component: InstagramGallery,
};

export default meta;
type Story = StoryObj<typeof InstagramGallery>;

export const Default: Story = {};
