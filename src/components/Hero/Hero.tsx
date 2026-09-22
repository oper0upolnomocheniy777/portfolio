// src/components/Hero/Hero.tsx
import styles from './Hero.module.css';

export const Hero = () => {
  const goToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.greeting}>Привет, я Ксения 👋</span>

          <h1 className={styles.title}>Frontend-разработчик</h1>
          <p className={styles.location}>г. Таганрог</p>

          <p className={styles.text}>
            Выпускница ЮФУ по направлению «Фундаментальная информатика
            и информационные технологии». Делаю сайты и веб-приложения,
            люблю превращать макеты в живые интерфейсы и изучать 
            новые технологии.
          </p>

          <div className={styles.buttons}>
            <button className="btn btn--primary" onClick={goToProjects}>
              Мои проекты
            </button>

            <a href="/resume.pdf" download className="btn btn--outline">
              Скачать резюме
            </a>
          </div>
        </div>

        {/* Фото с декором */}
        <div className={styles.photoWrap}>
          {/* Пунктирный круг */}
          <div className={styles.dashedCircle} />

          {/* Градиентное свечение сзади */}
          <div className={styles.photoGlow} />

          {/* Фото */}
          <img
            src="/photo.png"
            alt="Фото"
            className={styles.photo}
          />

          {/* Декоративные точки */}
          <span className={`${styles.dot} ${styles.dot1}`} />
          <span className={`${styles.dot} ${styles.dot2}`} />
          <span className={`${styles.dot} ${styles.dot3}`} />
          <span className={`${styles.dot} ${styles.dot4}`} />

          {/* Иконки технологий вокруг */}
          <span className={`${styles.techIcon} ${styles.iconReact}`}>⚛</span>
          <span className={`${styles.techIcon} ${styles.iconJs}`}>JS</span>
          <span className={`${styles.techIcon} ${styles.iconTs}`}>TS</span>
          <span className={`${styles.techIcon} ${styles.iconCss}`}>#</span>
        </div>
      </div>
    </section>
  );
};