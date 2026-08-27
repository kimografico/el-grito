import { Hero } from '../../components/Hero/Hero';
import { Accordion } from '../../components/Accordion/Accordion';
import { siteContent } from '../../data/content';
import { sponsorTiers } from '../../data/sponsors';
import styles from './Sponsors.module.css';

export function Sponsors() {
  const { sponsors } = siteContent;

  const participationWithExchange = [
    ...sponsors.participationTypes,
    {
      title: sponsors.exchangeTitle,
      content: (
        <>
          <p className={styles.accordionText}>{sponsors.exchangeDescription}</p>
          <ul className={styles.accordionList}>
            {sponsors.exchangeExamples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
          <p className={styles.accordionText}>{sponsors.exchangeNote}</p>
          <p className={styles.accordionNote}>{sponsors.sponsorshipNote}</p>
        </>
      ),
    },
  ];

  return (
    <div className={styles.sponsors}>
      <Hero
        title="Recompensas"
        image="/images/decorative/antique-map-background.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>{sponsors.title}</h1>
            <img src="/images/logo/logo-full.png" alt="El Grito" className={styles.logo} />
          </div>

          <div className={styles.introText}>
            {sponsors.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>
                {index === 0 && <strong>{paragraph}</strong>}
                {index !== 0 && paragraph}
              </p>
            ))}
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>{sponsors.sustainabilityTitle}</h2>
            <p className={styles.cardIntro}>{sponsors.sustainabilityIntro}</p>

            <div className={styles.areas}>
              {sponsors.sustainabilityAreas.map((area, index) => (
                <div key={index} className={styles.area}>
                  <img
                    src={area.icon}
                    alt={area.title}
                    className={styles.areaIcon}
                  />
                  <div className={styles.areaText}>
                    <h4 className={styles.areaTitle}>{area.title}</h4>
                    <p className={styles.areaDescription}>{area.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sustainabilityBody}>
              {sponsors.sustainabilityBody.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <a href="#" className={styles.testButton}>
              {sponsors.testButton}
            </a>
          </div>

          <div className={styles.legislation}>
            <h3 className={styles.legislationTitle}>{sponsors.legislationTitle}</h3>
            <p className={styles.legislationText}>{sponsors.legislationText}</p>
            <ul className={styles.legislationLaws}>
              {sponsors.legislationLaws.map((law, index) => (
                <li key={index} className={styles.law}>{law}</li>
              ))}
            </ul>
            <p className={styles.legislationExtra}>{sponsors.legislationExtra}</p>
          </div>

          <div className={styles.participation}>
            <h3 className={styles.participationTitle}>{sponsors.participationTitle}</h3>
            <Accordion items={participationWithExchange} />
          </div>

          <h3 className={styles.tiersTitle}>Hay cinco formas de patrocinar la serie documental EL GRITO:</h3>

          <div className={styles.tiers}>
            {sponsorTiers.map((tier) => (
              <div key={tier.id} className={styles.tierCard}>
                <div className={styles.tierImage}>
                  <img src={tier.icon} alt={tier.name} />
                </div>
                <div className={styles.tierContent}>
                  <img
                    src={`/images/sponsors/${tier.id}.png`}
                    alt={tier.name}
                    className={styles.tierIcon}
                  />
                  <h3 className={styles.tierName}>{tier.name}</h3>
                  <p className={styles.tierDescription}>{tier.description}</p>
                  <p className={styles.tierAmount}>{tier.amount}</p>
                  <ul className={styles.tierBenefits}>
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className={styles.benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
