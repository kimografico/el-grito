import { Hero } from '../../components/Hero/Hero';
import { OrganizationCard } from '../../components/OrganizationCard/OrganizationCard';
import { organizations } from '../../data/organizations';
import { useTranslation } from '../../locales/context';
import styles from './ScientificSupport.module.css';

export function ScientificSupport() {
  const { ts } = useTranslation();

  return (
    <div className={styles.scientificSupport}>
      <Hero
        title={ts('pages.scientificSupportTitle')}
        image="/images/decorative/pexels-scientist.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {organizations.map((organization) => (
              <OrganizationCard key={organization.id} organization={organization} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
