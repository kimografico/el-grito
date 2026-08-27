import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

const meta: Meta<typeof ContactModal> = {
  title: 'Components/ContactModal',
  component: ContactModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContactModal>;

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Abrir modal
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
