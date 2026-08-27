import { Hero } from '../../components/Hero/Hero';
import { OrganizationCard } from '../../components/OrganizationCard/OrganizationCard';
import { organizations } from '../../data/organizations';
import styles from './ScientificSupport.module.css';

export function ScientificSupport() {
  return (
    <div className={styles.scientificSupport}>
      <Hero
        title="Apoyo Científico"
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
