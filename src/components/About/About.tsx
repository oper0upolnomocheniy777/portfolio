import styles from './About.module.css';

export const About = () => {
  const facts = [
    { label: 'Город', value: 'Таганрог' },
    { label: 'Образование', value: 'ЮФУ, выпуск 2026' },
    { label: 'Языки', value: 'Русский, английский B2' },
    { label: 'Статус', value: 'Открыта к стажировке' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          Обо <span className="gradient-text">мне</span>
        </h2>
        <p className="section__subtitle">
          Немного о том, кто я и чем занимаюсь
        </p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Я выпускница ЮФУ по направлению «Фундаментальная информатика
              и информационные технологии». Начинала с вёрстки простых сайтов,
              потом перешла к React и TypeScript — сейчас делаю полноценные
              веб-приложения.
            </p>
            <p>
              Больше всего мне нравится фронтенд: когда из макета получается
              живой интерфейс, который приятно использовать. Люблю разбираться
              в новых технологиях, писать чистый код и делать так, чтобы всё
              работало быстро и удобно.
            </p>
            <p>
              Сейчас ищу стажировку, где смогу расти, работать в команде
              и создавать реальные проекты.
            </p>
          </div>

          <ul className={styles.facts}>
            {facts.map((fact) => (
              <li key={fact.label} className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};