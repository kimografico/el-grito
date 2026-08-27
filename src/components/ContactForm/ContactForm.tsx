import { useState } from 'react';
import { useTranslation } from '../../locales/context';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { ts } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@elgritodelanaturaleza.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${ts('contact.formMailtoName')} ${name}\n${ts('contact.formMailtoEmail')} ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          {ts('contact.formName')}
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          {ts('contact.formEmail')}
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          {ts('contact.formSubject')}
        </label>
        <input
          type="text"
          id="subject"
          className={styles.input}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          {ts('contact.formMessage')}
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.button}>
        {ts('contact.formSubmit')}
      </button>
    </form>
  );
}
