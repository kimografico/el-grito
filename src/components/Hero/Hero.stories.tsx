import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'El Grito de la Naturaleza',
    subtitle: 'Una serie documental sobre la destrucción del medio ambiente',
  },
};

export const WithImage: Story = {
  args: {
    title: '¿Te imaginas qué sería del mundo?',
    subtitle: '¿Qué podría pasar si seguimos con nuestros hábitos insostenibles?',
    image: '/images/decorative/mono-ardilla.png',
  },
};
