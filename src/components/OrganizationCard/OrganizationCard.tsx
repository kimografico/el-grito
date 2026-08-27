import type { Organization } from '../../data/organizations';
import styles from './OrganizationCard.module.css';

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={organization.logo} alt={organization.name} className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{organization.name}</h3>
        <p className={styles.location}>{organization.location}</p>
        <p className={styles.description}>{organization.description}</p>
        <a
          href={organization.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Visitar web →
        </a>
      </div>
    </div>
  );
}
