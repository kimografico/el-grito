import { useTranslation } from '../../locales/context';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${locale === 'es' ? styles.active : ''}`}
        onClick={() => setLocale('es')}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
