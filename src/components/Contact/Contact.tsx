import { useState } from 'react';
import styles from './Contact.module.css';

const contacts = [
  {
    id: 'email',
    label: 'Email',
    value: 'kseniabroslavceva@gmail.com',
    action: 'copy' as const,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@strekoza_kssha',
    action: 'copy' as const,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'oper0upolnomocheniy777',
    link: 'https://github.com/oper0upolnomocheniy777',
    action: 'link' as const,
  },
];

export const Contact = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Если браузер не поддерживает clipboard — ничего не делаем
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">
          Свяжитесь <span className="gradient-text">со мной</span>
        </h2>
        <p className="section__subtitle">
          Открыта к стажировкам и интересным проектам
        </p>

        <div className={styles.grid}>
          {contacts.map((item) => {
            // Для GitHub — ссылка
            if (item.action === 'link') {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                >
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                  <span className={styles.hint}>Открыть профиль →</span>
                </a>
              );
            }

            // Для Email и Telegram — копирование
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCopy(item.id, item.value)}
                className={styles.card}
              >
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.hint}>
                  {copiedId === item.id ? 'Скопировано ✓' : 'Нажмите, чтобы скопировать'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};