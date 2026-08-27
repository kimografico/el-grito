import type { Meta, StoryObj } from '@storybook/react';
import { SponsorTier } from './SponsorTier';

const meta: Meta<typeof SponsorTier> = {
  title: 'Components/SponsorTier',
  component: SponsorTier,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SponsorTier>;

export const Tierra: Story = {
  args: {
    tier: {
      id: 'tierra',
      name: 'TIERRA',
      icon: '/images/sponsors/tierra.jpg',
      description: 'Entidades o particulares que aportan donaciones económicas a partir de $5,000',
      amount: 'Desde $5,000',
      benefits: [
        'Logotipo destacado como patrocinador principal',
        'Entrevista de 5 minutos',
        'Difusión en ruedas de prensa',
        'Photo Call y Roll ups',
      ],
    },
  },
};

export const Madera: Story = {
  args: {
    tier: {
      id: 'madera',
      name: 'MADERA',
      icon: '/images/sponsors/madera.jpg',
      description: 'Entidades o particulares que aportan donaciones económicas a partir de $250',
      amount: 'Desde $250',
      benefits: [
        'Logotipo quinario como patrocinador',
        'Mención en ruedas de prensa',
      ],
    },
  },
};
