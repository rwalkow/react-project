import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getIsFavorite } from '../../redux/cardsRedux.js';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favCards = useSelector(state => getIsFavorite(state));

  if(favCards.length === 0) return (
    <div className={styles.hero}>
      <PageTitle title="Favorite" />
      <p className={styles.subtitle}>No cards...</p>
    </div>
  );

  return (
    <div className={styles.hero}>
      <PageTitle title="Favorites" />
      <ul className={styles.cards}>{favCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id}/>)}
      </ul>

    </div>
  );
};

export default Favorites;
