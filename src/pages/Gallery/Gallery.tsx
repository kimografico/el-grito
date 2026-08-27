import { Hero } from '../../components/Hero/Hero';
import { InstagramGallery } from '../../components/InstagramGallery/InstagramGallery';
import styles from './Gallery.module.css';

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <Hero title="Galería" image="/images/decorative/antique-map-background.jpg" />

      <section className={styles.section}>
        <div className="container">
          <InstagramGallery />
        </div>
      </section>
    </div>
  );
}
