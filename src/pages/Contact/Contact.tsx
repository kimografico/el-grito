import { Hero } from '../../components/Hero/Hero';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <div className={styles.contact}>
      <Hero
        title="Contacto"
        subtitle="¡La Tierra te necesita!"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p>¿Te imaginas qué sería del mundo en un futuro?</p>
            <p>
              ¿Qué podría pasar si seguimos con nuestros hábitos insostenibles? y
              haciendo caso omiso sobre lo que pasa en nuestro planeta Tierra.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
