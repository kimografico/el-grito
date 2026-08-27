import styles from './InstagramGallery.module.css';

export function InstagramGallery() {
  return (
    <div className={styles.container}>
      <div className={styles.embedWrapper}>
        <iframe
          src="https://www.instagram.com/el_grito_de_la_naturaleza/embed/"
          className={styles.iframe}
          title="Instagram Gallery"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
        />
      </div>
      <a
        href="https://www.instagram.com/el_grito_de_la_naturaleza/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.followLink}
      >
        Síguenos en Instagram →
      </a>
    </div>
  );
}
