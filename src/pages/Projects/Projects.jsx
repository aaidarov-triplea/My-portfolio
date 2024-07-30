//styles
import styles from "./styles.module.css";
import { PROJECTS } from "../../projects";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_items}>
        <h1>PROJECTS</h1>
        <div className={styles.card__item}>
          {PROJECTS.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.card__img}>
                <img src={item.imgUrl} alt="" width={150} height={150} />
              </div>
              <h2>{item.title}</h2>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card__link}
              >
                View project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
