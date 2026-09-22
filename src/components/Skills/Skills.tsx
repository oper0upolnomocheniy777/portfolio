import { skillGroups } from '../../data/skills';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">
          Мои <span className="gradient-text">навыки</span>
        </h2>
        <p className="section__subtitle">
          Технологии и инструменты, с которыми я работаю
        </p>

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.level} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.level}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};