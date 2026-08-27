import type { Meta, StoryObj } from '@storybook/react';
import { TranslatedList } from './TranslatedList';

const meta: Meta<typeof TranslatedList> = {
  title: 'Components/TranslatedList',
  component: TranslatedList,
};

export default meta;
type Story = StoryObj<typeof TranslatedList>;

export const Unordered: Story = {
  args: {
    items: ['Primer elemento', 'Segundo elemento', 'Tercer elemento'],
  },
};

export const Ordered: Story = {
  args: {
    items: ['Paso uno', 'Paso dos', 'Paso tres'],
    ordered: true,
  },
};
