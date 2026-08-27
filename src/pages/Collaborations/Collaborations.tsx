import { Link } from 'react-router-dom';
import { Hero } from '../../components/Hero/Hero';
import { siteContent } from '../../data/content';
import { scientists } from '../../data/scientists';
import styles from './Collaborations.module.css';

export function Collaborations() {
  const { collaborations } = siteContent;

  return (
    <div className={styles.collaborations}>
      <Hero
        title={collaborations.title}
        image="/images/decorative/pexels-scientist.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.introText}>
            {collaborations.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.disasterImage}>
            <img src="/images/decorative/disaster.png" alt="Desastre" />
          </div>

          <div className={styles.specialties}>
            <h3 className={styles.specialtiesTitle}>{collaborations.specialtiesTitle}</h3>
            <ul className={styles.specialtiesList}>
              {collaborations.specialties.map((specialty, index) => (
                <li key={index} className={styles.specialty}>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.collabImage}>
            <img src="/images/decorative/scientist-collab.jpg" alt="Científicos colaborando" />
          </div>

          <div className={styles.callToAction}>
            <strong>{collaborations.callToAction}</strong>
          </div>

          <div className={styles.participationText}>
            {collaborations.participationText.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className={styles.scientistsTitle}>{collaborations.scientistsTitle}</h2>

          <div className={styles.scientistsCarousel}>
            <div className={styles.scientistsTrack}>
              {scientists.map((scientist) => (
                <Link
                  key={scientist.id}
                  to={`/cientifico/${scientist.id}`}
                  className={styles.scientistSlide}
                >
                  <img
                    src={scientist.image}
                    alt={scientist.name}
                    className={styles.scientistPhoto}
                  />
                </Link>
              ))}
              {scientists.map((scientist) => (
                <Link
                  key={`dup-${scientist.id}`}
                  to={`/cientifico/${scientist.id}`}
                  className={styles.scientistSlide}
                >
                  <img
                    src={scientist.image}
                    alt={scientist.name}
                    className={styles.scientistPhoto}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
