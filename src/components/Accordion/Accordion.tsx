import { useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
  title: string;
  content: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={`${styles.trigger} ${openIndex === index ? styles.open : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            <span className={styles.arrow}>▾</span>
          </button>
          <div className={`${styles.content} ${openIndex === index ? styles.contentOpen : ''}`}>
            {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
