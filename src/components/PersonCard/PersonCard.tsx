import { Link } from 'react-router-dom';
import { useTranslation } from '../../locales/context';
import styles from './PersonCard.module.css';

interface PersonCardProps {
  name: string;
  image: string;
  roleKey: string;
  linkTo: string;
}

export function PersonCard({ name, image, roleKey, linkTo }: PersonCardProps) {
  const { t } = useTranslation();
  const role = t(roleKey) as string;

  return (
    <Link to={linkTo} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </Link>
  );
}
