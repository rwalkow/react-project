import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title="About" />
      <p className={styles.subtitle}>Coś tam, coś tam</p>
    </div>
  );
};

export default About;
