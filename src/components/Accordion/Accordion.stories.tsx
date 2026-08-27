import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { title: '¿Qué es El Grito?', content: 'El GRITO es una serie documental enfocada al Medio Ambiente.' },
      { title: '¿Cómo participar?', content: 'Puedes participar como auspiciante, patrocinador o con canjes.' },
      { title: '¿Quiénes son el equipo?', content: 'Un equipo multidisciplinario de científicos, artistas y productores.' },
    ],
  },
};

export const WithReactNodeContent: Story = {
  args: {
    items: [
      {
        title: 'Contenido personalizado',
        content: (
          <div>
            <p>Esto es un párrafo con formato.</p>
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
            </ul>
          </div>
        ),
      },
      { title: 'Contenido simple', content: 'Texto plano de ejemplo.' },
    ],
  },
};
