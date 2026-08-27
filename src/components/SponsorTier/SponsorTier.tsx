import type { SponsorTier as SponsorTierType } from '../../data/sponsors';
import styles from './SponsorTier.module.css';

interface SponsorTierProps {
  tier: SponsorTierType;
}

export function SponsorTier({ tier }: SponsorTierProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={tier.icon} alt={tier.name} className={styles.icon} />
        <h3 className={styles.name}>{tier.name}</h3>
        <p className={styles.amount}>{tier.amount}</p>
      </div>
      <ul className={styles.benefits}>
        {tier.benefits.map((benefit, index) => (
          <li key={index} className={styles.benefit}>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
