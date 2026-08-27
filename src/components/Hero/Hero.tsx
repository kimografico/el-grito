import { img } from '../../config/constants';
import { useTranslation } from '../../locales/context';
import styles from './Hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  showLogo?: boolean;
}

export function Hero({ title, subtitle, image, showLogo = false }: HeroProps) {
  const { ts } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {showLogo && (
            <img
              src={img('/images/logo/logo-full.png')}
              alt={ts('global.siteName')}
              className={styles.logo}
            />
          )}
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
