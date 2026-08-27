import { img } from '../../config/constants';
import { Hero } from '../../components/Hero/Hero';
import { useTranslation } from '../../locales/context';
import styles from './Home.module.css';

export function Home() {
  const { t, ts } = useTranslation();

  return (
    <div className={styles.home}>
      <Hero showLogo image={img('/images/decorative/antique-map-background.jpg')} />

      <section className="section">
        <div className="container">
          <div className={styles.twoColumns}>
            <div className={styles.columnText}>
              <h2 className={styles.heroTitle}>
                {ts('home.heroTitle')}
              </h2>
              <p>
                {ts('home.heroDescription1')}
              </p>
              <p>
                {ts('home.heroDescription2')}
              </p>
              <p>
                {ts('home.heroDescription3')}
              </p>
            </div>
            <div className={styles.columnImage}>
              <img
                src={img('/images/decorative/mono-ardilla.png')}
                alt={ts('pages.altMonoArdilla')}
                className={styles.shadowImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.parallaxQuote}
        style={{ backgroundImage: `url(${img('/images/decorative/volcan-cotopaxi-painting.jpg')})` }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            {ts('home.quote')}
          </blockquote>
        </div>
      </section>

      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.structureTitle}>{ts('home.structureTitle')}</h2>
          <div className={styles.structureDescription}>
            <p>{ts('home.structureIntro')}</p>
            <p>{ts('home.structureBody')}</p>
            <p>{ts('home.structureProcesses')}</p>
          </div>

          <div className={styles.phases}>
            {(t('home.phases') as { title: string; description: string; image?: string; content?: string[] }[]).map((phase, index) => (
              <div key={index} className={styles.phaseRow}>
                {phase.image ? (
                  <div className={styles.phaseImage}>
                    <img src={phase.image} alt={phase.title} />
                  </div>
                ) : (
                  <div className={styles.phaseImagePlaceholder} />
                )}
                <div className={styles.phaseContent}>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  <div className={styles.phaseDescription}>
                    {phase.content ? (
                      phase.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{phase.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.parallaxQuote}
        style={{ backgroundImage: `url(${img('/images/decorative/nature-landscape-parallax.jpg')})` }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            {ts('home.quote2')}
          </blockquote>
        </div>
      </section>
    </div>
  );
}
