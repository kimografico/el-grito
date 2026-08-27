import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { TeamCard } from './TeamCard';

const meta: Meta<typeof TeamCard> = {
  title: 'Components/TeamCard',
  component: TeamCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: '300px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Default: Story = {
  args: {
    member: {
      id: 'lidia-aparicio',
      name: 'Lidia Aparicio Sales',
      role: 'Directora – Guionista',
      image: '/images/team/lidia-aparicio.jpg',
      bio: 'Test bio',
      category: 'team',
    },
  },
};

export const Artist: Story = {
  args: {
    member: {
      id: 'kimo-saez',
      name: 'Kimo Sáez Blanco',
      role: 'Diseñador Gráfico',
      image: '/images/artists/kimo-saez.jpg',
      bio: 'Test bio',
      category: 'artists',
    },
  },
};
