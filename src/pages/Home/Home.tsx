import { Hero } from '../../components/Hero/Hero';
import { siteContent } from '../../data/content';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <Hero showLogo image="/images/decorative/antique-map-background.jpg" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.twoColumns}>
            <div className={styles.columnText}>
              <h2 className={styles.heroTitle}>
                ¿Te imaginas qué sería del mundo en un futuro?
              </h2>
              <p>
                ¿Qué podría pasar si seguimos con nuestros hábitos insostenibles? y
                haciendo caso omiso sobre lo que pasa en nuestro planeta Tierra.
              </p>
              <p>
                El GRITO es una serie documental que se refiere a la destrucción del
                medio ambiente producida por la especie humana, como el cambio climático,
                contaminación, deforestación, etc.
              </p>
              <p>
                Será narrado, desde un punto de vista original, con la colaboración de
                científicos, artistas, creativos de diferentes especialidades, la idea es
                buscar, por medio de esta fusión, llegar a la emoción, alentar a la
                humanidad a que ponga en funcionamiento su talento en pos de las buenas
                causas a favor de la Tierra.
              </p>
            </div>
            <div className={styles.columnImage}>
              <img
                src="/images/decorative/mono-ardilla.png"
                alt="Mono Ardilla"
                className={styles.shadowImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.parallaxQuote}
        style={{ backgroundImage: 'url(/images/decorative/volcan-cotopaxi-painting.jpg)' }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            {siteContent.home.quote}
          </blockquote>
        </div>
      </section>

      <section className={styles.structureSection}>
        <div className="container">
          <h2 className={styles.structureTitle}>{siteContent.home.structureTitle}</h2>
          <div className={styles.structureDescription}>
            <p>{siteContent.home.structureIntro}</p>
            <p>{siteContent.home.structureBody}</p>
            <p>{siteContent.home.structureProcesses}</p>
          </div>

          <div className={styles.phases}>
            {siteContent.home.phases.map((phase, index) => (
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
        style={{ backgroundImage: 'url(/images/decorative/nature-landscape-parallax.jpg)' }}
      >
        <div className={styles.parallaxOverlay}>
          <blockquote className={styles.parallaxText}>
            «Sentí un grito que atravesaba la naturaleza»
          </blockquote>
        </div>
      </section>
    </div>
  );
}
