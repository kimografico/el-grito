import { useParams, Link } from 'react-router-dom';
import { getMemberBySlug } from '../../data/team';
import { useTranslation } from '../../locales/context';
import styles from './MemberDetail.module.css';

export function MemberDetail() {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getMemberBySlug(slug) : undefined;
  const { t, ts } = useTranslation();

  if (!member) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>{ts('pages.memberNotFound')}</h1>
          <Link to="/equipo">{ts('pages.backToTeam')}</Link>
        </div>
      </div>
    );
  }

  const bioKey = member.category === 'artists'
    ? `artistBios.${member.id}`
    : `teamBios.${member.id}`;
  const roleKey = member.category === 'artists'
    ? `artistBios.${member.id}.role`
    : `teamBios.${member.id}.role`;
  const backPath = member.category === 'artists' ? '/artistas' : '/equipo';
  const backLabel = member.category === 'artists' ? ts('pages.backToArtists') : ts('pages.backToTeam');
  const bioData = t(bioKey) as { role: string; bio: string } | string;
  const role = typeof bioData === 'object' ? bioData?.role : t(roleKey) as string;
  const bio = typeof bioData === 'object' ? bioData?.bio : '';

  return (
    <div className={styles.detail}>
      <section className={styles.section}>
        <div className="container">
          <Link to={backPath} className={styles.backLink}>
            ← {backLabel}
          </Link>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src={member.image} alt={member.name} className={styles.image} />
            </div>

            <div className={styles.infoSection}>
              <p className={styles.role}>{role}</p>
              <h1 className={styles.name}>{member.name}</h1>

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
