import { Link } from 'react-router-dom';
import { scientists } from '../../data/scientists';
import { useTranslation } from '../../locales/context';
import styles from './Scientists.module.css';

export function Scientists() {
  const { t, ts } = useTranslation();

  return (
    <div className={styles.scientists}>
      <section className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>{ts('pages.scientistsTitle')}</h1>
          <div className={styles.grid}>
            {scientists.map((scientist) => {
              const role = t(`scientistBios.${scientist.id}.role`) as string;
              return (
                <Link
                  key={scientist.id}
                  to={`/cientifico/${scientist.id}`}
                  className={styles.card}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={scientist.image}
                      alt={scientist.name}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.name}>{scientist.name}</h3>
                    <p className={styles.role}>{role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
