import { useTranslation } from '../../locales/context';
import { CONTACT_EMAIL } from '../../config/constants';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { ts } = useTranslation();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label={ts('contact.modalCloseLabel')}>
          ×
        </button>

        <div className={styles.icon}>✉</div>

        <h2 className={styles.title}>{ts('contact.modalTitle')}</h2>

        <p className={styles.text}>
          {ts('contact.modalText')}
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={styles.email}
        >
          {CONTACT_EMAIL}
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={styles.button}
        >
          {ts('contact.modalSendEmail')}
        </a>

        <p className={styles.note}>
          {ts('contact.modalNote')}
        </p>
      </div>
    </div>
  );
}
