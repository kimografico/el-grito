import { PersonCard } from '../../components/PersonCard/PersonCard';
import { artists } from '../../data/team';
import { useTranslation } from '../../locales/context';

export function Artists() {
  const { ts } = useTranslation();

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{ts('pages.artistsTitle')}</h1>
          <div className="cardGrid">
            {artists.map((artist) => (
              <PersonCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
                roleKey={`artistRoles.${artist.id}`}
                linkTo={`/equipo/${artist.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
