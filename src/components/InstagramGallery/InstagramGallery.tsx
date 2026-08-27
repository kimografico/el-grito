import { useTranslation } from '../../locales/context';
import { INSTAGRAM_USERNAME } from '../../config/constants';
import styles from './InstagramGallery.module.css';

export function InstagramGallery() {
  const { ts } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.embedWrapper}>
        <iframe
          src={`https://www.instagram.com/${INSTAGRAM_USERNAME}/embed/`}
          className={styles.iframe}
          title="Instagram Gallery"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <a
        href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.followLink}
      >
        {ts('pages.followInstagram')} →
      </a>
    </div>
  );
}
