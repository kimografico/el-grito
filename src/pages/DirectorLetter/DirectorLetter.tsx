import { useTranslation } from '../../locales/context';
import styles from './DirectorLetter.module.css';

export function DirectorLetter() {
  const { ts } = useTranslation();

  return (
    <div className={styles.letter}>
      <section
        className={styles.parallaxQuote}
        style={{ backgroundImage: 'url(/images/decorative/laguna-grande.png)' }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            {ts('directorLetter.quote')}
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.paper}>
            <h1 className={styles.title}>{ts('directorLetter.title')}</h1>
            <p className={styles.location}>{ts('directorLetter.location')}</p>

            <div className={styles.content}>
              <p className={styles.quoteIntro}>
                &ldquo; <strong>{ts('directorLetter.quoteText')}</strong> &rdquo;.
              </p>
              {ts('directorLetter.content').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.signature}>
              <img
                src={ts('directorLetter.signature')}
                alt={ts('directorLetter.signatureAlt')}
                className={styles.signatureImage}
              />
              <p className={styles.author}>{ts('directorLetter.author')}</p>
              <p className={styles.authorRole}>{ts('directorLetter.authorRole')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
