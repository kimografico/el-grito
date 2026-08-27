import { useParams, Link } from 'react-router-dom';
import { getMemberBySlug } from '../../data/team';
import styles from './MemberDetail.module.css';

export function MemberDetail() {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getMemberBySlug(slug) : undefined;

  if (!member) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Miembro no encontrado</h1>
          <Link to="/equipo">Volver al equipo</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <section className={styles.section}>
        <div className="container">
          <Link to="/equipo" className={styles.backLink}>
            ← Volver al equipo
          </Link>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src={member.image} alt={member.name} className={styles.image} />
            </div>

            <div className={styles.infoSection}>
              <p className={styles.role}>{member.role}</p>
              <h1 className={styles.name}>{member.name}</h1>

              <div className={styles.bio}>
                {member.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
