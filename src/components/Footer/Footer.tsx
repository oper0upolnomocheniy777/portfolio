import { useState } from 'react';
import { navItems } from '../../data/nav';
import styles from './Footer.module.css';

const socials = [
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

export const Footer = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const goToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = 72;
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // если браузер не поддерживает clipboard — ничего не делаем
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Логотип */}
          <div className={styles.brand}>
            <span className={styles.logoMark}>К</span>
            <div>
              <p className={styles.name}>Ксения Брославцева</p>
              <p className={styles.role}>Frontend-разработчик</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={styles.navLink}
                    onClick={() => goToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Соцсети */}
          <ul className={styles.socials}>
            {socials.map((item) => (
              <li key={item.id}>
                {item.action === 'link' ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.social}
                    title={item.value}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.social}
                    onClick={() => handleCopy(item.id, item.value)}
                    title={item.value}
                  >
                    {copiedId === item.id ? 'Скопировано ✓' : item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Нижняя строка */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ксения Брославцева. Все права защищены.
          </p>
          <button
            type="button"
            className={styles.upBtn}
            onClick={scrollToTop}
            aria-label="Наверх"
          >
            Наверх ↑
          </button>
        </div>
      </div>
    </footer>
  );
};