import type { Organization } from '../../data/organizations';
import { useTranslation } from '../../locales/context';
import styles from './OrganizationCard.module.css';

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  const { t, ts } = useTranslation();
  const orgData = t(`organizations.${organization.id}`) as { description: string; location: string } | string;

  const description = typeof orgData === 'object' ? orgData?.description : '';
  const location = typeof orgData === 'object' ? orgData?.location : '';

  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={organization.logo} alt={organization.name} className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{organization.name}</h3>
        <p className={styles.location}>{location}</p>
        <p className={styles.description}>{description}</p>
        <a
          href={organization.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {ts('pages.visitWebsite')} →
        </a>
      </div>
    </div>
  );
}
