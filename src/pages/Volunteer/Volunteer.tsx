import { Hero } from '../../components/Hero/Hero';
import { siteContent } from '../../data/content';
import styles from './Volunteer.module.css';

export function Volunteer() {
  const { volunteer } = siteContent;

  return (
    <div className={styles.volunteer}>
      <Hero title={volunteer.title} image={volunteer.heroImage} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            {volunteer.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.introText}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.mission}>
            <h3 className={styles.subTitle}>Misión</h3>
            <p className={styles.missionText}>{volunteer.mission}</p>
          </div>

          <div className={styles.howToParticipate}>
            <h3 className={styles.subTitle}>¿Cómo puedo ser parte del Programa de Voluntariado EL GRITO?</h3>
            <p className={styles.howToParticipateText}>{volunteer.howToParticipate}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Requisitos</h3>
              <p className={styles.cardSubtitle}>Buscamos voluntarios con:</p>
              <ul className={styles.list}>
                {volunteer.requirements.map((req, index) => (
                  <li key={index} className={styles.listItem}>{req}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Áreas temáticas</h3>
              <p className={styles.cardSubtitle}>Áreas que forman parte del programa de Voluntariado:</p>
              <ol className={styles.numberedList}>
                {volunteer.areas.map((area, index) => (
                  <li key={index} className={styles.numberedItem}>{area}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.cardFull}>
            <h3 className={styles.cardTitle}>Funciones</h3>
            <ul className={styles.list}>
              {volunteer.functions.map((func, index) => (
                <li key={index} className={styles.listItem}>{func}</li>
              ))}
            </ul>
          </div>

          <div className={styles.materials}>
            <h3 className={styles.subTitle}>Materiales que necesita traer el voluntario/a</h3>
            <p className={styles.materialsText}>{volunteer.materials}</p>
          </div>

          <div className={styles.cardFull}>
            <h3 className={styles.cardTitle}>¿Cuáles son los beneficios del Programa de Voluntariado?</h3>
            <p className={styles.cardSubtitle}>Al realizar tu voluntariado en EL GRITO, la Asociación te ofrece:</p>
            <ul className={styles.list}>
              {volunteer.benefits.map((benefit, index) => (
                <li key={index} className={styles.listItem}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.subTitle}>¿Cómo contactarnos?</h3>
            <p className={styles.contactText}>{volunteer.contactText}</p>
          </div>

          <div className={styles.note}>
            <p>{volunteer.note}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
