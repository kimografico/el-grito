import type { Meta, StoryObj } from '@storybook/react';
import { OrganizationCard } from './OrganizationCard';

const meta: Meta<typeof OrganizationCard> = {
  title: 'Components/OrganizationCard',
  component: OrganizationCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrganizationCard>;

export const Default: Story = {
  args: {
    organization: {
      id: 'migramar',
      name: 'MIGRAMAR',
      logo: '/images/organizations/migramar.png',
      website: 'https://www.migramar.org/en/index',
    },
  },
};
