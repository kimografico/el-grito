import type { Meta, StoryObj } from '@storybook/react';
import { TranslatedParagraphs } from './TranslatedParagraphs';

const meta: Meta<typeof TranslatedParagraphs> = {
  title: 'Components/TranslatedParagraphs',
  component: TranslatedParagraphs,
};

export default meta;
type Story = StoryObj<typeof TranslatedParagraphs>;

export const Default: Story = {
  args: {
    text: 'Este es el primer párrafo.\n\nEste es el segundo párrafo con más contenido.\n\nY este es el tercero.',
  },
};

export const SingleParagraph: Story = {
  args: {
    text: 'Solo hay un párrafo en este texto.',
  },
};
