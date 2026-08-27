import { TeamCard } from '../../components/TeamCard/TeamCard';
import { artists } from '../../data/team';
import styles from './Artists.module.css';

export function Artists() {
  return (
    <div className={styles.artists}>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {artists.map((artist) => (
              <TeamCard key={artist.id} member={artist} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
