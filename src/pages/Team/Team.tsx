import { PersonCard } from '../../components/PersonCard/PersonCard';
import { teamMembers } from '../../data/team';
import { useTranslation } from '../../locales/context';

export function Team() {
  const { ts } = useTranslation();

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle">{ts('pages.teamTitle')}</h1>
          <div className="cardGrid">
            {teamMembers.map((member) => (
              <PersonCard
                key={member.id}
                name={member.name}
                image={member.image}
                roleKey={`teamRoles.${member.id}`}
                linkTo={`/equipo/${member.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
