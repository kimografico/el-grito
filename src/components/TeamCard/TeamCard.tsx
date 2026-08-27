import { Link } from 'react-router-dom';
import type { TeamMember } from '../../data/team';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Link to={`/equipo/${member.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={member.image} alt={member.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
      </div>
    </Link>
  );
}
