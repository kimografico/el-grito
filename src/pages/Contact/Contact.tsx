import { Hero } from '../../components/Hero/Hero';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useTranslation } from '../../locales/context';
import styles from './Contact.module.css';

export function Contact() {
  const { ts } = useTranslation();

  return (
    <div className={styles.contact}>
      <Hero
        title={ts('pages.contactTitle')}
        subtitle={ts('pages.contactSubtitle')}
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>{ts('pages.contactIntro1')}</p>
            <p>{ts('pages.contactIntro2')}</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
