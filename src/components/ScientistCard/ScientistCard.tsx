import { Link } from 'react-router-dom';
import type { Scientist } from '../../data/scientists';
import styles from './ScientistCard.module.css';

interface ScientistCardProps {
  scientist: Scientist;
}

export function ScientistCard({ scientist }: ScientistCardProps) {
  return (
    <Link to={`/comunidad-cientifica#${scientist.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={scientist.image} alt={scientist.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{scientist.name}</h3>
        <p className={styles.role}>{scientist.role}</p>
      </div>
    </Link>
  );
}
