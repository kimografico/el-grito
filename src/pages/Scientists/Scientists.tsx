import { PersonCard } from '../../components/PersonCard/PersonCard';
import { scientists } from '../../data/scientists';
import { useTranslation } from '../../locales/context';
import styles from './Scientists.module.css';

export function Scientists() {
  const { ts } = useTranslation();

  return (
    <div className={styles.scientists}>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{ts('pages.scientistsTitle')}</h1>
          <div className={styles.grid}>
            {scientists.map((scientist) => (
              <PersonCard
                key={scientist.id}
                name={scientist.name}
                image={scientist.image}
                roleKey={`scientistBios.${scientist.id}.role`}
                linkTo={`/cientifico/${scientist.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
