import { useParams, Link } from 'react-router-dom';
import { getMemberBySlug } from '../../data/team';
import { scientists } from '../../data/scientists';
import { useTranslation } from '../../locales/context';
import styles from './PersonDetail.module.css';

interface PersonData {
  id: string;
  name: string;
  image: string;
  role: string;
  bio: string;
  location?: string;
  backTo: string;
  backLabel: string;
  notFoundMessage: string;
}

function usePersonData(): PersonData | null {
  const { slug } = useParams<{ slug: string }>();
  const { t, ts } = useTranslation();

  if (!slug) return null;

  const member = getMemberBySlug(slug);
  if (member) {
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

    return {
      id: member.id,
      name: member.name,
      image: member.image,
      role,
      bio: bio as string,
      backTo: backPath,
      backLabel,
      notFoundMessage: ts('pages.memberNotFound'),
    };
  }

  const scientist = scientists.find(s => s.id === slug);
  if (scientist) {
    const bioData = t(`scientistBios.${scientist.id}`) as { role: string; bio: string; location: string } | string;
    const role = typeof bioData === 'object' ? bioData?.role : '';
    const bio = typeof bioData === 'object' ? bioData?.bio : '';
    const location = typeof bioData === 'object' ? bioData?.location : '';

    return {
      id: scientist.id,
      name: scientist.name,
      image: scientist.image,
      role,
      bio: bio as string,
      location,
      backTo: '/comunidad-cientifica',
      backLabel: ts('pages.backToScientificCommunity'),
      notFoundMessage: ts('pages.scientistNotFound'),
    };
  }

  return null;
}

export function PersonDetail() {
  const person = usePersonData();
  const { ts } = useTranslation();

  if (!person) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>{ts('pages.memberNotFound')}</h1>
          <Link to="/equipo">{ts('pages.backToTeam')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <section className="section">
        <div className="container">
          <Link to={person.backTo} className={styles.backLink}>
            ← {person.backLabel}
          </Link>

          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src={person.image} alt={person.name} className={styles.image} />
            </div>

            <div className={styles.infoSection}>
              <p className={styles.role}>{person.role}</p>
              <h1 className={styles.name}>{person.name}</h1>
              {person.location && (
                <p className={styles.location}>{person.location}</p>
              )}

              <div className={styles.bio}>
                {person.bio.split('\n\n').map((paragraph, index) => (
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
