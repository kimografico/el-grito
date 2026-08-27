import { siteContent } from '../../data/content';
import styles from './DirectorLetter.module.css';

export function DirectorLetter() {
  const { directorLetter } = siteContent;

  return (
    <div className={styles.letter}>
      <section
        className={styles.parallaxQuote}
        style={{ backgroundImage: 'url(/images/decorative/laguna-grande.png)' }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            «Sentí un grito que atravesaba la naturaleza»
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.paper}>
            <h1 className={styles.title}>{directorLetter.title}</h1>
            <p className={styles.location}>{directorLetter.location}</p>

            <div className={styles.content}>
              <p className={styles.quoteIntro}>
                &ldquo; <strong>Sentí un grito que atravesaba la naturaleza</strong> &rdquo;.
              </p>
              {directorLetter.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.signature}>
              <img
                src={directorLetter.signature}
                alt="Firma de Lidia Aparicio"
                className={styles.signatureImage}
              />
              <p className={styles.author}>{directorLetter.author}</p>
              <p className={styles.authorRole}>{directorLetter.authorRole}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
