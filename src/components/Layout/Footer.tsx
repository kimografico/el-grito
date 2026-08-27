import { siteContent } from '../../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          {siteContent.copyright} //{' '}
          <a
            href={siteContent.webDesignUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteContent.webDesign}
          </a>
        </p>
      </div>
    </footer>
  );
}
