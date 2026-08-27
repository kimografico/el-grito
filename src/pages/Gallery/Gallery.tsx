import { Hero } from '../../components/Hero/Hero';
import { InstagramGallery } from '../../components/InstagramGallery/InstagramGallery';
import { useTranslation } from '../../locales/context';
import styles from './Gallery.module.css';

export function Gallery() {
  const { ts } = useTranslation();

  return (
    <div className={styles.gallery}>
      <Hero title={ts('pages.galleryTitle')} image="/images/decorative/antique-map-background.jpg" />

      <section className={styles.section}>
        <div className="container">
          <InstagramGallery />
        </div>
      </section>
    </div>
  );
}
