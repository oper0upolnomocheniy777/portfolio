import { useEffect, useState } from 'react';
import { navItems } from '../../data/nav';
import styles from './Header.module.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Меняем фон шапки при скролле + следим за активной секцией
// Отслеживаем скролл: меняем фон шапки + определяем активную секцию
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);

    // Активная секция — та, что ближе всего к центру экрана
    const screenCenter = window.innerHeight / 2;
    let currentSection = navItems[0].id;

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      // Если секция пересекает центр экрана — она активна
      if (rect.top <= screenCenter && rect.bottom >= screenCenter) {
        currentSection = item.id;
        break;
      }

      // Если центр экрана выше секции — значит, мы её ещё не прошли
      if (rect.top > screenCenter) {
        break;
      }

      // Иначе — секция уже пройдена, запоминаем её как текущую
      currentSection = item.id;
    }

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // вызываем сразу при загрузке

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // Скрываем скролл, когда открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

 const goToSection = (id: string) => {
  setMenuOpen(false);
  const el = document.getElementById(id);
  if (!el) return;

  const headerHeight = 72; // высота шапки (--navbar-height)
  const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({ top: y, behavior: 'smooth' });
};

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            goToSection('hero');
          }}
        >
          <span className={styles.logoMark}>К</span>
          <span className={styles.logoText}>Брославцева</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${
                    activeSection === item.id ? styles.navLinkActive : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className={`btn btn--primary ${styles.cta}`}
          onClick={(e) => {
            e.preventDefault();
            goToSection('contact');
          }}
        >
          Связаться
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};