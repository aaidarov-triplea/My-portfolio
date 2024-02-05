//styles
import styles from './styles.module.css'
//file
import IMG from '../../assets/12.jpg'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_imagebox}>
        <img src={IMG} alt="image" />
      </div>
      <div className={styles.about_info}>
        <h1 className={styles.about_info_title}>About me</h1>
        <p className={styles.about_info_text}>
          Привет! Я начинающий Frontend разработчик меня завут{" "}
          <strong>Акжол</strong>. Закончил курсы по веб-разработке в{" "}
          <strong>Codify Lab</strong> и увлекаюсь созданием интерфейсов для
          веб-приложений. Мои основные навыки включают{" "}
          <strong>HTML, CSS, JavaScript и React</strong>. В поиске опыта работы
          и возможности углубиться в разработку с использованием фреймворков,
          таких как React. Cтремлюсь к постоянному саморазвитию. Готов к
          сотрудничеству и открыт новым проектам!
        </p>
      </div>
    </div>
  );
}

export default About
