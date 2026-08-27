import { TeamCard } from '../../components/TeamCard/TeamCard';
import { teamMembers } from '../../data/team';
import styles from './Team.module.css';

export function Team() {
  return (
    <div className={styles.team}>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
