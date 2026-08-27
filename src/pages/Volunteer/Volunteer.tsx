import { Hero } from '../../components/Hero/Hero';
import { useTranslation } from '../../locales/context';
import styles from './Volunteer.module.css';

export function Volunteer() {
  const { t, ts } = useTranslation();

  return (
    <div className={styles.volunteer}>
      <Hero title={ts('volunteer.title')} image={ts('volunteer.heroImage')} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            {ts('volunteer.description').split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.introText}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.mission}>
            <h3 className={styles.subTitle}>{ts('volunteer.missionTitle')}</h3>
            <p className={styles.missionText}>{ts('volunteer.mission')}</p>
          </div>

          <div className={styles.howToParticipate}>
            <h3 className={styles.subTitle}>{ts('volunteer.howToParticipateTitle')}</h3>
            <p className={styles.howToParticipateText}>{ts('volunteer.howToParticipate')}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{ts('volunteer.requirementsTitle')}</h3>
              <p className={styles.cardSubtitle}>{ts('volunteer.requirementsSubtitle')}</p>
              <ul className={styles.list}>
                {(t('volunteer.requirements') as string[]).map((req, index) => (
                  <li key={index} className={styles.listItem}>{req}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{ts('volunteer.areasTitle')}</h3>
              <p className={styles.cardSubtitle}>{ts('volunteer.areasSubtitle')}</p>
              <ol className={styles.numberedList}>
                {(t('volunteer.areas') as string[]).map((area, index) => (
                  <li key={index} className={styles.numberedItem}>{area}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.cardFull}>
            <h3 className={styles.cardTitle}>{ts('volunteer.functionsTitle')}</h3>
            <ul className={styles.list}>
              {(t('volunteer.functions') as string[]).map((func, index) => (
                <li key={index} className={styles.listItem}>{func}</li>
              ))}
            </ul>
          </div>

          <div className={styles.materials}>
            <h3 className={styles.subTitle}>{ts('volunteer.materialsTitle')}</h3>
            <p className={styles.materialsText}>{ts('volunteer.materials')}</p>
          </div>

          <div className={styles.cardFull}>
            <h3 className={styles.cardTitle}>{ts('volunteer.benefitsTitle')}</h3>
            <p className={styles.cardSubtitle}>{ts('volunteer.benefitsSubtitle')}</p>
            <ul className={styles.list}>
              {(t('volunteer.benefits') as string[]).map((benefit, index) => (
                <li key={index} className={styles.listItem}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.subTitle}>{ts('volunteer.contactTitle')}</h3>
            <p className={styles.contactText}>{ts('volunteer.contactText')}</p>
          </div>

          <div className={styles.note}>
            <p>{ts('volunteer.note')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
