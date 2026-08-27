import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <div className={styles.icon}>✉</div>

        <h2 className={styles.title}>Contáctanos</h2>

        <p className={styles.text}>
          Si deseas ponerse en contacto con nuestro equipo, puedes escribirnos
          a la siguiente dirección de correo electrónico:
        </p>

        <a
          href="mailto:info@elgritodelanaturaleza.com"
          className={styles.email}
        >
          info@elgritodelanaturaleza.com
        </a>

        <a
          href="mailto:info@elgritodelanaturaleza.com"
          className={styles.button}
        >
          Enviar email
        </a>

        <p className={styles.note}>
          NOTA: Si no tienes configurado un cliente de correo en tu dispositivo,
          es posible que el botón no funcione correctamente. En ese caso,
          puedes copiar la dirección de correo y enviar tu mensaje manualmente
          desde tu aplicación de correo habitual.
        </p>
      </div>
    </div>
  );
}
