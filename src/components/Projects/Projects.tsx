import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">
          Мои <span className="gradient-text">проекты</span>
        </h2>
        <p className="section__subtitle">
          Несколько работ, которые я сделала за время учёбы
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.techList}>
                  {project.tech.map((tech) => (
                    <li key={tech} className={styles.tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={styles.links}>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      Демо →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};