import { Hero } from '../../components/Hero/Hero';
import { siteContent } from '../../data/content';
import styles from './Volunteer.module.css';

export function Volunteer() {
  const { volunteer } = siteContent;

  return (
    <div className={styles.volunteer}>
      <Hero title={volunteer.title} subtitle={volunteer.description} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.mission}>
            <h3 className={styles.missionTitle}>Misión</h3>
            <p className={styles.missionText}>{volunteer.mission}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Requisitos</h3>
              <ul className={styles.list}>
                {volunteer.requirements.map((req, index) => (
                  <li key={index} className={styles.listItem}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Áreas temáticas</h3>
              <ul className={styles.list}>
                {volunteer.areas.map((area, index) => (
                  <li key={index} className={styles.listItem}>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Beneficios</h3>
              <ul className={styles.list}>
                {volunteer.benefits.map((benefit, index) => (
                  <li key={index} className={styles.listItem}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.note}>
            <p>{volunteer.note}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
