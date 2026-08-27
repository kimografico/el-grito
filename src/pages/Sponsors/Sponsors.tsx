import { Hero } from '../../components/Hero/Hero';
import { Accordion } from '../../components/Accordion/Accordion';
import { useTranslation } from '../../locales/context';
import { sponsorTiers as sponsorTiersData } from '../../data/sponsors';
import styles from './Sponsors.module.css';

interface TierTranslation {
  name: string;
  description: string;
  amount: string;
  benefits: string[];
}

export function Sponsors() {
  const { t, ts } = useTranslation();

  const participationTypes = t('sponsors.participationTypes') as { title: string; content: string }[];
  const exchangeExamples = t('sponsors.exchangeExamples') as string[];

  const participationWithExchange = [
    ...participationTypes,
    {
      title: ts('sponsors.exchangeTitle'),
      content: (
        <>
          <p className={styles.accordionText}>{ts('sponsors.exchangeDescription')}</p>
          <ul className={styles.accordionList}>
            {exchangeExamples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
          <p className={styles.accordionText}>{ts('sponsors.exchangeNote')}</p>
          <p className={styles.accordionNote}>{ts('sponsors.sponsorshipNote')}</p>
        </>
      ),
    },
  ];

  const sustainabilityAreas = t('sponsors.sustainabilityAreas') as { title: string; description: string; icon: string }[];
  const legislationLaws = t('sponsors.legislationLaws') as string[];

  const sponsorTiers = sponsorTiersData.map((tier) => {
    const translated = t(`sponsorTiers.${tier.id}`) as unknown as TierTranslation;
    return {
      ...tier,
      name: translated?.name ?? tier.name,
      description: translated?.description ?? tier.description,
      amount: translated?.amount ?? tier.amount,
      benefits: translated?.benefits ?? tier.benefits,
    };
  });

  return (
    <div className={styles.sponsors}>
      <Hero
        title={ts('sponsors.heroTitle')}
        image="/images/decorative/antique-map-background.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>{ts('sponsors.title')}</h1>
            <img src="/images/logo/logo-full.png" alt="El Grito" className={styles.logo} />
          </div>

          <div className={styles.introText}>
            {ts('sponsors.description').split('\n\n').map((paragraph, index) => (
              <p key={index}>
                {index === 0 && <strong>{paragraph}</strong>}
                {index !== 0 && paragraph}
              </p>
            ))}
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>{ts('sponsors.sustainabilityTitle')}</h2>
            <p className={styles.cardIntro}>{ts('sponsors.sustainabilityIntro')}</p>

            <div className={styles.areas}>
              {sustainabilityAreas.map((area, index) => (
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
              {ts('sponsors.sustainabilityBody').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* <a href="#" className={styles.testButton}>
              {ts('sponsors.testButton')}
            </a> */}
          </div>

          <div className={styles.legislation}>
            <h3 className={styles.legislationTitle}>{ts('sponsors.legislationTitle')}</h3>
            <p className={styles.legislationText}>{ts('sponsors.legislationText')}</p>
            <ul className={styles.legislationLaws}>
              {legislationLaws.map((law, index) => (
                <li key={index} className={styles.law}>{law}</li>
              ))}
            </ul>
            <p className={styles.legislationExtra}>{ts('sponsors.legislationExtra')}</p>
          </div>

          <div className={styles.participation}>
            <h3 className={styles.participationTitle}>{ts('sponsors.participationTitle')}</h3>
            <Accordion items={participationWithExchange} />
          </div>

          <h3 className={styles.tiersTitle}>{ts('sponsors.tiersTitle')}</h3>

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
