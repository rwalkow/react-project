import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorites = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title="Favorites" />
      <p className={styles.subtitle}>Coś tam, coś tam</p>
    </div>
  );
};

export default Favorites;
