import { useTranslation } from '../../locales/context';
import styles from './Footer.module.css';

export function Footer() {
  const { ts } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          {ts('global.copyright')} //{' '}
          <a
            href={ts('global.webDesignUrl')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ts('global.webDesign')}
          </a>
        </p>
      </div>
    </footer>
  );
}
