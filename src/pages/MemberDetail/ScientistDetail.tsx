import { useParams, Link } from 'react-router-dom';
import { scientists } from '../../data/scientists';
import styles from './MemberDetail.module.css';

export function ScientistDetail() {
  const { slug } = useParams<{ slug: string }>();
  const scientist = slug ? scientists.find(s => s.id === slug) : undefined;

  if (!scientist) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Científico no encontrado</h1>
          <Link to="/comunidad-cientifica">Volver a comunidad científica</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <section className={styles.section}>
        <div className="container">
          <Link to="/comunidad-cientifica" className={styles.backLink}>
            ← Volver a comunidad científica
          </Link>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src={scientist.image} alt={scientist.name} className={styles.image} />
            </div>

            <div className={styles.infoSection}>
              <p className={styles.role}>{scientist.role}</p>
              <h1 className={styles.name}>{scientist.name}</h1>
              {scientist.location && (
                <p className={styles.location}>{scientist.location}</p>
              )}

              <div className={styles.bio}>
                {scientist.bio.split('\n\n').map((paragraph, index) => (
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
