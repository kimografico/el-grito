import styles from './Colaborador.module.css';

interface ColaboradorProps {
  name: string;
  logo: string;
  description: string;
  website: string;
  location: string;
}

export function Colaborador({ name, logo, description, website, location }: ColaboradorProps) {
  return (
    <div className={styles.colaborador}>
      <div className={styles.imageWrapper}>
        <img src={logo} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {website.replace('https://', '').replace('http://', '')}
        </a>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
