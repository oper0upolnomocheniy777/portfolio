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
              Учусь быстро, задаю вопросы, не боюсь лезть в незнакомый код. 
              Начинала с HTML и CSS, потом JavaScript, сейчас — React 
              и TypeScript.
            </p>
            <p>
              Больше всего люблю момент, когда после твоих правок что-то начинает 
              работать лучше: интерфейс становится удобнее, код — понятнее, 
              верстка — крепче. Ради этого и занимаюсь фронтендом.
            </p>
            <p>
              Сейчас ищу стажировку, где смогу приносить пользу, работать в команде
              и расти как разработчик.
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