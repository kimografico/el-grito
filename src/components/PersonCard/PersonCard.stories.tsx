import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { PersonCard } from '../PersonCard/PersonCard';

const meta: Meta<typeof PersonCard> = {
  title: 'Components/PersonCard',
  component: PersonCard,
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
type Story = StoryObj<typeof PersonCard>;

export const TeamMember: Story = {
  args: {
    name: 'Lidia Aparicio Sales',
    image: '/images/team/lidia-aparicio.jpg',
    roleKey: 'teamRoles.lidia-aparicio',
    linkTo: '/equipo/lidia-aparicio',
  },
};

export const Artist: Story = {
  args: {
    name: 'Kimográfico',
    image: '/images/artists/kimo-saez.jpg',
    roleKey: 'artistRoles.kimo-saez',
    linkTo: '/equipo/kimo-saez',
  },
};
