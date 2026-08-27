import { useParams, Link } from 'react-router-dom';
import { scientists } from '../../data/scientists';
import { useTranslation } from '../../locales/context';
import styles from './MemberDetail.module.css';

export function ScientistDetail() {
  const { slug } = useParams<{ slug: string }>();
  const scientist = slug ? scientists.find(s => s.id === slug) : undefined;
  const { t, ts } = useTranslation();

  if (!scientist) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>{ts('pages.scientistNotFound')}</h1>
          <Link to="/comunidad-cientifica">{ts('pages.backToScientificCommunity')}</Link>
        </div>
      </div>
    );
  }

  const bioData = t(`scientistBios.${scientist.id}`) as { role: string; bio: string; location: string } | string;
  const role = typeof bioData === 'object' ? bioData?.role : '';
  const bio = typeof bioData === 'object' ? bioData?.bio : '';
  const location = typeof bioData === 'object' ? bioData?.location : '';

  return (
    <div className={styles.detail}>
      <section className={styles.section}>
        <div className="container">
          <Link to="/comunidad-cientifica" className={styles.backLink}>
            ← {ts('pages.backToScientificCommunity')}
          </Link>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src={scientist.image} alt={scientist.name} className={styles.image} />
            </div>

            <div className={styles.infoSection}>
              <p className={styles.role}>{role}</p>
              <h1 className={styles.name}>{scientist.name}</h1>
              {location && (
                <p className={styles.location}>{location}</p>
              )}

              <div className={styles.bio}>
                {(bio as string).split('\n\n').map((paragraph, index) => (
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
